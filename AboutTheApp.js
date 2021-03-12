import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View, Header, Container, Left, Content, Footer } from 'native-base';
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

  <TouchableOpacity
    onPress={() => this.props.navigation.navigate('Screen1')}
  >
    <Ionicons name="arrow-back" size={25} color='#00CDBC' paddingRigth='10'/>
  </TouchableOpacity>
  <Text style={styles.aboutAppTextHeader}>À propos de notre application</Text>

</Header>

    <View style={styles.aboutAppBody}>  
    
    <TouchableOpacity style={styles.aboutAppTouchable}>
    <Ionicons name='mail' size={17} color='#696969'/>
    <Text style={styles.aboutAppText}>Nous contacter à propos de votre commande</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.aboutAppTouchable}>
  <Ionicons name="chatbox-ellipses" size={17} color='#696969'/>
    <Text style={styles.aboutAppText}>Dites-nous ce que vous pensez de l'app</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.aboutAppTouchable}>
  <Ionicons name="logo-google-playstore" size={17} color='#696969' />
    <Text style={styles.aboutAppText}>Notez-nous sur le Play Store</Text>
  </TouchableOpacity>
    </View>  

    <Footer>
      <Container style={styles.aboutAppFooter}>
      <View style={styles.aboutAppTextFooterPadding}>
      <Text>Version 3.59.0</Text>
      </View>

      <View style={styles.aboutAppTextFooterPadding}>
        <Text>2013-21 Deliveroo.</Text>
        <Text>Développé à Paris</Text>
      </View>

      <View>
      <TouchableOpacity style={styles.aboutAppTouchable}>
      <Text style={styles.aboutAppTextFooter}>Conditions générales</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.aboutAppTextFooter}>Confidential</Text>
      </TouchableOpacity>
      </View>
      </Container>
    </Footer>

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