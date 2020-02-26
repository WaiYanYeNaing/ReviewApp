import React from 'react'
import { Formik } from 'formik'
import { globalStyles } from '../styles/global'
import { View, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default function ReviewForm({ addReview }) {
  return (
    <View style={{ ...globalStyles.container, backgroundColor: 'white' }}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        onSubmit={values => {
          addReview(values)
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review body"
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType="numeric"
            />
            <Button
              style={styles.btn}
              title="submit"
              color="maroon"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 10
  }
})
