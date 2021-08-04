import * as React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View,Image,Button } from 'react-native';
import { MaterialIcons,Feather } from '@expo/vector-icons'; 
import { TextInput } from 'react-native';
import { Alert } from 'react-native';
import Constant from 'expo-constants';
export default function EditProfile({navigation}) {

    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');

    function PressHandler() {
        Alert.alert("Phone: "+phone+" Password: "+password);
        navigation.navigate("Home");
    }

  return (
            <View style={styles.container}>
                <View style={{padding:20,marginTop:50}}>
                    <View style={{flexDirection:'row',color:'blue',marginBottom:30}}>
                        <Text style={{color:'#404040',fontSize:28,fontWeight:'bold'}}>Edit Account Detail</Text>
                    </View>
                    <View style={{padding:8,margin:10,
                            flexDirection:'row',
                            justifyContent:'space-around',
                            elevation:2,
                            backgroundColor:'#fff',
                            borderRadius:10
                            }}>
                                <Feather name="user" size={24} color="black" />
                            <TextInput style={{width:"85%",
                            backgroundColor:'#fff',
                            padding:3,
                            borderRadius:10,
                            paddingLeft:10,
                            fontSize:12,
                            fontWeight:'bold'
                            }}
                            value={firstName}
                            onChangeText={(e)=>setFirstName(e)}
                            placeholderTextColor="black"
                            placeholder="First Name" />
                    </View>
                    <View style={{padding:8,margin:10,
                            flexDirection:'row',
                            justifyContent:'space-around',
                            elevation:2,
                            backgroundColor:'#fff',
                            borderRadius:10
                            }}>
                                <Feather name="user" size={24} color="black" />
                            <TextInput style={{width:"85%",
                            backgroundColor:'#fff',
                            padding:3,
                            borderRadius:10,
                            paddingLeft:10,
                            fontSize:12,
                            fontWeight:'bold'
                            }}
                            value={lastName}
                            onChangeText={(e)=>setLastName(e)}
                            placeholderTextColor="black"
                            placeholder="Last Name" />
                    </View>
                    <View style={{padding:8,margin:10,
                            flexDirection:'row',
                            justifyContent:'space-around',
                            elevation:2,
                            backgroundColor:'#fff',
                            borderRadius:10
                            }}>
                                <Feather name="mail" size={24} color="black" />
                            <TextInput style={{width:"85%",
                            backgroundColor:'#fff',
                            padding:3,
                            borderRadius:10,
                            paddingLeft:10,
                            fontSize:12,
                            fontWeight:'bold'
                            }}
                            value={lastName}
                            onChangeText={(e)=>setLastName(e)}
                            placeholderTextColor="black"
                            placeholder="Email" />
                    </View>
                    <View style={{padding:8,margin:10,
                            flexDirection:'row',
                            justifyContent:'space-around',
                            elevation:2,
                            backgroundColor:'#fff',
                            borderRadius:10
                            }}>
                                <Feather name="phone" size={24} color="black" />
                            <TextInput style={{width:"85%",
                            backgroundColor:'#fff',
                            padding:3,
                            borderRadius:10,
                            paddingLeft:10,
                            fontSize:12,
                            fontWeight:'bold'
                            }}
                            value={lastName}
                            onChangeText={(e)=>setLastName(e)}
                            placeholderTextColor="black"
                            placeholder="Phone" />
                    </View>
                    <View style={{padding:8,marginTop:220,
                            flexDirection:'row',
                            justifyContent:'space-around'
                            }}>
                        <Button title ="Save" color="#002a54" onPress={() => PressHandler()}></Button>
                        <Button title ="Cancel" color="red" onPress={() => {navigation.goBack()}}></Button>
                    </View>
                </View>
            </View>
  );
}


const styles = StyleSheet.create({
    container: {
        marginTop:Constant.statusBarHeight,
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'flex-start',
     },
   
     image :{
        marginTop:80,
        marginBottom: 0
    },
    loginBox:{
        backgroundColor: '#fff',
        width:"80%",
        borderRadius:10,
        paddingTop:40,
        paddingBottom:40
    }
       
  });
