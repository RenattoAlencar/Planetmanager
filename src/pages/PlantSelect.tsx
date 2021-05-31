import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import { Header } from '../components/Header'
import { EnviromentButton } from '../components/EnviromentButton'
import { PlantCardPrimary } from '../components/PlantCardPrimary'
import { Load } from '../components/Load'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

import api from '../services/api'

interface EnviromentsProps {
  key: string,
  title: string
}

interface PlantsProps {
  id: number,
  name: string,
  about: string,
  water_tips: string,
  photo: string,
  environments: [string],
  frequency: {
    times: number,
    repeat_every: string
  }
}
export function PlantSelect() {
  const [enviroments, setEnviroments] = useState<EnviromentsProps[]>([])
  const [plants, setPlants] = useState<PlantsProps[]>([])
  const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([])
  const [enviromentSelected, setEnviromentSelected] = useState('all')
  const [loading, setLoading] = useState(true)

  function handleEnviromentSelected(enviroment: string) {
    setEnviromentSelected(enviroment)

    if (enviroment === 'all')
      return setFilteredPlants(plants)

    const filtered = plants.filter(plant => plant.environments.includes(enviroment))

    setFilteredPlants(filtered)
  }


  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api.get('plants_environments', {
        params: {
          _sort: 'title',
          _order: 'asc'
        }
      })

      setEnviroments([
        {
          key: 'all',
          title: 'Todos'
        },
        ...data
      ])
    }
    fetchEnviroment()
  }, [])

  useEffect(() => {
    async function fetchPlants() {
      const { data } = await api.get('plants', {
        params: {
          _sort: 'name',
          _order: 'asc'
        }
      })
      setPlants(data)
      setFilteredPlants(data)
      setLoading(false)
    }
    fetchPlants()
  }, [])

  if (loading)
    return <Load />

  return (
    <View style={styles.container} >
      <View style={styles.header} >
        <Header />
        <Text style={styles.title} >Em qual ambiente</Text>
        <Text style={styles.subtitle} >você quer colocar sua planta?</Text>
      </View>

      <View>
        <FlatList data={enviroments} renderItem={({ item }) => (
          <EnviromentButton title={item.title} active={item.key === enviromentSelected} onPress={() => handleEnviromentSelected(item.key)} />
        )} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.enviromentList} />
      </View>

      <View style={styles.plants} >
        <FlatList data={filteredPlants} renderItem={({ item }) => (
          <PlantCardPrimary data={item} />
        )} showsVerticalScrollIndicator={false} numColumns={2} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 30
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15
  },
  subtitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    lineHeight: 20,
    color: colors.heading
  },
  enviromentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32
  },
  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center'
  }

})