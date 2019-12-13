import React, {Component} from 'react';
import {View, Text, StyleSheet,{createAppContainer} from 'react-native';
import { create } from 'domain';
import { createStackNavigator } from 'react-navigation-stack';


export default class Number extends Component{
  render(){
    return(
      
          <View>
            <Text>
            التحقق من رقم الهاتف
             </Text>

            
           </View>
    )
  }
    

}
const style = StyleSheet.create({
  Text:{
    fontSize:25,
    lineHeight:24,
    textAlign:"left",
    color:"white"
  }
})