import React, {useState,useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import { AntDesign,MaterialIcons,FontAwesome5,Ionicons } from '@expo/vector-icons'
import Constant from 'expo-constants';
export default function Wallet({navigation})  {
    return (
      <View style={{marginTop:Constant.statusBarHeight,backgroundColor:"white",flex:1}}>
          <View style={styles.headerBar}>
            <View style={styles.headerIcon}>
              <Ionicons name="arrow-back-sharp" size={24} color="black" onPress={()=>navigation.navigate("Home")} />
            </View>
            <View style={styles.headerName}>
                <Text style={{fontSize:16,fontWeight:"bold"}}>Wallet</Text>
            </View>
          </View>
          <View style={{padding:20}}>
            <View style={styles.detailbox}>
                <View>
                  <Text style={{color:"white",fontSize:20}}>Balance : </Text>
                </View>
                <View style={{padding:20,paddingLeft:0}}>
                  <Text style={{color:"white",fontSize:30}}>$400 </Text>
                </View>
                <View style={{padding:15,paddingLeft:0}}>
                  <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={()=>navigation.navigate('Root',{screen:'TopupList'})}>
                    <View style={{padding:10,flexDirection:"row",justifyContent:"center",backgroundColor:"white",borderRadius:10,width:150}}>
                        <AntDesign name="plus" size={24} color="black" />
                        <Text style={{width:"60%",padding:3,paddingLeft:0,fontSize:16,color:"black",alignItems:"center",fontSize:16,fontWeight:"bold"}}>Top up</Text>
                    </View>
                  </TouchableHighlight> 
                </View>
            </View>
            <View style={{padding:5}}>
              <TouchableHighlight underlayColor='rgba(73,182,77)' onPress={()=>navigation.navigate('Root',{screen:'BalanceDetail'})}>
                <View style={{padding:10,flexDirection:"row",justifyContent:"space-around"}}>
                    <FontAwesome5 name="id-card" size={24} color="#000473" />
                    <Text style={{width:"70%",padding:3,paddingLeft:0,fontSize:16}}>Balance Details</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </View>
              </TouchableHighlight>
            </View>
            <View style={{padding:5}}>
                <View style={{padding:10,flexDirection:"row",justifyContent:"space-around"}}>
                    <FontAwesome5 name="id-card" size={24} color="#000473" />
                    <Text style={{width:"70%",padding:3,paddingLeft:0,fontSize:16}}>Transaction History</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </View>
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
    backgroundColor:"#000473",
    padding:20,
    borderRadius:10

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
