import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
const {width, height} = Dimensions.get('screen');


const styles = StyleSheet.create({
  image: {
    width:100, 
    height:100,
    resizeMode: 'cover',
    borderRadius: 12
  },
  
  scrollview: {
    alignItems: 'center', 
    justifyContent: 'center',
    padding: 5,
  }
})

const categorie =[
  'http://puu.sh/Ho1gC/162cb11f8c.png',
  'http://puu.sh/Ho1fd/74991b1e6d.png',
  'http://puu.sh/Ho1fw/b7b20fd570.png',
  'http://puu.sh/Ho1fW/93c513e9a7.png',
  'http://puu.sh/Ho1g4/bf44cb18a9.png',
  'http://puu.sh/Ho1gc/be24a5e772.png',
  'http://puu.sh/Ho1gq/ddf771d57d.png',
  'http://puu.sh/Ho1gw/d71ff80dfe.png',
  
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
        horizontal
        renderItem = {({item}) => {
          return <View style={styles.scrollview}>
            <TouchableOpacity>
            <Image source={{uri: item}} style={styles.image}/>
            </TouchableOpacity>
            
          </View>

        }}/>
      </View>
   );
 };