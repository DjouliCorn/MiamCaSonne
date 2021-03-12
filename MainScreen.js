import React from 'react';
import { StyleSheet, Button, View} from 'react-native';
import { View as NView, Container, Content} from 'native-base';
import CategorieSlider from './components/categorieSlider';
import BannSlider from './components/bannSlider';
import HeaderLea from './components/Header'

export default class MainScreen extends React.Component {

  render(){
  return (

    <Container>
    <View style={{flex:1}}>
    <HeaderLea navigateToSearch={() => this.props.navigation.navigate('SearchResto')}/>
    <CategorieSlider />
    <BannSlider />
    </View>  
        <NView>
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

<Button 
          onPress={() => this.props.navigation.navigate('ScreenPayment')} 
          title='Moyen de paiement'
      />      
        </NView>  
</Container>
  
  )
    }
}

const styles = StyleSheet.create({


  headerItemsContainer: {
  
  }

});