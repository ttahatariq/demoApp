import * as React from 'react';

import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import { Audio } from 'expo-av';


export default function RecordAudio({navigation}) {
  const [recording, setRecording] = React.useState();

  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync( Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log(recording)

    console.log('Recording stopped and stored at', uri);
  }
  

  

  return (
    
      <View style={{flex:1}}>
    <View style={{flex:0.90}}>
      
      
    </View>

    <View style={{flex:0.10,flexDirection:"row"}}>
        <View style={{flex:0.70,borderWidth: 1,
        borderColor: "thistle",
        borderRadius: 50}}>
        <TextInput
            style={styles.TextInput}
            placeholder="Type Here."
            placeholderTextColor="#003f5c"
            
            />
        </View>
        <View style={{flex:0.30,
    justifyContent: "center",}}>
            <Button
        title={recording ? 'Stop' : 'Start'}
        onPress={recording ? stopRecording : startRecording}
      />
        </View>

    </View>
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
