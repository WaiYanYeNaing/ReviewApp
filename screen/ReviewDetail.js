import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { globalStyles } from '../styles/global'

export default function ReviewDetail({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>{navigation.getParam('title')}</Text>
      <Text>{navigation.getParam('body')}</Text>
      <Text>{navigation.getParam('rating')}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24
  }
})
