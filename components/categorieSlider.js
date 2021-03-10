import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, ScrollView, SafeAreaView } from 'react-native';
const {width, height} = Dimensions.get('screen');


const styles = StyleSheet.create({
  image: {
    width:200, 
    height:200,
    resizeMode: 'cover'
  },
  scrollview: {
    flexDirection: 'row',
  }
})

const categorie =[
  'https://c1.scryfall.com/file/scryfall-cards/normal/front/0/d/0dcf8c0a-cf91-42a0-a54e-da5e7c697ee3.jpg?1610153284',
  'https://c1.scryfall.com/file/scryfall-cards/normal/front/3/b/3bfa5ebc-5623-4eec-89ea-dc187489ee4a.jpg?1610996921',
  'https://c1.scryfall.com/file/scryfall-cards/normal/front/3/d/3d7c3929-cd56-448d-9752-6d5f9d1fd778.jpg?1582068511',
  'https://c1.scryfall.com/file/scryfall-cards/normal/front/8/a/8ac1fceb-8427-409c-98a4-9a5c1ff980b4.jpg?1562202628',
  'https://c1.scryfall.com/file/scryfall-cards/normal/front/3/3/33893d4a-6304-4e13-9282-2a220a762715.jpg?1562868074',
  'https://c1.scryfall.com/file/scryfall-cards/normal/front/6/a/6abf0692-07d1-4b72-af06-93d0e338589d.jpg?1593274999',
  'https://c1.scryfall.com/file/scryfall-cards/normal/front/a/d/ad8b77cf-b53e-4da3-9c27-3851b7b25a98.jpg?1562927323',
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
        pagingEnabled
        renderItem = {({item}) => {
          return <View style={{width, alignItems: 'center',  justifyContent: 'center'}}>
            <Image source={{uri: item}} style={styles.image}/>
            
          </View>

        }}/>
      </View>
   );
 };