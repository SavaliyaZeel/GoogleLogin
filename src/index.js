import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainNavigation from './navigator/MainNavigation'
import { Colors } from './common/styles/color'

const index = () => {
  return (
    <View style={styles.mainBox}>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.main}  />
      <MainNavigation />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    mainBox: {
        flex: 1
    }
})