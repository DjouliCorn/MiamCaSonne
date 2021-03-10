import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, Header, Container, Body, Item, Input, Center, Left, Right, Content } from 'native-base';

export default class MainScreen extends React.Component {

  render(){
  return (

    <Container>
      <Header searchBar
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
      <Content style={styles.headerItemsContainer}>
        <Left><Text>Icone </Text></Left>      
        <Body>
          <Text>Maintenant hello</Text>
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
      <Text>Miam, ça sonne hdeie!</Text>
        </View>
    </Content>  
</Container>
  
  )
    }
}

const styles = StyleSheet.create({


  headerItemsContainer: {
    color: 'white'
  }

});