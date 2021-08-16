import  React,{useState} from 'react';
import { Ionicons,Feather,MaterialIcons,FontAwesome5,FontAwesome  } from '@expo/vector-icons';
import {View,Text,Switch, TouchableOpacity,TextInput,ScrollView,Button,StyleSheet,SafeAreaView,FlatList,Modal,Pressable  } from 'react-native';
import Constant from 'expo-constants';



export default function Settings({navigation}) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
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
                    <View style={{paddingTop:5}}>
                        <FontAwesome5 name="map-marked-alt" size={24} color="black" />
                    </View>
                    <View style={{width:"70%"}}>
                        <Text style={{
                            padding:8,
                            borderRadius:10,
                            paddingLeft:10,
                            fontSize:16,
                            fontWeight:'bold'
                            }} >Saved Routes</Text>
                    </View>
                    <View style={{paddingTop:0}}>
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
                            }} >Receive E-receipt</Text>
                            <Text style={{paddingLeft:10,color:"#999"}}>sample@gmail.com</Text>
                    </View>
                    <View style={{paddingTop:15}}>
                        <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
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
                            }} >Enable Degital Signature</Text>
                            <Text style={{paddingLeft:10,color:"#999"}}>Delivery requires receipt to sign</Text>
                    </View>
                    <View style={{paddingTop:15}}>
                        <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled1 ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch1}
                                value={isEnabled1}
                            />
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
                            }} >User Agreement</Text>
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
                        <MaterialIcons name="privacy-tip" size={24} color="black" />
                    </View>
                    <View style={{width:"70%"}}>
                        <Text style={{
                            padding:8,
                            borderRadius:10,
                            paddingLeft:10,
                            fontSize:16,
                            fontWeight:'bold'
                            }} >Standard Rates</Text>
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
                            }} >About Get Trucking</Text>
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