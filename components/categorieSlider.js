import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, ScrollView, SafeAreaView } from 'react-native';
const {width, height} = Dimensions.get('screen');


const styles = StyleSheet.create({
  image: {
    width:100, 
    height:100,
    resizeMode: 'cover'
  },
  scrollview: {
    flexDirection: 'row',
  }
})

const categorie =[
  './assets/test.png',
  './assets/test.png',
  './assets/test.png',
  './assets/test.png',
]

const imageW = width * 0.7;
const imageH = imageW * 1.5;


 export default () => {
   return(
      <View>
        <StatusBar hidden />
        <FlatList 
        data = {categorie}
        keyExtractor={(_, index)=> index.toString()} 
        renderItem = {({item}) => {
          return <View>
            <Image source={require(item)} style={styles.image}/>
          </View>

        }}/>
      </View>
   );
 };