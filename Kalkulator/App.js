import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalculatorScreen from './Screens/CalculatorScreen'

export default function App() {
  return (
    <View >
      <StatusBar style="auto" />
      <CalculatorScreen/>
    </View>
  );
}
