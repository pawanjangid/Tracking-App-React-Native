import  React from 'react';
import { Ionicons,Feather,MaterialIcons,FontAwesome5,MaterialCommunityIcons,FontAwesome  } from '@expo/vector-icons';
import {View,Text, TouchableOpacity,TextInput,ScrollView,Button,StyleSheet,SafeAreaView,FlatList,Modal,Pressable  } from 'react-native';
import Constant from 'expo-constants';



export default function Orders({navigation}) {
 return (
      <View style={{backgroundColor:"#fff",marginTop:Constant.statusBarHeight}}>
                <View style={{padding:15,
                    flexDirection:'row',
                    justifyContent:'space-around',
                    borderBottomWidth:1,
                    borderBottomColor:"#f5f5f5"
                    }}>
                    <View>
                        <FontAwesome5 name="truck" size={26} color="#858585" />
                    </View>
                    <Text style={{width:"70%",
                    backgroundColor:'#ffffff',
                    padding:8,
                    borderRadius:10,
                    paddingLeft:10,
                    fontSize:16,
                    fontWeight:'bold'
                    }} >Place Order</Text>
                    <View>
                        <MaterialIcons name="keyboard-arrow-right" size={26} color="#858585" onPress={() =>{navigation.navigate("Home")}} />
                    </View>
                </View>
                <View style={{padding:15,
                    flexDirection:'row',
                    justifyContent:'space-around',
                    borderBottomWidth:1,
                    borderBottomColor:"#f5f5f5"
                    }}>
                    <View>
                        <FontAwesome5 name="truck-moving" size={26} color="#858585" />
                    </View>
                    <Text style={{width:"70%",
                    backgroundColor:'#ffffff',
                    padding:8,
                    borderRadius:10,
                    paddingLeft:10,
                    fontSize:16,
                    fontWeight:'bold'
                    }} >My Order</Text>
                    <View>
                    <MaterialIcons name="keyboard-arrow-right" size={30} color="#858585" onPress={() =>{navigation.navigate("MyOrders")}} />
                    </View>
                </View>
                <View style={{padding:15,
                    flexDirection:'row',
                    justifyContent:'space-around',
                    borderBottomWidth:1,
                    borderBottomColor:"#f5f5f5"
                    }}>
                    <View>
                        <MaterialCommunityIcons name="go-kart-track" size={30} color="#858585" />
                    </View>
                    <Text style={{width:"70%",
                    backgroundColor:'#ffffff',
                    padding:8,
                    borderRadius:10,
                    paddingLeft:10,
                    fontSize:16,
                    fontWeight:'bold'
                    }} >Track Order</Text>
                    <View>
                    <MaterialIcons name="keyboard-arrow-right" size={30} color="#858585" onPress={() =>{navigation.navigate("TrackOrder")}} />
                    </View>
                </View>
                <View style={{padding:15,
                    flexDirection:'row',
                    justifyContent:'space-around',
                    borderBottomWidth:1,
                    borderBottomColor:"#f5f5f5"
                    }}>
                    <View>
                        <FontAwesome name="drivers-license" size={26} color="#858585" />
                    </View>
                    <Text style={{width:"70%",
                    backgroundColor:'#ffffff',
                    padding:8,
                    borderRadius:10,
                    paddingLeft:10,
                    fontSize:16,
                    fontWeight:'bold'
                    }} >Manage Drivers</Text>
                    <View>
                     <MaterialIcons name="keyboard-arrow-right" size={30} color="#858585" onPress={() =>{navigation.navigate("ManageDriver")}} />
                    </View>
                </View>
                <View style={{padding:15,
                    flexDirection:'row',
                    justifyContent:'space-around',
                    borderBottomWidth:1,
                    borderBottomColor:"#f5f5f5"
                    }}>
                    <View>
                        <FontAwesome5 name="clipboard-check" size={26} color="#858585" />
                    </View>
                    <Text style={{width:"70%",
                    backgroundColor:'#ffffff',
                    padding:8,
                    borderRadius:10,
                    paddingLeft:10,
                    fontSize:16,
                    fontWeight:'bold'
                    }} >Order History</Text>
                    <View>
                        <MaterialIcons name="keyboard-arrow-right" size={30} color="#858585" onPress={() =>{navigation.navigate("MyOrders")}} />
                    </View>
                </View>
        </View>
    );
  }