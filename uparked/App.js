/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import { AppRegistry } from 'react-native';
import Carousel from "react-native-carousel-control";
import LoginCarousel from "./src/components/LoginCarousel";
import LoginScreen from './src/components/LoginScreen';
import Menu from './src/components/Menu';
export default class App extends Component {
  render() {
    return (

      <View style={styles.container}>

          <Menu/>

      </View>

    );
  }
}

const styles = StyleSheet.create({
    blue_background:{
        backgroundColor: '#287eff',
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007ECC',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    carousel:{
        backgroundColor: "white",
        borderRadius: 5
    }
});

AppRegistry.registerComponent('ComponentDemo', () => LoginCarousel);