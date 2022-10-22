import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { SafeAreaView, ActivityIndicator } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";


const GLOBAL = require('../Helper/Globals');
import getApiHook from '../ApiHooks/GetApiHook'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LanguagesScreen({ navigation }) {

  const url = GLOBAL.BASE_URL 
  const { data } = getApiHook(url);
  

  

  const newFunction=async()=>{
    const v1 = await AsyncStorage.getItem('alreadylogin');
    console.log('Languages Screen Code v1 is =', v1)
  }




  useEffect(()=>{
    newFunction()
  },[])

  return (
    
    <View>
    
        
        <FlatList
            data={data}
            renderItem={
                ({item}) => (


                <View style={{backgroundColor:"gray",marginBottom:5}} >
                    <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>  userId: {item.userId}</Text>
                    <Text style={{color:"white"}}>  Title: {item.title}</Text>
                    
                </View>
                )
                }
            
        />
    </View>
         
  );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
};
