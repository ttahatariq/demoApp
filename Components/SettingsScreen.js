import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, SectionList } from 'react-native';
import { useEffect } from 'react';
import { ScrollView } from 'react-native-web';
import SelectDropdown from 'react-native-select-dropdown'


const countries = [10, 20, 30, 50]
const colorz = ["black","blue","green","yellow"]

export default function SettingsScreen({navigation}) {

 useEffect(() => {
  return(()=>{
    console.log('is this calling');
  })
 },[]);

 const saveSettings=(a)=>{
  global.fs=a;
  navigation.navigate('FlatList')
}

const savecolor=(a)=>{
  global.bc=a;
  navigation.navigate('FlatList')
}

return (

      <View style={{flex:1, backgroundColor:'green'}}>
        <TouchableOpacity style={{width:100, height:60, backgroundColor:'grey'}}
        onPress={saveSettings}
        >
            <Text> I am testing </Text>
        </TouchableOpacity>

        <SelectDropdown
        style={{with:80,height:20}}
	data={countries}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
    saveSettings(selectedItem)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>

<SelectDropdown
        style={{with:80,height:20}}
	data={colorz}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
    savecolor(selectedItem)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>

      </View>
      
  );
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
