import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import apirestos from './apirestos'

const {width, height} = Dimensions.get('screen');
const api = apirestos.create();

export default class App extends React.Component {

    state = {
        listRestos: []
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
                listRestos: listRestosFetched
            })
        }
        console.log('liste Restos:', JSON.stringify(listRestos))
    }

    render(){
        return(
            <View style={{ flex: 1, paddingTop: 20 }}>

                <FlatList
                    data={this.state.listRestos}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => <Text>{item.name}</Text>,
                    <Image
                    source={require({image})}
                />}
                    
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
  });

/*const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

export default () => {
    
    return(
        <View>
            <StatusBar hidden />
            <FlatList>
            

                <Text>
                    Hello People
                </Text>
            
            </FlatList>
        </View>
    )
    
    }*/