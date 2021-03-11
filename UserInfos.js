import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View, Header, Container, Form, Input, Item, Left, Button, Label} from 'native-base';
import {Ionicons} from '@expo/vector-icons';

export default class UserInfos extends React.Component {
  
//  state = {
//    isFocused: false,
//  };

//  handleFocus = () => this.setState({ isFocused: true });
//  handleBlur = () => this.setState({ isFocused: false });

  render(){
//    const { isFocused } = this.state;
//    const labelStyle = {
//      color: !isFocused ? '#00CDBC' : '#00CDBC',
//    };

    return (
  
      <Container>
      <Header
      style={{     
        ...Platform.select({
          ios: {
            padding: 10,
          },
          android: {
            paddingTop: 10
          }
        })
      }} >
    
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate('Screen1')}
    >
      <Ionicons name="arrow-back" size={20} color='#00CDBC' paddingRigth='10'/>
    </TouchableOpacity>
    <Text style={styles.userInfosTextHeader}>Confirmer adresse</Text>
  </Header>
  

<Form style={styles.userInfosBody}>
<Item floatingLabel style={styles.userInfosItem}>  
    <Label>Nom</Label>
    <Input/>
</Item>
<Item floatingLabel style={styles.userInfosItem}>  
    <Label>N° d'appart / Nom de l'immuble (optionnel)</Label>
    <Input/>
</Item>
<Item floatingLabel style={styles.userInfosItem}>
    <Label>Adresse Ligne 1</Label>  
    <Input/>
</Item>
<Item floatingLabel style={styles.userInfosItem}>
    <Label>Code postal</Label>  
    <Input/>
</Item>
<Item floatingLabel style={styles.userInfosItem}> 
    <Label>Numéro de téléphone</Label>  
    <Input/>
</Item>
<Text style={styles.userInfosText}>Nous ne vous contacterons uniquement en cas de problème avec votre commande.</Text>
<Item floatingLabel style={styles.userInfosItem}>
  <Label>Avez-vous des instructions pour votre coursier ?</Label>  
    <Input/>
</Item>
<Button full style={styles.userInfosButton}><Text>Enregistrer adresse</Text></Button>
</Form>
  

  
  </Container>
    
    )
      }
  }
  
  const styles = StyleSheet.create({
  
    userInfosTextHeader:{
      fontWeight:'bold',
      paddingLeft:10
    }, 

    userInfosText:{
      paddingTop:10,
      paddingLeft:20,
      paddingRight:40,
      fontSize:15,
      color:'#696969'
    },

    userInfosItem:{
      paddingBottom:5,
      paddingTop:10,
    },

    userInfosButton:{
      marginTop:35,
      margin:10,
      backgroundColor:'#00CDBC'
    },
  
  });