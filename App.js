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
import SettingsScreen from "./Components/SettingsScreen";
import ChatScreen from "./Components/ChatScreen";
import Chat from "./Components/Chat";
import Chat2 from "./Components/Chat2";
import AudioPlay from "./Components/AudioPlay";
import RecordAudio from "./Components/RecordAudio";
import LanguagesScreen from "./Languages/LanguagesScreen";





const Stack = createNativeStackNavigator();

export default function App(props) {
  const [isFirstLaunch, setIsFirstLaunch]= React.useState(true);

  if(isFirstLaunch== null){
    return null;
  }else if(isFirstLaunch ==true){
    return (
      <NavigationContainer>
        <Stack.Navigator>
  
        
        
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name="FlatList" component={LearnFlatList}  />
        <Stack.Screen name="UserProfileView" component={UserProfileView}  />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen}  />
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ title: 'ChatScreen' }} />
        <Stack.Screen name="Chat" component={Chat} options={{ title: 'Chat' }} />
        <Stack.Screen name="AudioPlay" component={AudioPlay} options={{ title: 'AudioPlay' }} />
        <Stack.Screen name="Chat2" component={Chat2} options={{ title: 'Chat2' }} />
        <Stack.Screen name="RecordAudio" component={RecordAudio} options={{ title: 'RecordAudio' }} />
        <Stack.Screen name="LanguagesScreen" component={LanguagesScreen} options={{ title: 'Hook' }} />
        </Stack.Navigator>
      </NavigationContainer>
      
      
    );
  }else{
    return (
      <NavigationContainer>
        <Stack.Navigator>

        <Stack.Screen name="FlatList" component={LearnFlatList}  />
        <Stack.Screen name="UserProfileView" component={UserProfileView}  />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen}  />
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ title: 'ChatScreen' }} />
        <Stack.Screen name="Chat" component={Chat} options={{ title: 'Chat' }} />
        <Stack.Screen name="AudioPlay" component={AudioPlay} options={{ title: 'AudioPlay' }} />
        <Stack.Screen name="Chat2" component={Chat2} options={{ title: 'Chat2' }} />
        <Stack.Screen name="RecordAudio" component={RecordAudio} options={{ title: 'RecordAudio' }} />
        <Stack.Screen name="LanguagesScreen" component={LanguagesScreen} options={{ title: 'Hook' }} />
        </Stack.Navigator>
      </NavigationContainer>
      
      
    );
  }
  
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