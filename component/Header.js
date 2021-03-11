import { Icon } from 'native-base';
import React from 'react';
import{StyleSheet, Text, View, ButtonGroup} from 'react-native';
import { ToggleButton } from 'react-native-paper';

import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import Constant from 'expo-constants'

export default class Header extends React.Component{
    state = {
        value:'left'
    };
    render(){
        return(
            <View style={{
                marginTop:Constant.statusBarHeight,
                height:130,
                backgroundColor:"#DEF3E9",
                flexDirection:"column"
            }}>
                <View style={{flex:1, flexDirection:"row", margin:8}}>
                    <MaterialIcons name="delivery-dining" size={64} color="#00CDBC"/>
                    <View style={{marginTop:5, marginLeft:5}}>
                        <Text style={{color:"grey"}}>Maintenant</Text>
                        <View style={{flexDirection:"row", marginTop:5}}>
                            <Text style={{fontSize:20}}>Lieu actuel</Text>
                            <AntDesign name="down" size={24} color="#00CDBC"/>
                        </View>                        
                    </View>
                    <FontAwesome name="user-circle" size={40} color="#00CDBC" style={{marginLeft:160, marginTop:5}} />
                </View>
                <View>
                    <ButtonGroup
                        onValueChange={value=>this.setState({value})}
                        value={this.state.value} >
                            <Button Text value="left" Text="Livraison"> </Button>
                            <Button icon="format-align-right" value="right" />
                    </ButtonGroup>
                </View>
                <View></View>
            </View>
        )
    }

}