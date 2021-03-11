import * as React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Header, Left, Right, Container, Content, List, ListItem,} from 'native-base';
import { Ionicons } from '@expo/vector-icons';

function MoyenPaiement() {
  return (
    <Container style={{marginTop:40}}>
    <Header style={styles.headerStyle}> 
      <Ionicons name="arrow-back" size={32} style={styles.editer} />
      <Text style={styles.titreStyle}>Moyens de paiement</Text> 
      <TouchableOpacity>
      <Text style={styles.editer}>éditer</Text>
      </TouchableOpacity>  
    </Header>
    <Content style={styles.contentPosition}>
       <List>
            <ListItem>
              <Text>Ajouter un moyen de paiement</Text>
            </ListItem>
          </List>
    </Content>
    </Container>
    
  );
}

const styles = StyleSheet.create({
  headerStyle:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: 'white',
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
}
})
export default MoyenPaiement;