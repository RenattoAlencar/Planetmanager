import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

import { getBottomSpace } from 'react-native-iphone-x-helper'

import { SvgUri } from 'react-native-svg'

import { Button } from '../components/Button'

import waterdrop from '../assets/waterdrop.png'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem.
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
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.shape
  },
  plantName: {
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,
    marginTop: 15
  },
  plantAbout: {
    textAlign: 'center',
    fontFamily: fonts.text,
    color: colors.heading,
    fontSize: 17,
    marginTop: 10
  },
  controller: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: getBottomSpace() || 15
  },
  tipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.blue_light,
    padding: 20,
    borderRadius: 20,
    position: 'relative',
    bottom: 60
  },
  tipImage: {
    width: 56,
    height: 56
  },
  tipText: {
    flex: 1,
    marginLeft: 20,
    fontFamily: fonts.text,
    color: colors.blue,
    fontSize: 17,
    textAlign: 'justify'
  },
  alertLabel: {
    textAlign: 'center',
    fontFamily: fonts.complement,
    color: colors.heading,
    fontSize: 12,
    marginBottom: 5
  }

})