import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Container } from 'react-native';
import CategorieSlider from './components/categorieSlider';
import BannSlider from './components/bannSlider';

export default function App() {
  return (
    <View style={styles.container}>
      <CategorieSlider style={styles.container} />
      <BannSlider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
