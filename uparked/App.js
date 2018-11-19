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


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>

          <LoginCarousel/>

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