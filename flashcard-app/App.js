import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import RootNavigator from './src/navigation';

console.disableYellowBox = true

export default function App() {
  return (
    <RootNavigator /> 
  );
}