import React from 'react';
import { StyleSheet,Image } from 'react-native';
import { Text, View, Header, Container, Body, Item, Input, Center, Left, Right, Content, Button, Subtitle, Title } from 'native-base';

import logoDeli from '../assets/img/food-delivery.png'
import logoUser from '../assets/img/user.png'
import arrowBas from '../assets/img/arrowBas.png'

export default class MainScreen extends React.Component {

  render(){
  return (

    <Container>
      <Header style={styles.header} >       
          <Container style={styles.headerItemsContainer}>
            <Left>
              <Button transparent>
                <Image source={logoDeli} style={styles.logoStyle}/>
                <Subtitle>Maintenant</Subtitle>
                <Content>
                  <Text>Lieu actuel</Text>
                  <Image source={arrowBas} style={styles.logoStyle}/>              
                </Content>                
              </Button>
            </Left>     
          </Container>
      </Header>
  </Container>
  
  )
    }
}

const styles = StyleSheet.create({
 //HEADER 
  header:{    
    flexDirection:'column',
    height:130,
    justifyContent:"flex-start",
    ...Platform.select({
      ios: {
        padding: 12,
      },
      android: {
        paddingTop: 15
      }
    })
  },
  headerItemsContainer: {
    flex:1,
    flexDirection:"row",
    
  },
  button:{
    
    
  },
  logoStyle: {
    
    width : 50,
    height: 50,
    resizeMode:"contain"
  }
});