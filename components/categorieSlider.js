import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
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
'https://zupimages.net/up/21/10/v2qv.png',
'https://zupimages.net/up/21/10/eqv3.png',
'https://zupimages.net/up/21/10/i30x.png',
'https://zupimages.net/up/21/10/qqb4.png',
'https://zupimages.net/up/21/10/h1rs.png',
'https://zupimages.net/up/21/10/sqtc.png',
'https://zupimages.net/up/21/10/teg7.png',
'https://zupimages.net/up/21/10/pg8d.png',
  
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

        renderItem = {({item, index}) => {
          return <View style={styles.scrollview}>
            <TouchableOpacity key={index}>

            <Image source={{uri: item}} style={styles.image}/>
            
            </TouchableOpacity>
            
          </View>

        }}/>
      </View>
   );
 };