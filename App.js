import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
// import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'expo-status-bar';
import { Header } from './app/sections/Header';
import { Login } from './app/components/Login';
import {SearchForm} from './app/components/SearchForm';
import { Home } from './app/views/Home';

// const Routes = StackNavigator({});

export default class App extends React.Component {

  render() {
   
    return (
      <View>
        <Text></Text>
        <Home/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    margin: '8px',
    fontFamily:'Poppins, linkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  content: {
    backgroundImage: ''
  },
  wrapper: {
    width: '100%',
  },
});
