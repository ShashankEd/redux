/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Splash from './screens/Splash';

import Home from './screens/Home';
const Navigation = StackNavigator(
  {
    Splash:{
      screen:Splash
    },
    Home:{
      screen:Home,
    }
  }
)
export default Navigation;