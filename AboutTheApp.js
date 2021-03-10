import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View, Header, Container, Body, Item, Input, Center, Left, Right, Content, Card } from 'native-base';
import {Ionicons} from '@expo/vector-icons';

export default class AboutTheApp extends React.Component {

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


<Left>
  <TouchableOpacity>
    <Ionicons name="arrow-back" size={25} />
  </TouchableOpacity>
</Left>      
<Text>À propos de notre application</Text>

</Header>

    <Content>  
    
    <TouchableOpacity>
    <Text>Nous contacter à propos de votre commande</Text>
  </TouchableOpacity>
  <TouchableOpacity>
    <Text>Dites-nous ce que vous pensez de l'app</Text>
  </TouchableOpacity>
  <TouchableOpacity>
    <Text>Notez-nous sur le Play Store</Text>
  </TouchableOpacity>
        
    </Content>  
</Container>
  
  )
    }
}

const styles = StyleSheet.create({

});