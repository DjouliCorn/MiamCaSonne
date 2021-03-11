import { Button} from 'native-base';
import React, { useState } from 'react';
import{StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { ButtonGroup, SearchBar } from 'react-native-elements';


import { MaterialIcons, AntDesign, FontAwesome, SimpleLineIcons, Ionicons  } from '@expo/vector-icons'; 
import Constant from 'expo-constants'




export default class Header extends React.Component{
   

    constructor(){
        super()
        this.state={
            selectedIndex:0,      
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex (selectedIndex) {
        this.setState({selectedIndex})    
    }
    
    render(){
        const buttonsDeli = ['Livraison','A emporter']
        const { selectedIndex } = this.state

        return(
            <View style={{
                marginTop:Constant.statusBarHeight,
                height:155,
                backgroundColor:"white",
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
                        buttons={buttonsDeli}
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        containerStyle={{width:170, height:25, borderRadius:10, color:"#00CDBC", borderColor:"white"}}
                        innerBorderStyle={{width: 6, color:"white"}}
                        
                        />
                </View>
                <View style={{flexDirection:"row"}}>
                    <Button style={styles.searchBarStyle}>
                        <SimpleLineIcons name="magnifier" size={18} color="grey"  />
                    </Button>
                    <Button transparent style={{marginLeft:50}}>
                    <Ionicons name="filter" size={24} color="#00CDBC" />
                    </Button>
                </View>
                
            </View>
        )
    }

}
const styles = StyleSheet.create({


    searchBarStyle:{
        width:300,
        height:38,
        marginTop:5,
        marginLeft:8,
        marginBottom:10,
        backgroundColor:"#e6e8ea",
        padding:5
    }
})