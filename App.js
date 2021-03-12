
import * as React from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import MainScreen from './MainScreen'
import AboutTheApp from './AboutTheApp'
import UserInfos from './UserInfos'
import Cart from './Cart'
import PageResto from './PageResto'

const StackNavigator = createStackNavigator(
  {
    Screen1: {screen: MainScreen},
    ScreenAbout: {screen: AboutTheApp},
    ScreenUserInfos: {screen: UserInfos},
    ScreenCart : {screen: Cart},
    ScreenPageResto : {screen: PageResto},
  },
  {
    headerMode: 'none'
  }
)

const AppContainer = createAppContainer(StackNavigator);


export default class App extends React.Component {
  
  render(){
    return <AppContainer/>
  }
}
