import React from 'react';
import { StyleSheet, Button, View,  RefreshControl, ScrollView,} from 'react-native';
import { View as NView, Container, Content} from 'native-base';
import CategorieSlider from './components/categorieSlider';
import BannSlider from './components/bannSlider';
import HeaderLea from './components/Header';
import { withNavigation } from 'react-navigation';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    wait(2000).then(() => {
      this.setState({refreshing: false});
    });
  }

  render(){
  return (


    <Container>
    <View style={{flex:1}}>
    <HeaderLea />
    <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
    >
    
    <CategorieSlider />
    <BannSlider />
    </ScrollView>
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

<Button 
          onPress={() => this.props.navigation.navigate('ScreenPlat')} 
          title='Plat choisi'
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