import * as React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View,CheckBox,TouchableHighlight } from 'react-native';
import { AntDesign,MaterialCommunityIcons,Feather } from '@expo/vector-icons'; 
import { TextInput } from 'react-native';
import { Alert } from 'react-native';
import Contstant from 'expo-constants'
export default function Register({navigation}) {

    const [phone,setPhone] = useState('');
    const [mail,setMail] = useState('');
    const [password,setPassword] = useState('');
    const [termCheck,setTermCheck] = useState(false);
    const [policyCheck,setPolicyCheck] = useState(false);
    const [eye,setEye] = useState(false);
    function PressHandler() {
        Alert.alert("Phone: "+phone+" Password: "+password);
        navigation.navigate("Home");
    }

  return (
            <View style={styles.container}>
                <View style={styles.backButtonContainer}>
                    <AntDesign name="arrowleft" size={24} color="black" onPress={()=>{navigation.goBack()}} />
                </View>
                <View style={styles.signupContainer}>
                    <Text style={styles.loginTitle}>
                        Sign Up to Place Order
                    </Text>
                </View>
                <View style={styles.logincontainer}>
                    <View style={styles.Inputcontainer}>
                            <View style={styles.iconContainer}>
                                <Feather name="smartphone" size={24} color="#878787" />
                            </View>
                            <TextInput style={styles.textinput}
                            placeholder="Mobile Number"
                            placeholderTextColor="#878787"
                            value={phone}
                            onChangeText={(e)=>{setPhone(e)}}
                            keyboardType="numeric"
                            />
                            <View style={{width:30}}>
                                
                            </View>
                    </View>
                    <View style={styles.Inputcontainer}>
                            <View style={styles.iconContainer}>
                                <Feather name="smartphone" size={24} color="#878787" />
                            </View>
                            <TextInput style={styles.textinput}
                            placeholder="Email (Optional)"
                            placeholderTextColor="#878787"
                            value={mail}
                            onChangeText={(e)=>{setMail(e)}}
                            />
                            <View style={{width:30}}>
                                
                            </View>
                    </View>
                    <View style={styles.Inputcontainer}>
                            <View style={styles.iconContainer}>
                                <MaterialCommunityIcons name="account-key-outline" size={24} color="#878787" />
                            </View>
                            <TextInput style={styles.textinput}
                            secureTextEntry={true}
                            placeholder="Password"
                            placeholderTextColor="#878787" />
                            <View style={styles.iconContainer}>
                                <Feather name={eye ? "eye" : "eye-off"} size={24} color="#878787" onPress={()=>{setEye(!eye)}} />
                            </View>
                    </View>
                    <View style={styles.CheckBoxcontainer}>
                            <View style={styles.iconContainer}>
                                <CheckBox style={styles.checkbox}  value={termCheck} onValueChange={setTermCheck} tintColors={{ true: '#424fff', false: 'black' }} />
                            </View>
                            <View style={styles.CheckBoxContent}>
                                <Text>
                                    I have read, understood and accept the Terms and Conditions and Privacy Policy.
                                </Text>
                            </View>
                    </View>
                    <View style={styles.CheckBoxcontainer}>
                            <View style={styles.iconContainer}>
                                <CheckBox style={styles.checkbox} value={policyCheck} onValueChange={setPolicyCheck} tintColors={{ true: '#424fff', false: 'black' }}  />
                            </View>
                            <View style={styles.CheckBoxContent}  >
                                <Text>
                                    I agree the use of my personal data for direct marketing in accordance with the stated privacy Policy.
                                </Text>
                            </View>
                    </View>
                    
                        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={()=>{navigation.navigate("Home")}}>
                            <View style={styles.buttonContainer} >
                                <Text style={styles.buttontitle}>
                                    Sign Up
                                </Text>
                            </View>
                        </TouchableHighlight>
                    
                    <View style={styles.accountContainer} >
                        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={()=>{navigation.navigate("Login")}}>
                            <Text style={styles.accounttitle}>
                               Already have an account?
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:Contstant.statusBarHeight,
      backgroundColor:"#fff"
     },
     backButtonContainer: {
        padding:20,
        paddingTop:5
     },
     signupContainer:{
         padding:20
     },
     loginTitle:{
        fontSize:22,
        fontWeight:"bold"
     },
     logincontainer:{
        padding:20
     },
     Inputcontainer: {
        padding:8,
        margin:10,
        flexDirection:'row',
        justifyContent:'space-around',
        borderWidth:1,
        borderColor:"#bdbdbd",
        backgroundColor:'#fff',
        borderRadius:10
     },
     CheckBoxcontainer: {
        padding:8,
        margin:10,
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'#fff',
        borderRadius:10
     },
     textinput:{
        width:"85%",
        backgroundColor:'#fff',
        padding:3,
        borderRadius:10,
        paddingLeft:10,
        fontSize:14,
        fontWeight:'bold'
    },
    CheckBoxContent:{
        width:"90%",
        backgroundColor:'#fff',
        padding:3,
        paddingLeft:10,
        fontWeight:'bold'
    },
    iconContainer:{
        alignItems:"center",
        justifyContent:"center"
    },
    checkbox: {
        alignSelf: "center",
    },
    buttonContainer:{
        alignItems: "center",
        marginTop:20,
        backgroundColor:'#424fff',
        padding:15,
        marginRight:30,
        marginLeft:30,
        borderRadius:30
    },
    buttontitle:{
        fontSize:20,
        fontWeight:"bold",
        color:"white",
    },
    accountContainer:{
        alignItems: "center",
        marginTop:20
    },
    accounttitle:{
        fontSize:16,
        fontWeight:"bold",
        color:"black"
    }
     
  });