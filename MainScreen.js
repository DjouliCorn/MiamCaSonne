import React from 'react';
import { Text, View, Header, Container, Body, Item, Input } from 'native-base';

export default class MainScreen extends React.Component {

  render(){
  return (

    <Container>
    <Header searchBar
    style={{     
      ...Platform.select({
        ios: {
          paddingTop: 12,
        },
        android: {
          paddingTop: 15
        }
      })
    }} >

<Item>  
    <Input placeholder="Search" />
</Item>

</Header>

    <Body>  
        <View>
      <Text>Miam, ça sonne !</Text>
        </View>
    </Body>  
</Container>
  
  )
    }
}
