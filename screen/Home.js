import React, { useState } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { globalStyles } from '../styles/global'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'

export default function Home({ navigation }) {
  // const pressHandler = () => {
  //   navigation.navigate('ReviewDetail')
  //   // navigation.push('ReviewDetail')
  // }

  const [review, setReview] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1'
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2'
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 4,
      body: 'lorem ipsum',
      key: '3'
    }
  ])

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={review}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(
                'ReviewDetail',
                item /*pass data to navigated screen [allow object]*/
              )
            }
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
