import React from 'react';
import { StyleSheet,Image, View, Text } from 'react-native';
import HeaderLea from '../component/Header'

import logoDeli from '../assets/img/food-delivery.png'
import logoUser from '../assets/img/user.png'
import arrowBas from '../assets/img/arrowBas.png'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class MainScreen extends React.Component {

  render(){
  return (
    <View style={{flex:1}}>
      <HeaderLea/>
      <Text>Home screen</Text>
    </View>

    )
    }
}

const styles = StyleSheet.create({
 //HEADER 
  
});