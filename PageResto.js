import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View, Header, Container, Image, Left, Content, Footer } from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import apirestos from './apirestos';

const api = apirestos.create();


export default class PageResto extends React.Component {

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

  //const {datadata} = this.state.listeRestos;
  return (

    

    <Container>
    <Header
    style={{     
      ...Platform.select({
        ios: {
          padding: 12,
        },
        android: {
          paddingTop: 15
        }
      })
    }} >

  <TouchableOpacity
    onPress={() => this.props.navigation.navigate('Screen1')}
  >
    <Ionicons name="arrow-back" size={20} color='#00CDBC' paddingRigth='10'/>
  </TouchableOpacity>
  <Text style={styles.aboutAppTextHeader}>Resto</Text>
  <Text>Nom du restau selectionné</Text>

</Header>

    <View style={styles.aboutAppBody}>  
    <Text></Text>
    </View>  
    <View >
        <Text></Text>
    </View>

</Container>
  
  )
    }
}

const styles = StyleSheet.create({
  aboutAppBody:{
    borderColor: 'black',
    margin : 5,
    padding : 15
  }, 
  aboutAppText: {
    fontSize:15,
    paddingLeft:15,
    paddingBottom:15
  },
  aboutAppTouchable:{
    flexDirection:'row'
  }, 

  aboutAppTextFooter:{
    color:'#00CDBC',
    fontWeight:'bold',
  }, 

  aboutAppTextFooterPadding:{
    paddingBottom:20
  },

  aboutAppTextHeader:{
    fontWeight:'bold',
    paddingLeft:10
  }, 
  aboutAppFooter:{
    flex:1,
    flexDirection:'column',
    padding:25
    

  }

});