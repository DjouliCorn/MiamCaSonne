import { NavigationContainer, StackActions } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListeRestos from './ListeRestos';
import PageResto from './PageResto';


export default function App() {
  return (
    <ListeRestos />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

