import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
const {width, height} = Dimensions.get('screen');

export default class PageResto extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
            dataSource: []
        }
    }

    render(){
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
    }

}