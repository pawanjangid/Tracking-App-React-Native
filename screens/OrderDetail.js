import React, { Component,useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  CheckBox,
  Button,
  TouchableOpacity,
  Alert,ScrollView
} from 'react-native';
import { AntDesign,MaterialIcons,FontAwesome5 } from '@expo/vector-icons'
export default function Profile({navigation})  {


    const [isSelected, setSelection] = useState(false);
    return (

      <ScrollView style={styles.container}>
          <View style={{padding:20}}>
            <View style={styles.detailbox}>
                <View style={{padding:20,paddingTop:40}}>
                    <AntDesign name="clockcircleo" size={60} color="white" />
                </View>
                <View style={{padding:20}}>
                    <Text style={{color: 'white',padding:5,paddingLeft:0}}>2021</Text>
                    <Text style={{color: 'white',padding:5,fontSize:20,paddingLeft:0}}>Fri, March 23 <MaterialIcons name="arrow-drop-down" size={24} color="white" /></Text>
                    <Text style={{color: 'white',padding:5,fontSize:12,paddingLeft:0}}>11:12 PM <MaterialIcons name="arrow-drop-down" size={24} color="white" /></Text>
                </View>
            </View>
                    <View>
                        <Text style={styles.name}>My Drivers</Text>
                        <View style={{padding:10,flexDirection:"row",justifyContent:"space-around"}}>
                            <FontAwesome5 name="user-tie" size={24} color="black" />
                            <Text style={{width:"70%",padding:3,paddingLeft:0,fontSize:16}}>Gopal Pareek</Text>
                            <CheckBox value={isSelected} onValueChange={setSelection}  />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.name}>Order Contact Info</Text>
                        <View style={{padding:10,flexDirection:"row",justifyContent:"space-around"}}>
                            <FontAwesome5 name="user-tie" size={24} color="black" />
                            <Text style={{width:"85%",padding:3,paddingLeft:0,fontSize:16}}>Sachin Khendawal</Text>
                        </View>
                        <View style={{padding:10,flexDirection:"row",justifyContent:"space-around"}}>
                            <FontAwesome5 name="phone" size={24} color="black" />
                            <Text style={{width:"85%",padding:3,paddingLeft:0,fontSize:16}}>9784654321</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.name}>Extra </Text>
                        <View style={{padding:10,flexDirection:"row",justifyContent:"space-around"}}>
                            <FontAwesome5 name="list" size={24} color="black" />
                            <Text style={{width:"85%",padding:3,paddingLeft:0,fontSize:16}}>View Delivery Detail</Text>
                        </View>
                        <View style={{padding:10,flexDirection:"row",justifyContent:"space-around"}}>
                            <MaterialIcons name="add-chart" size={24} color="black" />
                            <Text style={{width:"85%",padding:3,paddingLeft:0,fontSize:16}}>Add Remarks</Text>
                        </View>
                    </View>

                    <View style={{borderRadius:10,backgroundColor:"#fcfcfc",padding:20}}>
                        <Text style={[styles.name,{fontSize:18,fontWeight:'bold',color:'black'}]}>ESTIMATED FARE </Text>
                        <View style={{padding:10,flexDirection:"row",justifyContent:"space-around"}}>
                            <Text style={{width:"80%",padding:3,fontSize:16}}>Moving Charge</Text>
                            <Text style={{padding:3,fontSize:16}}>+$10</Text>
                        </View>
                        <View style={{padding:10,flexDirection:"row",justifyContent:"space-around"}}>
                            <Text style={{width:"80%",padding:3,fontSize:20}}>Total</Text>
                            <Text style={{padding:3,fontSize:20,fontWeight:"bold"}}>$210</Text>
                        </View>
                        <View style={{padding:10,flexDirection:"row",justifyContent:"space-around",alignItems:"flex-end"}}>
                            <Text style={{width:"50%",padding:3,fontSize:13}}>Promo Code</Text>
                            <Button title="NEXT" onPress={()=>{navigation.navigate("AssignDriver")}} />
                        </View>
                    </View>
           </View>
           
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  detailbox: {
    padding:10,
    paddingLeft:30,
    paddingRight:30,
    borderRadius: 20,
    backgroundColor:"#000473",
    borderColor: "white",
    marginBottom:10,
    width:"100%",
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:"space-around",
    marginTop:60
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
