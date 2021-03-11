import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { Text, View, Header, Container, Body, Item, Input, Left, Right, Content} from 'native-base';
import CategorieSlider from './components/categorieSlider';
import BannSlider from './components/bannSlider';

export default class MainScreen extends React.Component {

  render(){
  return (

    <Container>
      <CategorieSlider />
      <BannSlider />




    <Content>  
        <View>
      <Button 
          onPress={() => this.props.navigation.navigate('ScreenAbout')} 
          title='A propos'
      />
            <Button 
          onPress={() => this.props.navigation.navigate('ScreenUserInfos')} 
          title='User Infos'
      />

<Button 
          onPress={() => this.props.navigation.navigate('ScreenCart')} 
          title='Panier'
      />
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