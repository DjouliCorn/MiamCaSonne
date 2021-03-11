import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { Text, View, Header, Container, Body, Item, Input, Left, Right, Content} from 'native-base';

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
<Left><Text>Icone</Text></Left>      
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
      <Text>Miam!</Text>
      <Button 
          onPress={() => this.props.navigation.navigate('ScreenAbout')} 
          title='A propos'
      />
      <Text>test</Text>
        </View>
    </Content>  
</Container>
  
  )
    }
}

const styles = StyleSheet.create({


  headerItemsContainer: {
  
  }

});