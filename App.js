
import * as React from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import MainScreen from './MainScreen'
import AboutTheApp from './AboutTheApp'


const StackNavigator = createStackNavigator(
  {
    Screen1: {screen: MainScreen},
    ScreenAbout: {screen: AboutTheApp},
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
