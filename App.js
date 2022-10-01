import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import Home from "./Components/Home"; 
import LearnFlatList from "./Components/LearnFlatList";
import UserProfileView from "./Components/UserProfileView";

const Stack = createNativeStackNavigator();

export default function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
      <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      <Stack.Screen name="FlatList" component={LearnFlatList}  />
      <Stack.Screen name="UserProfileView" component={UserProfileView}  />
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

}); 
//Taha Tariq1