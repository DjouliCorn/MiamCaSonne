import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class Test extends React.Component{
    render(){
        return(
            <View>
            <Text>Coucou</Text>      
            <Button title="Aller sur l'article" color="#00CDBC" onPress={() => this.props.navigation.navigate('ScreenPlatsChoisis')} />
            </View>
        );
    }
}