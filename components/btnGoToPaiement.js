import React from 'react';
import { Button } from 'react-native';

export default class BtnPaiement extends React.Component { 
    render(){
        return(
            <Button title="Paiement" color="green" onPress={() => this.props.navigation.navigate('ModePaiement')}/>
        );
    }
}
       
