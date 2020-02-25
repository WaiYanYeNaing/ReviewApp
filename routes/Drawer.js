import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import HomeStack from './HomeStack'
import About from '../screen/About'

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack
  },
  About: {
    screen: About
  }
})

export default createAppContainer(RootDrawerNavigator)
