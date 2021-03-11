import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
const {width, height} = Dimensions.get('screen');


const styles = StyleSheet.create({
  image: {
    width:400, 
    height:200,
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
  'https://zupimages.net/up/21/10/gvtr.png',
  'https://zupimages.net/up/21/10/kc7j.png',
  'https://zupimages.net/up/21/10/eoqw.png',
  
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