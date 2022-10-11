import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class UserProfileView extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'data:image/jpeg;base64,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'}}/>
                  

                <Text style={styles.name}>Taha Tariq </Text>
                <Text style={styles.userInfo}>tahatariq273@gmail.com </Text>
                <Text style={styles.userInfo}>Pakistan </Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/cottage.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Software Engineer</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/administrator-male.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>React-Native Developer|| Mern Stack Developer</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/filled-like.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>News</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/facebook-like.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Shop</Text>
              </View>
            </View>

            
          </View>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "black",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "gray",
    height:500,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#FFFFFF",
  }
});
