import React from 'react';
import {StackNavigator} from 'react-navigation';
import {AppRegistry} from 'react-native';
import LoginScreen from "./src/components/LoginScreen";


const AppNavigator = StackNavigator({
    Login:{screen:LoginScreen},
});
export default AppNavigator;