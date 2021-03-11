import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, RefreshControl, View } from 'react-native';
import CategorieSlider from './components/categorieSlider';
import BannSlider from './components/bannSlider';
import MoyenPaiement from './components/moyenPaiement'
import { Container } from 'native-base';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function App() {

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  /*<SafeAreaView style={styles.container}>
  <ScrollView 
  refreshControl={
    <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  }>
  <CategorieSlider />
  <BannSlider />
  </ScrollView>   
</SafeAreaView>*/


  return ( 
  
  <MoyenPaiement />
  
  
  );
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
