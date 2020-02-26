import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Button,
  Modal,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'
import { globalStyles } from '../styles/global'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import Card from '../shared/Card'
import { MaterialIcons } from '@expo/vector-icons'
import ReviewForm from './ReviewForm'

export default function Home({ navigation }) {
  // const pressHandler = () => {
  //   navigation.navigate('ReviewDetail')
  //   // navigation.push('ReviewDetail')
  // }
  const [modalOpen, setModalOpen] = useState(false)

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

  const addReview = review => {
    review.key = Math.random().toString()
    setReview(currentReviews => {
      return [review, ...currentReviews]
    })
    setModalOpen(false)
  }

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

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
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 0.1,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  },
  modalContent: {
    height: '100%',
    backgroundColor: 'white'
  }
})
