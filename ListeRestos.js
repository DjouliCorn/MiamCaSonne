import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, ScrollView, SafeAreaView, TouchableOpacity,Button } from 'react-native';
import Constants from 'expo-constants';
import apirestos from './apirestos';
import PageResto from './PageResto';
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');
const api = apirestos.create();



export default class ListeRestos extends React.Component {

    state = {
        listeRestos: []
    }
    /*constructor(props){
        super(props);
        this.state = {
            
            dataSource: []
        }
    }*/

    /*pressHandler = () => {
        const navigation = useNavigation();
        return(
        navigation.navigate("ScreenAbout")
        )
    }*/


    async componentDidMount(){
        const listRestosFetched = await api.getRestos()
        if(listRestosFetched.length>0){
            this.setState({
                listeRestos: listRestosFetched
            })
        }
        //console.log('liste Restos:', JSON.stringify(listeRestos))
    }

    renderSeparator = () => {
        return (
          <View
            style={{
              height: 20,
              width: '86%',
              marginLeft: '5%'
            }}
          />
        )
      }
    

    

    render(){


        return(
            
            <View style={{ flex: 1, paddingTop: 20 }}>
                
                    
                <FlatList
                    data={this.state.listeRestos}
                    renderItem = {({ item, index }) =>  
                    <View >
                        <TouchableOpacity onPress={this.props.navigateToRestoPage}>
                        <Text style={{fontSize: 20, paddingBottom: 8, paddingLeft:8}}>{item.name}</Text>
                        <Image source = {{uri: item.image}} style={styles.image}></Image>
                        </TouchableOpacity>
                    </View>
                    }      
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={this.renderSeparator}

                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    image: {
        width:width, 
        height:200,
        resizeMode: 'cover',
        borderRadius: 12
      },
  });