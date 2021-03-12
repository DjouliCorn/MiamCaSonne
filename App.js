
import * as React from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import MainScreen from './MainScreen'
import AboutTheApp from './AboutTheApp'
import UserInfos from './UserInfos'
import Cart from './Cart'
import PlatsChoisis from './components/platsChoisis'

import Test from './components/test1'

const StackNavigator = createStackNavigator(
  { ScreenTest: {screen: Test},
    ScreenPlatsChoisis: {screen: PlatsChoisis},
    Screen1: {screen: MainScreen},
    ScreenAbout: {screen: AboutTheApp},
    ScreenUserInfos: {screen: UserInfos},
    ScreenCart : {screen: Cart},
    
    
  },
  {
    headerMode: 'none'
  }
)

const AppContainer = createAppContainer(StackNavigator);


export default class App extends React.Component {
  
  render(){
    return <AppContainer />
  }
}
