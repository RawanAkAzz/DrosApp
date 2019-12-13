/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {TextInput, TouchableOpacity, Image} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={style.screen}>
        <View>
          <Image
            source={require('../DrosApp/Images/right.png')}
            style={{marginStart: 350,marginTop: 40, width: 40 }}
          />
        </View>
        <View>
          <Text style={style.Text}>التحقق من رقم الهاتف</Text>
        </View>
        <View style={{marginTop: 80}}>
          <Text style={style.Tasjel}>يرجى إدخال رمز التسجيل</Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={style.Tasjel}>ادخل الرمز الذي يتألف من 6 ارقام</Text>
        </View>
        <View style={{alignSelf: 'center'}}>
          <TouchableOpacity style={style.TouchableOpacity}>
            <TextInput placeholder="رمز التأكيد" style={style.TextInput} />
          </TouchableOpacity>
        </View>
        <View style={{alignSelf: 'center'}}>
          <TouchableOpacity style={style.TouchableOpacity2}>
            <Text style={style.Enter}>تأكيد</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 30}}>
          <Text style={style.Tasjel}>إعادة ارسال رمز التحقق</Text>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  screen: {
    backgroundColor: 'rgb(29,51,81)',
    flex: 1,
  },
  Text: {
    fontSize: 40,
    textAlign: 'center',
    color: '#fff',
    marginTop: 70,
  },
  Tasjel: {
    fontSize: 19,
    color: 'white',
    textAlign: 'center',
  },
  TouchableOpacity: {
    borderWidth: 1,
    borderColor: 'rgb(46 , 74 ,110)',
    borderRadius: 50,
    width: 300,
    textAlign: 'center',
    marginTop: 20,
    height: 60,
  },
  TouchableOpacity2: {
    backgroundColor: 'rgb(13 , 109 , 171)',
    borderRadius: 50,
    width: 100,
    marginTop: 20,
    height: 60,
    justifyContent: 'center',
  },
  TextInput: {
    fontSize: 20,
    color: 'rgb(255 , 255 , 255)',
    textAlign: 'center',
  },
  Enter: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
