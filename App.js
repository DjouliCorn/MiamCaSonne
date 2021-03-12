
import * as React from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import MainScreen from './MainScreen'
import AboutTheApp from './AboutTheApp'
import UserInfos from './UserInfos'
import PlatsChoisis from './components/platsChoisis'
import Cart from './Cart'


const StackNavigator = createStackNavigator(
  {
    /*Screen1: {screen: MainScreen},
    ScreenAbout: {screen: AboutTheApp},
  ScreenUserInfos: {screen: UserInfos},*/
    
    ScreenPlats: {screen: PlatsChoisis},
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
