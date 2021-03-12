import React  from 'react';
import {View, Text, TextInput, Keyboard, StyleSheet, FlatList, TouchableOpacity,ActivityIndicator,Image} from 'react-native';
import {AntDesign} from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';
import Constant from 'expo-constants'
import apirestos from './apirestos';
import _ from 'lodash'


const api = apirestos.create();

export default class SearchBar extends React.Component {
    intervalID;
   

    // CONSTRUCTOR 
    constructor(props){
        super(props);
        this.state={
            loading:true,
            listeRestos:[]       
        }
    }

    //SHOW/UNSHOW KEYBOARD
    componentDidMount(){
        
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this._keyboardDidShow,
          );
          this.keyboardDidHideListener = Keyboard.addListener(
              'keyboardDidHide',
              this._keyboardDidHide,
            );
           // this.getListResto(); 
    }
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
        clearTimeout(this.intervalID);
    }

 getListResto(){
        fetch("https://demo3431604.mockable.io/getRestos")
            .then (response=> response.json())
            .then ((responseData)=>{
                this.setState({
                    loading:false,
                    listeRestos:responseData.data
                })
            })
            .catch(error=>console.log(error))
    }
    showListresto(data){
        <TouchableOpacity>
            <Image source={data.image}/>
        </TouchableOpacity>
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
                <View>
                <FlatList
                    vertical
                    data={this.state.listeRestos}
                    keyExtractor={(item, index) => index.toString()}    
                    renderItem = {({ item, index }) =>  
                    <View >
                        <TouchableOpacity  >
                        <Text>{item.name}</Text>
                        <Image source = {{uri: item.image}} style={styles.image}></Image>
                        </TouchableOpacity>
                    </View>
                    }      
                    
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