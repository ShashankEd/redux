import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const {navigate} = this.props.navigation;
export default class Splash extends Component{
    static navigationOptions={
        header:null,

    }
    componentWillMount(){
        setInterval(()=>{
           navigate('Home');
        },4000)
    }
    render(){

        return( 
            <View><Text>Welcome to Splash</Text></View>
        )
    }
}