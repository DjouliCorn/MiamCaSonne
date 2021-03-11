

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
  
/*import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, RefreshControl } from 'react-native';
import CategorieSlider from './components/categorieSlider';
import BannSlider from './components/bannSlider';



const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function App() {

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }>
      <CategorieSlider />
      <BannSlider />
      </ScrollView>   
    </SafeAreaView>
  
  );
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',*/
