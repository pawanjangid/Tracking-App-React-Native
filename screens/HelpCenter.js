import React, {useState,useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import { AntDesign,MaterialIcons,Ionicons } from '@expo/vector-icons'
import Constant from 'expo-constants';
export default function HelpCenter({navigation})  {
    return (
      <View style={{marginTop:Constant.statusBarHeight,backgroundColor:"white",flex:1}}>
          <View style={styles.headerBar}>
            <View style={styles.headerIcon}>
              <Ionicons name="arrow-back-sharp" size={24} color="black" onPress={()=>navigation.navigate("Home")} />
            </View>
            <View style={styles.headerName}>
                <Text style={{fontSize:16,fontWeight:"bold"}}>Help Center</Text>
            </View>
          </View>
          <View style={{padding:20}}>
            <View style={{padding:10}}>
                <Text>LAST ORDER</Text>
            </View>
            <View style={styles.detailbox}>
                <View style={{justifyContent:"center",alignItems:"center"}}>
                    <AntDesign name="inbox" size={50} color="#636363" />
                </View>
                <View style={{padding:14,paddingLeft:0,justifyContent:"center",alignItems:"center"}}>
                  <Text style={{color:"#636363",fontSize:14,textAlign:"center"}}>
                      You don't have any orders from the last 72 hours.
                  </Text>
                </View>
            </View>
            <View style={{padding:5}}>
              <TouchableHighlight underlayColor='rgba(73,182,77)' onPress={()=>navigation.navigate('Root',{screen:'FAQ'})}>
                <View style={{padding:10,flexDirection:"row",justifyContent:"space-around"}}>
                    <Ionicons name="help-circle-outline" size={24} color="#000473" />
                    <Text style={{width:"70%",padding:3,paddingLeft:0,fontSize:16}}>FAQ</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </View>
              </TouchableHighlight>
            </View>
            <View style={{padding:5}}>
            <TouchableHighlight underlayColor='rgba(73,182,77)' onPress={()=>navigation.navigate('Root',{screen:'SupportChat'})}>
                <View style={{padding:10,flexDirection:"row",justifyContent:"space-around"}}>
                    <Ionicons name="chatbubble-ellipses-outline" size={24} color="#000473" />
                    <Text style={{width:"70%",padding:3,paddingLeft:0,fontSize:16}}>General Support</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </View>
              </TouchableHighlight>
            </View>
            <View style={{padding:5}}>
            <TouchableHighlight underlayColor='rgba(73,182,77)' onPress={()=>navigation.navigate('Root',{screen:'FeedBack'})}>
                <View style={{padding:10,flexDirection:"row",justifyContent:"space-around"}}>
                    <Ionicons name="chatbox-ellipses-outline" size={24} color="#000473" />
                    <Text style={{width:"70%",padding:3,paddingLeft:0,fontSize:16}}>Send Feedback</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </View>
              </TouchableHighlight>
            </View>
           </View>
           <View style={{position:"absolute",bottom:0,width:"100%",padding:10,paddingBottom:0}}>
             <Image source={require("../assets/banner.png")} style={{height:120,width:"100%",resizeMode:"stretch"}} />
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
  detailbox:{
    backgroundColor:"#f2f2f2",
    padding:20,
    borderRadius:10,
    justifyContent:"center"

  },
  headerBar: {
    flexDirection:"row",
    justifyContent:"space-around",
    padding:5,
    paddingTop:15
  },
  headerName:{
    width:"80%",
    justifyContent:"center"
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    paddingTop:30,
    marginTop:30
  },
  name:{
    paddingLeft:10,
    fontSize:14,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#7558FF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#7558FF",
  },
});
