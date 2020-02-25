import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import Navigator from './routes/Drawer'

const getFonts = () =>
  Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  })

export default function App() {
  const [fontloaded, setFontloaded] = useState(false)

  if (fontloaded) {
    return <Navigator />
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontloaded(true)} />
    )
  }
}

const styles = StyleSheet.create({})
