import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import apirestos from './apirestos';
import PageResto from './PageResto';
import { withNavigation } from 'react-navigation';

const {width, height} = Dimensions.get('screen');
const api = apirestos.create();

export default class ListeRestos extends React.Component {

    state = {
        listeRestos: []
    }
    constructor(props){
        super(props);

        this.state = {
            
            dataSource: []
        }
    }

    async componentDidMount(){
        const listRestosFetched = await api.getRestos()
        if(listRestosFetched.length>0){
            this.setState({
                listeRestos: listRestosFetched
            })
        }
        //console.log('liste Restos:', JSON.stringify(listeRestos))
    }

 

    render(){
        return(
            
            <View style={{ flex: 1, paddingTop: 20 }}>

                <FlatList
                    data={this.state.listeRestos}
            
                    renderItem={({ item, index }) => 
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('PageResto')}>
                        <Text>{item.name}</Text>
                        <Image source = {{uri: item.image}} style={styles.image}></Image>
                        </TouchableOpacity>
                    </View>
                    }      
                    keyExtractor={(item, index) => index.toString()}
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
        width:200, 
        height:200,
        resizeMode: 'cover',
        borderRadius: 12
      },
  });