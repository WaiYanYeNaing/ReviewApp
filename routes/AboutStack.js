import { createStackNavigator } from 'react-navigation-stack'
import About from '../screen/About'
import Header from '../shared/Header'
import React from 'react'

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="About Review APP" />
        )
      }
    }
  }
}

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {
      backgroundColor: '#eee',
      height: 80
    },
    headerTitleAlign: 'center'
  }
})

export default AboutStack
