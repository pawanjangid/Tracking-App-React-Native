import React, {useState,useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  TouchableHighlight,
  FlatList,
  Alert
} from 'react-native';
import { Foundation,MaterialIcons,FontAwesome5,Ionicons } from '@expo/vector-icons'
import Constant from 'expo-constants';
export default function TopupList({navigation})  {
  const [amount,setAmount] = useState([
    {
      key:"1",
      amount:4950,
      description:"Get $290 off on your orders"
    },
    {
      key:"2",
      amount:990,
      description:"Get $290 off on your orders"
    },
    {
      key:"3",
      amount:290,
      description:"Get $290 off on your orders"
    },
    {
      key:"4",
      amount:100,
      description:"Get $290 off on your orders"
    }
  ])

  function handleBackButtonClick() {
    navigation.navigate("Wallet");
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);

    return (
      <View style={{marginTop:Constant.statusBarHeight,backgroundColor:"white",flex:1}}>
          <View style={styles.headerBar}>
            <View style={styles.headerIcon}>
              <Ionicons name="arrow-back-sharp" size={24} color="black" onPress={()=>navigation.navigate("Wallet")} />
            </View>
            <View style={styles.headerName}>
                <Text style={{fontSize:16,fontWeight:"bold"}}>Top Up</Text>
            </View>
          </View>
          <View style={{padding:20}}>
            <FlatList 
            data={amount}
            renderItem={({item})=>{
              return(
                <View key={item.key} style={{padding:8,margin:8,borderRadius:10,backgroundColor:"#f5f5f5"}}>
                  <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={()=>Alert.alert("Go to Next tab")}>
                    <View style={{padding:10,justifyContent:"space-around"}}>
                        <Text style={{width:"70%",padding:3,paddingLeft:0,fontSize:25,fontWeight:"bold"}}>
                          s${item.amount}
                        </Text>
                        <Text style={{color:"#424fff"}}>
                        <Foundation name="clipboard-pencil" size={15} color="#424fff" /> {item.description}
                        </Text>
                    </View>
                    </TouchableHighlight>
                </View>
              )}}
          
          
           />
           </View>
           <View style={{position:"absolute",bottom:0,width:"100%",padding:10,paddingBottom:0,alignItems:"center"}}>
              <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={()=>{navigation.navigate('Root',{screen:'Checkout'})}}>
                  <View style={styles.buttonContainer} >
                      <Text style={styles.buttontitle}>
                          Add Topup
                      </Text>
                  </View>
              </TouchableHighlight>
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
    backgroundColor: "#000473",
  },
  buttontitle:{
      fontSize:20,
      fontWeight:"bold",
      color:"white",
  }
});
