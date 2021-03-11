import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View, Header, Container, Left, Content, Footer } from 'native-base';
import {Ionicons} from '@expo/vector-icons';

export default class Cart extends React.Component {

  render(){
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
  <Text style={styles.aboutAppTextHeader}>Mon panier</Text>
  <Text>Nom du restau selectionné</Text>

</Header>

    <View style={styles.aboutAppBody}>  
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