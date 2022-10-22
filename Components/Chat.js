import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, FlatList, ScrollView  } from 'react-native';
import React, { Component, useEffect, useState ,useCallback} from 'react';
import { Audio } from 'expo-av';
import { GiftedChat, Send } from 'react-native-gifted-chat'
import Icon from 'react-native-vector-icons/FontAwesome';



export default function Chat({navigation}) {
    

        const [recording, setRecording] = React.useState();
        
  const [recordings, setRecordings] = React.useState([]);
  const [message, setMessage] = React.useState("");
        const [messages, setMessages] = useState([]);


    
        const onSend = useCallback((messages = []) => {
            setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        }, [])

        const onSendVoice = useCallback((messages=[]) => {
            setMessages(previousMessages => GiftedChat.append(previousMessages,messages))
        })

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
    let updatedRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI()
    });

    setRecordings(updatedRecordings);
    console.log('Recording stopped and stored at', uri);
  }
  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }
  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      return (
        <View key={index} style={{flexDirection: 'row',
        flec:1,
        
        justifyContent: 'center',
        backgroundColor:"blue",borderRadius: 50,
        alignItems: "center",
        paddingVertical: 5,
        marginBottom: 5,marginStart:150, }}>
          <Text style={styles.fill}> -------- {recordingLine.duration}</Text>
          <TouchableOpacity style={styles.button} onPress={() => recordingLine.sound.replayAsync()} title="Play">
           <Icon name="play" size={30} color="#900" />
          </TouchableOpacity> 
         
        </View>
      );
    });
  }
  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <Icon name="send" size={30} color="black" />
        </View>
      </Send>
    );
  }
  
    return (
<View style={{flex:1, backgroundColor:'white'}} >
    
    <View style={{ flex:1}}>
      <View style={{flex:0.90,justifyContent:"flex-end"}}>
      {getRecordingLines()}
      </View>
    
    <View style={{flex:0.10}}>
    <Button 
      //  messages={messages}
        title={recording ? 'Stop Recording' : 'Start Recording'}
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
    row: {
      flexDirection: 'row',
      flec:1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    fill: {
      flex: 0.2,
      margin: 16
    },
    button: {
        flex:0.2,
              margin: 16,
             
    }
  });