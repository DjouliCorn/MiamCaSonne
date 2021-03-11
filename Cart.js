import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import {Header, Container, Content, List, ListItem, Left, Right, Body} from 'native-base';
import { MaterialIcons, Ionicons  } from '@expo/vector-icons'; 


export default class Cart extends React.Component {
  render(){
  return (
    <Container>
    <Header style={styles.headerStyle}> 
    <View style={styles.flexStyle}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen1')}>
      <Ionicons name="arrow-back" size={32} style={styles.trash} />
      </TouchableOpacity>
      <Text style={styles.titreStyle}>Mon panier</Text> 
      <TouchableOpacity>
      <Ionicons name="trash-outline" size={25} style={styles.trash} />
      </TouchableOpacity>
      </View>
    </Header>

    <Container>
      <View style={styles.contentTimeDelivery}>
      <MaterialIcons name="delivery-dining" size={45} color="#00CDBC"/>
      <Text style={styles.textContentItemDelivery}>Livraison dans 20-25 min.</Text>
      </View>


      <View>
        <TouchableOpacity>
        <Text style={styles.textCondParticulier}>Précisions particulières sur la commande</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.articlesText} >Articles</Text>
      <View style={styles.contentTimeDelivery}>
      <Text style={styles.quantityText} >QTÉ</Text>
      <Text style={styles.textContentItemDelivery}>Plat séléctionné
      </Text>
      <Text style={styles.textContentItemDelivery}>Prix</Text>
      </View>

 



    </Container>



    </Container>
    
    );
  }
}

const styles = StyleSheet.create({
  headerStyle:{
      backgroundColor: 'white',
  },

  flexStyle: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

trash:{
    color: "#00CDBC",
    textTransform: 'uppercase',
  },

titreStyle:{
  fontWeight: "bold",
  fontSize: 15,
  
},
contentPosition:{
  marginTop:20,
},

contentTimeDelivery:{
  flexDirection:'row',
  alignItems:'center',
  paddingLeft:15,
  paddingTop:20,
  paddingBottom:40,
},

textContentItemDelivery :{
  paddingLeft:30, 
  fontSize:17,

}, 

textCondParticulier: {
  color: "#00CDBC",
  paddingLeft:15,
  paddingBottom:45,
  fontSize:17
},
quantityText:{
  color:'#00CDBC', 
  paddingLeft:10},

  articlesText:{
    fontSize: 17,
    fontWeight:'bold',
    paddingLeft:15
  }


})
