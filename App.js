import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Components/Button';
import Textbox from './Components/Textbox';
import Inbox from './Pages/Inbox';

import Login from './Pages/Login';
import Register from './Pages/Register';

export default function App() {
  return (
    <View style={styles.page}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700" rel="stylesheet"></link>
      <Inbox />
      
    </View>
  );
}

const styles = StyleSheet.create({
  page:{
    flex:1,
    alignItems:'center',
    backgroundColor:'white'
  },

});
