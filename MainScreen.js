import React from 'react';
import { StyleSheet,Image } from 'react-native';
import { Text, View, Header, Container, Body, Item, Input, Center, Left, Right, Content } from 'native-base';
import logoDeli from './assets/img/food-delivery.png'

export default class MainScreen extends React.Component {

  render(){
  return (

    <Container>
    <Header searchBar
    style={{      
      ...Platform.select({flex:1,
        flexDirection:"column",
        ios: {
          padding: 12,
        },
        android: {
          paddingTop: 15
        }
      })
    }} >

<Content style={styles.headerItemsContainer}>
<Left>
  <Image source={logoDeli} style={styles.deliverooLogo}/>
</Left>      
<Body>
<Text>Maintenant</Text>
<Text>Lieu actuel</Text>
</Body>
<Right><Text>Icone</Text></Right>    
</Content>
<Content>
<Text>Livraison</Text>
<Text>À emporter</Text>
</Content>
<Content>
<Item>  
    <Input placeholder="Search" />
</Item>
<Text>Icone</Text>
</Content>

</Header>

    <Content>  
        <View>
      <Text>Miam, ça sonne !</Text>
        </View>
    </Content>  
</Container>
  
  )
    }
}

const styles = StyleSheet.create({


  headerItemsContainer: {
    flex:1,
    flexDirection:"row",
    

  },
  headerContainer:{
    flex:1,
    flexDirection:"column",
    
  },
  deliverooLogo: {
    
    width : 50,
    height: 50,
    resizeMode:"contain"
  }
});