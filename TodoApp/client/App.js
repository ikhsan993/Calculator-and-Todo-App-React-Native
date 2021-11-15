import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Todo from './Screens/Todo'

export default function App() {
  return (
    <View>
    <Text style={{marginTop:20,fontSize:35}}>Todo App</Text>
      <StatusBar style="auto" />
      <Todo/>
    </View>
  );
}
