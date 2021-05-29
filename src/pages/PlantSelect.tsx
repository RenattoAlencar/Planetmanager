import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Header } from '../components/Header'
import { EnviromentButton } from '../components/EnviromentButton'
import { FlatList } from 'react-native-gesture-handler'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

import api from '../services/api'

interface EnviromentsProps {
  key: string,
  title: string
}

export function PlantSelect() {
  const [enviroments, setEnviroments] = useState<EnviromentsProps[]>([])

  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api.get('plants_environments')
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

  return (
    <View style={styles.container} >
      <View style={styles.header} >
        <Header />
        <Text style={styles.title} >Em qual ambiente</Text>
        <Text style={styles.subtitle} >você quer colocar sua planta?</Text>
      </View>
      <View>
        <FlatList data={enviroments} renderItem={({ item }) => {
          return <EnviromentButton key={item.key} title={item.title} />

        }} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.enviromentList} />
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
  }
})