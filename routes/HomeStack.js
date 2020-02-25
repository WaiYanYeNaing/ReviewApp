import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screen/Home'
import ReviewDetail from '../screen/ReviewDetail'

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'ReviewApp'
      //   headerStyle: {
      //     backgroundColor: '#eee'
      //   }
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
    }
  }
})

export default HomeStack
