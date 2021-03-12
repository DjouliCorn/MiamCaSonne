import React  from 'react';
import {View, Text, TextInput, Keyboard, StyleSheet, FlatList, TouchableOpacity,ActivityIndicator,Image,Dimensions} from 'react-native';
import {AntDesign} from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';
import Constant from 'expo-constants'
import apirestos from './apirestos';
import _ from 'lodash'


const api = apirestos.create();
const {width, height} = Dimensions.get('screen');

export default class SearchBar extends React.Component {
    state = {
        listeRestos: [],
        loading:true,
    }
    // CONSTRUCTOR 
    constructor(props){
        super(props);
    }

    //SHOW/UNSHOW KEYBOARD
    async componentDidMount(){
        
        
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this._keyboardDidShow,
          );
          this.keyboardDidHideListener = Keyboard.addListener(
              'keyboardDidHide',
              this._keyboardDidHide,
            );
            const listRestosFetched = await api.getRestos()
        if(listRestosFetched.length>0){
            this.setState({
                listeRestos: listRestosFetched
            })
        }
    }
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
        clearTimeout(this.intervalID);
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
        <View style={{flex:1}}>
            <View style={{
                marginTop:StatusBar.currentHeight || 0,
                height:80,
                backgroundColor:"white",
                flexDirection:"column"
            }}>
                <View style={{marginTop:40, marginLeft:10, flexDirection:"row"}}>
                <AntDesign 
                    name="arrowleft" 
                    size={18} 
                    color="#00CDBC" 
                    style={{marginTop:8, marginRight:5}}
                    onPress={()=>this.props.navigation.goBack()} />
                <TextInput 
                    placeholder="Plat, restaurants..."
                    backgroundColor="white"
                    style={{padding:10, width:300}}
                    onSubmitEditing={Keyboard.dismiss}>
                </TextInput>       
                </View>
                <View style={{height:height, marginTop:20}}>
                <FlatList
                    vertical
                    data={this.state.listeRestos}   
                    renderItem = {({ item, index }) =>  
                    <View >
                        <TouchableOpacity  >
                            <View style={{flexDirection:"row"}}>
                                <Image source = {{uri: item.image}} style={styles.image}></Image>
                                    <View style={{flexDirection:"column", justifyContent:"center", marginLeft:10}}>
                                        <Text style={{fontSize:20}}>{item.name}</Text>
                                        <Text>{item.categories}</Text>
                                        <Text>{item.score} Rating</Text>
                                    </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    }
                    keyExtractor={(item, index, categories) => index.toString()} 
                    ItemSeparatorComponent={this.renderSeparator}      
                    
                />

                </View>
            
            </View>
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