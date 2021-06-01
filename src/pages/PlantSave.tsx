import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

import { SvgUri } from 'react-native-svg'

import { Button } from '../components/Button'

import waterdrop from '../assets/waterdrop.png'

import colors from '../styles/colors'

export function PlantSave() {
  return (
    <View style={styles.container}>
      <View style={styles.plantInfo} >
        <SvgUri uri='' height={150} width={150} />
        <Text style={styles.plantName} >Nome da Planta</Text>
        <Text style={styles.plantAbout} > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde eum cumque adipisci, impedit voluptate fuga laborum soluta laboriosam asperiores, alias ex! Nisi sunt hic culpa aut sapiente pariatur cumque dolor? </Text>
      </View>

      <View style={styles.controller} >
        <View style={styles.tipContainer}>
          <Image source={waterdrop} style={styles.tipImage} />
          <Text style={styles.tipText} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sit nam veritatis quos iusto doloribus soluta dignissimos consequatur, voluptatum officiis vel ab voluptas impedit quod corrupti nesciunt reprehenderit a esse.
          </Text>
        </View>
        <Text style={styles.alertLabel} >
          Escolha o melhor horário para ser lembrado
        </Text>

        <Button title='Cadastrar Planta' onPress={() => { }} />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    color: colors.shape
  },
  plantInfo: {

  },
  plantName: {

  },
  plantAbout: {

  },
  controller: {

  },
  tipContainer: {

  },
  tipImage: {

  },
  tipText: {

  },
  alertLabel: {

  }
})