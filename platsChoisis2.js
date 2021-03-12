import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import{Card,Container, Content, Footer} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import data from './data.json';

const styles = StyleSheet.create({
    imageSize: {
    width: 400,
    height: 200,
    },
    iconClose:{
        position: 'absolute', 
        top: 10, 
        left: 10,
        color:'#00CDBC',
        backgroundColor:'white',
        borderRadius: 50
    },
    iconResize:{
        position: 'absolute',
        top: 150, 
        right: 10,
        color:'white',
        backgroundColor:'rgba(0, 0, 0, 0.5)',
        borderRadius:5,
    },
    agencementDescriptionPrix:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'space-around',
        paddingBottom:20,
       
        marginTop:20,
    },
    nomDescription:{
        width:300,
        paddingTop:10,
        marginLeft:10,
        alignContent:'center'
    },
    nom:{
        fontSize:25,
    },
    description:{
        fontSize:15,
    },
    prix:{
        paddingTop:25,
        marginLeft:100,
        alignSelf:'center'
    },
    blocQuantite:{
        flex:1,
        flexDirection:'row',
       
        paddingTop:15,
        paddingBottom:15,
    },
    btnPlus:{
        paddingRight:50,
        color:'#00CDBC',
    },
    btnMoins:{
        paddingLeft:50,
        color:'#00CDBC',
    },

    nbQuantite:{
        fontSize:25,
        fontWeight: 'bold',
    },

    footer:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },    
    
    btn:{
        width: "90%", 
        margin: 10,
    },
    fontSize:{
        fontSize:20,
    }
  });



export default function platsChoisis({navigation}){
    const [count, setCount] = useState(0);
    

   function IncrementItem(){
        setCount(count + 1)
    }

function DecreaseItem(){
    if(count > 0)
    return setCount(count - 1)
    return null;
    }

    const [reviews, setReviews] = useState(data);

    return(
        <Container>
            <Content>
                <Image source={require('./assets/img-dish/calzone.jpeg')} style={styles.imageSize} />
                <Ionicons name="close-outline" size={40} style={styles.iconClose} onPress={() => this.props.navigation.goBack()}/>   
                <Ionicons name="resize-outline" size={35} style={styles.iconResize} />

               <View>
                   <FlatList 
                   contentContainerStyle={{flexGrow: 1, flexDirection: 'row', justifyContent: 'space-around'}}
                   data={reviews}
                   renderItem={({item}) => 
                   <View>
                    <Content contentContainerStyle={{width:300,
                                                    paddingTop:10,
                                                    marginLeft:10,
                                                    alignContent:'center'}}>
                   <Text contentContainerStyle={{fontSize:25,}}>{item.name}</Text>
                   <Text >{item.description}</Text>
                   </Content>
                   <Content>
                   <Text style={styles.fontSize}>{item.prix}€</Text>
                   </Content>
                   <Content contentContainerStyle={{flexDirection: 'row', justifyContent: 'space-around'}} >
                   <Ionicons name="remove-circle-outline" size={30} style={styles.btnMoins} onPress={DecreaseItem}/>
                    <Text >{ count }</Text>
                    <Ionicons name="add-circle-outline" size={30} style={styles.btnPlus} onPress={IncrementItem}/>  
                   </Content>
                   <Content style={styles.btn}>
                         <Button title='Ajouter un article' color="#00CDBC" onPress={() => navigation.navigate('ScreenCart',  {name: item.name, quantity: count, prix: item.prix} )}/>
                   </Content>
                   </View>
                   }

                   keyExtractor={(item, index) => index} 
                    />
                    
                </View>
            </Content>
            
                 
            </Container> 
    )
}