import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screen/Home'
import ReviewDetail from '../screen/ReviewDetail'
import React from 'react'
import Header from '../shared/Header'

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Review APP" />
      }
    }
  },
  ReviewDetail: {
    screen: ReviewDetail,
    navigationOptions: {
      title: 'Review Detail'
      //   headerStyle: {
      //     backgroundColor: '#eee'
      //   }
    }
  }
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {
      backgroundColor: '#eee',
      height: 80
    },
    headerTitleAlign: 'center'
  }
})

export default HomeStack
