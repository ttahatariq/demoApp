
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
// import ProfileScreen from './ProfileScreen';

import React, { Component, useEffect, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import LearnFlatList from './LearnFlatList';

 

export default function Home({navigation}) {

  return (
    <View style={styles.container}>
      <View>
        <Text style={{marginBottom:50,fontWeight:"bold",color:'pink',fontSize:50}}>
          Sign Up
          </Text>
      </View>
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Number"
          placeholderTextColor="#003f5c"
          
          keyboardType='numeric'
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={{flexDirection:"row"}}>
      <TouchableOpacity style={{flexDirection:"row",alignItems:'center',justifyContent:'center',marginRight:10}}>
      <Image source={require('../assets/facebook.png')} style={{width:30,height:30}} />
    </TouchableOpacity>

    <TouchableOpacity style={{flexDirection:"row",alignItems:'center',justifyContent:'center',marginRight:10}}>
      <Image source={require('../assets/instagram.jpg')} style={{width:30,height:30}} />
    </TouchableOpacity>

    <TouchableOpacity style={{flexDirection:"row",alignItems:'center',justifyContent:'center',marginRight:10}}>
      <Image source={require('../assets/google.png')} style={{width:30,height:30}} />
    </TouchableOpacity>
      </View>
      
      
 
      <TouchableOpacity style={styles.loginBtn} onPress={() =>
          navigation.replace('FlatList')
          }>
        <Text style={styles.loginText}>LOGIN</Text>
        
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});


