import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import {Header, Container, Content, List, ListItem} from 'native-base';
import { Ionicons } from '@expo/vector-icons';


export default class MoyenPaiement extends React.Component {
  render(){
  return (
    <Container>
    <Header style={styles.headerStyle}> 
    <View style={styles.flexStyle}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen1')}>
      <Ionicons name="arrow-back" size={32} style={styles.editer} />
      </TouchableOpacity>
      <Text style={styles.titreStyle}>Moyens de paiement</Text> 
      <TouchableOpacity>
      <Text style={styles.editer}>éditer</Text>
      </TouchableOpacity>  
      </View>
    </Header>
    <Content style={styles.contentPosition}>
       <List>   
            <ListItem >
              <Ionicons name="card-outline" style={styles.iconCard} size={25}></Ionicons>  
              <Text>Ajouter un moyen de paiement</Text>
            </ListItem>         
        </List>
          
    </Content>
    </Container>
    
    );
  }
}

const styles = StyleSheet.create({
  headerStyle:{
      backgroundColor: 'white',
  },

  iconCard:{
    color:"#00CDBC",
    marginRight:20,
   
  },

  flexStyle: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

editer:{
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

listEffect: {
    marginTop:20,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
},

})
