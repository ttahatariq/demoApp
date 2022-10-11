
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
// import ProfileScreen from './ProfileScreen';

import React, { Component, useEffect, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import LearnFlatList from './LearnFlatList';

 

export default function Chat({navigation}) {

  return (
   <View style={{flex:1}}>
    <View style={{flex:0.90}}>

    </View>

    <View style={{flex:0.10,flexDirection:"row"}}>
        <View style={{flex:0.90,borderWidth: 1,
        borderColor: "thistle",
        borderRadius: 50,marginBottom:5}}>
        <TextInput
            style={styles.TextInput}
            placeholder="Type Here."
            placeholderTextColor="#003f5c"
            
            />
        </View>
        <View style={{flex:0.10,
    justifyContent: "center",marginBottom:5,}}>
            <Button title='>'></Button>
        </View>

    </View>
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


