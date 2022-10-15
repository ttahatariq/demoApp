import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback
} from 'react';

import { View,Text } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'

export default function Chat2() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
      setMessages([
          {
              _id: 1,
              text: "Hello Developer",
              createdAt: new Date(),
              user: {
                  _id: 2,
                  name: "React Native",
                  avatar: 'https://placeimg.com/140/140/animals',
              },     
          },
          {
              _id:2,
              text:"Hellow Taha",
              createdAt: new Date(),
              user: {
                  _id:3,
                  name: "Maham",
                  avatar: 'https://placeimg.com/140/140/people',

              }
          },
          {
              _id:3,
              text:"Hellow Hammad ",
              createdAt: new Date(),
              user: {
                  _id:2,
                  name: "Ifra",
                  avatar: 'https://placeimg.com/140/140/any',

              }
          },
          {
              _id:4,
              text:"Depressed Peeps",
              createdAt: new Date(),
              user: {
                  _id:3,
                  name: "Ifra",
                  avatar: 'https://placeimg.com/140/140/nature',
              },
              image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Paris_-_Eiffelturm_und_Marsfeld2.jpg/280px-Paris_-_Eiffelturm_und_Marsfeld2.jpg",
              sent:true,
              received:true,
          },
          {
              _id:5,
              text:"Sneaky Peaky",
              createdAt: new Date(),
              user: {
                  _id:1,
                  name: "Ifra",
                  avatar: 'https://placeimg.com/140/140/architect',
              },
              image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Paris_-_Eiffelturm_und_Marsfeld2.jpg/280px-Paris_-_Eiffelturm_und_Marsfeld2.jpg",
              sent:true,
              received:true,
          },

          // {
          //     _id: 8,
          //     text: '#awesome 2',
          //     createdAt: new Date(),
          //     user: {
          //       _id: 1,
          //       name: 'Developer',
          //     },
          //   },
          //   {
          //     _id: 7,
          //     text: '#awesome',
          //     createdAt: new Date(),
          //     user: {
          //       _id: 1,
          //       name: 'Developer',
          //     },
          //   },
          //   {
          //     _id: 6,
          //     text: 'Paris',
          //     createdAt: new Date(),
          //     user: {
          //       _id: 2,
          //       name: 'React Native',
          //     },
          //     image:
          //       'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Paris_-_Eiffelturm_und_Marsfeld2.jpg/280px-Paris_-_Eiffelturm_und_Marsfeld2.jpg',
          //     sent: true,
          //     received: true,
          //   },
          //   {
          //     _id: 5,
          //     text: 'Send me a picture!',
          //     createdAt: new Date(),
          //     user: {
          //       _id: 1,
          //       name: 'Developer',
          //     },
          //   },
      ])
  }, [])

  const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
  return (
      <View style={{flex:1, backgroundColor:"black"}}>
          <Text style={{paddingLeft:6,color:"white"}}>Welcom to chat screen</Text>
           <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
              _id: 1,
              _id: 2,
              _id: 3,
              _id: 4,
              _id: 5
              // _id:8,
              // _id:5,
              // _id:6,
              // _id:7,
          }}
         
      />
          
      </View>
     

  )
}