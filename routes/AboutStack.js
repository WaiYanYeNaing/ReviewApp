import { createStackNavigator } from 'react-navigation-stack'
import About from '../screen/About'

const screens = {
  About: {
    screen: About,
    navigationOptions: {
      title: 'About'
    }
  }
}

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {
      backgroundColor: '#eee',
      height: 80
    }
  }
})

export default AboutStack
