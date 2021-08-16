import React, {useState,useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  TouchableHighlight,
  TextInput,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import Constant from 'expo-constants';
export default function Coupons({navigation})  {
const [coupon,setCoupon] = useState();
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
                <Text style={{fontSize:16,fontWeight:"bold"}}>Coupons</Text>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
                    <View style={styles.Inputcontainer}>
                            <TextInput style={styles.textinput}
                            placeholder="Coupon"
                            placeholderTextColor="#878787"
                            value={coupon}
                            onChangeText={(e)=>{setCoupon(e)}}
                            />
                            <TouchableHighlight style={styles.buttonStyle}>
                                <View>
                                    <Text>Add</Text>
                                </View>
                            </TouchableHighlight>   
                    </View>
                    <View style={{justifyContent:"center",alignItems:"center",marginTop:180}}>
                        <Image source={require("../assets/gift.png")} style={{width:200,height:140,resizeMode:"stretch"}} />
                    </View>
                    <View style={{justifyContent:"center",alignItems:"center",padding:30}}>
                        <Text style={{fontSize:15,fontWeight:"bold",color:"#b8b8b8"}}>Apply your coupon code to claim your offer</Text>
                    </View>
            </View>
           </View>
           
        </View>
    )
}

const styles = StyleSheet.create({

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
  body:{
      padding:1
  },
  bodyContent: {
    paddingTop:30
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
  },
  Inputcontainer: {
    padding:0,
    margin:10,
    flexDirection:'row',
    justifyContent:'space-around',
    borderWidth:1,
    borderColor:"#bdbdbd",
    backgroundColor:'#fff',
    borderRadius:10
 },
  textinput:{
    width:"80%",
    backgroundColor:'#fff',
    padding:11,
    borderRadius:10,
    paddingLeft:10,
    fontSize:14,
    fontWeight:'bold'
},
buttonStyle: {
    justifyContent:"center",
    backgroundColor:"#f0f0f0",
    padding:5,
    paddingLeft:15,
    paddingRight:15,
    marginRight:-6,
    borderBottomRightRadius:10,
    borderTopRightRadius:10
}
});
