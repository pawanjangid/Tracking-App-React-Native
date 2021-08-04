import  React from 'react';
import { Ionicons,Feather,MaterialIcons,FontAwesome5,FontAwesome  } from '@expo/vector-icons';
import {View,Text, TouchableOpacity,TextInput,ScrollView,Button,StyleSheet,SafeAreaView,FlatList,Modal,Pressable  } from 'react-native';
import Constant from 'expo-constants';



export default function Settings({navigation}) {
 return (
      <View style={{backgroundColor:"#fff",marginTop:Constant.statusBarHeight}}>
                <View style={{padding:15,
                    flexDirection:'row',
                    justifyContent:'space-around',
                    borderBottomWidth:1,
                    borderBottomColor:"#f5f5f5"
                    }}>
                    <View style={{paddingTop:15}}>
                        <FontAwesome5 name="user" size={24} color="black" />
                    </View>
                    <View style={{width:"70%"}}>
                        <Text style={{
                            padding:8,
                            borderRadius:10,
                            paddingLeft:10,
                            fontSize:16,
                            fontWeight:'bold'
                            }} >Sachin Khendawal</Text>
                            <Text style={{paddingLeft:10,color:"#999"}}>+9876453421038</Text>
                    </View>
                    <View style={{paddingTop:15}}>
                        <MaterialIcons name="keyboard-arrow-right" size={30} color="#858585" onPress={() =>{navigation.navigate("EditProfile")}} />
                    </View>
                </View>
                <View style={{padding:15,
                    flexDirection:'row',
                    justifyContent:'space-around',
                    borderBottomWidth:1,
                    borderBottomColor:"#f5f5f5"
                    }}>
                    <View style={{paddingTop:15}}>
                        <FontAwesome5 name="map-marked-alt" size={24} color="black" />
                    </View>
                    <View style={{width:"70%"}}>
                        <Text style={{
                            padding:8,
                            borderRadius:10,
                            paddingLeft:10,
                            fontSize:16,
                            fontWeight:'bold'
                            }} >My Rides</Text>
                            <Text style={{paddingLeft:10,color:"#999"}}>10 Rides</Text>
                    </View>
                    <View style={{paddingTop:15}}>
                        <MaterialIcons name="keyboard-arrow-right" size={30} color="#858585" onPress={() =>{navigation.navigate("PlaceOrder")}} />
                    </View>
                </View>
                <View style={{padding:15,
                    flexDirection:'row',
                    justifyContent:'space-around',
                    borderBottomWidth:1,
                    borderBottomColor:"#f5f5f5"
                    }}>
                    <View style={{paddingTop:15}}>
                         <FontAwesome5 name="map-marked-alt" size={24} color="black" />
                    </View>
                    <View style={{width:"70%"}}>
                        <Text style={{
                            padding:8,
                            borderRadius:10,
                            paddingLeft:10,
                            fontSize:16,
                            fontWeight:'bold'
                            }} >Payments</Text>
                            <Text style={{paddingLeft:10,color:"#999"}}>10 Payment</Text>
                    </View>
                    <View style={{paddingTop:15}}>
                        <MaterialIcons name="keyboard-arrow-right" size={30} color="#858585" onPress={() =>{navigation.navigate("PlaceOrder")}} />
                    </View>
                </View>
                <View style={{padding:15,
                    flexDirection:'row',
                    justifyContent:'space-around',
                    borderBottomWidth:1,
                    borderBottomColor:"#f5f5f5"
                    }}>
                    <View style={{paddingTop:15}}>
                        <FontAwesome name="handshake-o" size={24} color="black" />
                    </View>
                    <View style={{width:"70%"}}>
                        <Text style={{
                            padding:8,
                            borderRadius:10,
                            paddingLeft:10,
                            fontSize:16,
                            fontWeight:'bold'
                            }} >Refer And Earn</Text>
                            <Text style={{paddingLeft:10,color:"#999"}}>100 Referal and 1K Earn</Text>
                    </View>
                    <View style={{paddingTop:15}}>
                        <MaterialIcons name="keyboard-arrow-right" size={30} color="#858585" onPress={() =>{navigation.navigate("ReferEarn")}} />
                    </View>
                </View>
                <View style={{padding:15,
                    flexDirection:'row',
                    justifyContent:'space-around',
                    borderBottomWidth:1,
                    borderBottomColor:"#f5f5f5"
                    }}>
                    <View style={{paddingTop:4}}>
                        <FontAwesome5 name="clipboard" size={24} color="black" />
                    </View>
                    <View style={{width:"70%"}}>
                        <Text style={{
                            padding:8,
                            borderRadius:10,
                            paddingLeft:10,
                            fontSize:16,
                            fontWeight:'bold'
                            }} >About</Text>
                    </View>
                    <View style={{paddingTop:4}}>
                        <MaterialIcons name="keyboard-arrow-right" size={30} color="#858585" onPress={() =>{navigation.navigate("PlaceOrder")}} />
                    </View>
                </View>
                <View style={{padding:15,
                    flexDirection:'row',
                    justifyContent:'space-around',
                    borderBottomWidth:1,
                    borderBottomColor:"#f5f5f5"
                    }}>
                    <View style={{paddingTop:4}}>
                        <FontAwesome5 name="clipboard-list" size={24} color="black" />
                    </View>
                    <View style={{width:"70%"}}>
                        <Text style={{
                            padding:8,
                            borderRadius:10,
                            paddingLeft:10,
                            fontSize:16,
                            fontWeight:'bold'
                            }} >Terms of use</Text>
                    </View>
                    <View style={{paddingTop:4}}>
                        <MaterialIcons name="keyboard-arrow-right" size={30} color="#858585" onPress={() =>{navigation.navigate("PlaceOrder")}} />
                    </View>
                </View>
                <View style={{padding:15,
                    flexDirection:'row',
                    justifyContent:'space-around',
                    borderBottomWidth:1,
                    borderBottomColor:"#f5f5f5"
                    }}>
                    <View style={{paddingTop:4}}>
                        <MaterialIcons name="privacy-tip" size={24} color="black" />
                    </View>
                    <View style={{width:"70%"}}>
                        <Text style={{
                            padding:8,
                            borderRadius:10,
                            paddingLeft:10,
                            fontSize:16,
                            fontWeight:'bold'
                            }} >Privacy Policy</Text>
                    </View>
                    <View style={{paddingTop:4}}>
                        <MaterialIcons name="keyboard-arrow-right" size={30} color="#858585" onPress={() =>{navigation.navigate("PlaceOrder")}} />
                    </View>
                </View>
                <View style={{padding:15,
                    flexDirection:'row',
                    justifyContent:'space-around',
                    borderBottomWidth:1,
                    borderBottomColor:"#f5f5f5"
                    }}>
                    <View style={{paddingTop:4}}>
                        <MaterialIcons name="dangerous" size={24} color="black" />
                    </View>
                    <View style={{width:"70%"}}>
                        <Text style={{
                            padding:8,
                            borderRadius:10,
                            paddingLeft:10,
                            fontSize:16,
                            fontWeight:'bold'
                            }} >Logout</Text>
                    </View>
                    <View style={{paddingTop:4}}>
                        <MaterialIcons name="logout" size={24} color="#858585" />
                    </View>
                </View>
                
        </View>
    );
  }