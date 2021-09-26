import React, {useState,useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  BackHandler,
  TouchableHighlight,
  Alert
} from 'react-native';
import { MaterialIcons,FontAwesome5,Ionicons } from '@expo/vector-icons'
import Constant from 'expo-constants';
export default function Checkout({navigation,route})  {



  function handleBackButtonClick() {
    navigation.navigate("TopupList");
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);


function onSubmithandler() {
  Alert.alert("Amount Added successfully");
}
    return (
      <View style={{marginTop:Constant.statusBarHeight,backgroundColor:"white",flex:1}}>
          <View style={styles.headerBar}>
            <View style={styles.headerIcon}>
              <Ionicons name="arrow-back-sharp" size={24} color="black" onPress={()=>navigation.navigate('Root',{screen:'TopupList'})} />
            </View>
            <View style={styles.headerName}>
                <Text style={{fontSize:16,fontWeight:"bold"}}>Checkout</Text>
            </View>
          </View>
          <View style={styles.amountContainer}>
            <Text style={{fontSize:30,fontWeight:"bold"}}>S${route.params.amount}</Text>
          </View>
          <View style={{padding:20}}>
              <Text style={{color:"#cfcfcf"}}>
                  ONLINE PAYMENT
              </Text>
            <View style={{padding:5,marginTop:10,paddingLeft:0,paddingRight:0,backgroundColor:"#f0f0f0"}}>

                <View style={{padding:10,flexDirection:"row",justifyContent:"space-around"}}>
                    <FontAwesome5 name="id-card" size={24} color="#000473" />
                    <Text style={{width:"70%",padding:3,paddingLeft:0,fontSize:16}}>Credit Card</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="blue" />
                </View>
            </View>
           </View>
           <View style={{padding:10,justifyContent:"center",alignItems:"center",marginTop:10}}>
             <TouchableHighlight style={styles.buttonContainer} underlayColor='rgba(73,182,77)' onPress={()=>{onSubmithandler()}}>
                <View>
                  <Text style={{color:"white",fontSize:16,fontWeight:"bold"}}>Submit</Text>
                </View>
             </TouchableHighlight>
           </View>
           <View style={{position:"absolute",bottom:0,width:"100%",padding:10,paddingBottom:0}}>
             <Image source={require("../assets/banner.png")} style={{height:120,width:"100%",resizeMode:"stretch"}} />
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
amountContainer:{
    justifyContent:"center",
    alignItems:"center",
    padding:40,
    borderRadius:10,
    borderBottomWidth:0.2
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
    backgroundColor: "#000473",
  },
});
