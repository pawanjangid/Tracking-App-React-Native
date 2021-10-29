import * as React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View,CheckBox,TouchableHighlight } from 'react-native';
import { AntDesign,MaterialCommunityIcons,Feather,Entypo } from '@expo/vector-icons'; 
import { TextInput,Modal } from 'react-native';
import { Alert } from 'react-native';
import Contstant from 'expo-constants'
export default function Register({navigation}) {

    const [phone,setPhone] = useState('');
    const [mail,setMail] = useState('');
    const [password,setPassword] = useState('');
    const [termCheck,setTermCheck] = useState(false);
    const [policyCheck,setPolicyCheck] = useState(false);
    const [eye,setEye] = useState(false);
    const [message,setMessage] = useState();



    const [userOTP,setUserOTP] = useState();
    const [otp,setOTP] = useState(100000 + Math.floor(Math.random() * 900000));
    const [verification,setVerification] = useState(true);
    const [otpModal,setOtpModal] = useState(false);
    const [otpVerify,setOTPVerify] = useState(false);



    function verificationOTP(){
        if(userOTP==otp){
            setOTPVerify(true);
        }
    }


    function PressHandler() {
        
        if(verification&&otpVerify){
            if(termCheck && policyCheck){
                if(phone.length===10){
                    fetch('https://gettruckingbackend.herokuapp.com/users/', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email:mail,
                            phone: phone,
                            password: password
                        })
                    })
                        .then((response) => response.json())
                        .then((responseData) => {
                                if(responseData.success === 1) {
                                    navigation.navigate('Root',{screen:"Login"});
                                }else{
                                    setMessage(responseData.data)
                                }
                            })
                        .catch((error) =>{
                            setMessage(error)
                        })
                }else{
                    setMessage('Mobile Number is not Valid');
                }
            }else{
                setMessage("Please Accept Term and condition and privacy Policy");
            }
        }else{
            setMessage("Please Verify Your Number");
        }
    }

    function sendOTP(){

        var url = "http://gateway.onewaysms.sg:10002/api.aspx?apiusername=APIXTDN4S5ADS&apipassword=APIXTDN4S5ADSXTDN4&senderid=TEST&mobileno=+"+phone+"&message=Your one time password is "+otp+"&languagetype=1"
        console.log(url);
        fetch(url, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseData) => {
                    console.log(responseData)
                })
            .catch((error) =>{
                setMessage(error)
            })
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
                            <View style={{width:40,justifyContent: 'center',backgroundColor:"#000473",padding:2,borderRadius:10,alignItems: "center"}}>
                                <TouchableHighlight style={{}} onPress={()=>{setOtpModal(!otpModal);sendOTP()}}>
                                    <View>
                                        <Text style={{fontSize:14,color:"white"}}>Verify</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                    </View>



                    {/* Verify Modal */}

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={otpModal}
                        onRequestClose={() => {
                        setOtpModal(!otpModal);
                        }}
                    >
                        <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View >
                                <Text style={{fontSize:18}}>
                                    Enter OTP for verification
                                </Text>
                                <View style={styles.Inputcontainer}>
                                        <View style={styles.iconContainer}>
                                            <Entypo name="time-slot" size={24} color="#878787" />
                                        </View>
                                        <TextInput style={styles.textinput}
                                        placeholder="Enter OTP"
                                        placeholderTextColor="#878787"
                                        value={userOTP}
                                        onChangeText={(e)=>{setUserOTP(e)}}
                                        keyboardType="numeric"
                                        />
                                </View>
                                <View style={{justifyContent:"center",alignItems:"center"}}>
                                    <TouchableHighlight style={[styles.CloseContainer,{backgroundColor:"red"}]} onPress={() =>{setOtpModal(!otpModal);verificationOTP()}}>
                                        <View>
                                            <Text style={{fontWeight:"bold",color:"white"}}>Submit</Text>
                                        </View>
                                    </TouchableHighlight> 
                                </View>
                            </View>
                        </View>
                        </View>
                    </Modal>



                {/* End Verify Modal */}
                    <View style={styles.Inputcontainer}>
                            <View style={styles.iconContainer}>
                                <Feather name="smartphone" size={24} color="#878787" />
                            </View>
                            <TextInput style={styles.textinput}
                            placeholder="Email"
                            placeholderTextColor="#878787"
                            autoCompleteType="email"
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
                            secureTextEntry={!eye}
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
                    
                    <View style={{justifyContent:"center",alignItems:"center"}}>
                        <Text style={{padding:5,fontWeight:"bold",color:"red"}}>
                            {message}
                        </Text>
                    </View>
                    
                        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={()=>{PressHandler()}}>
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
        width:"80%",
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
        backgroundColor:'#000473',
        padding:15,
        marginRight:30,
        marginLeft:30,
        borderBottomLeftRadius:60,
        borderTopEndRadius:60
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: 'rgba(0,0,0,0.3)'
      },
    modalView: {
        backgroundColor: "white",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      CloseContainer:{
        alignItems: "center",
        marginTop:20,
        backgroundColor:'#000473',
        padding:15,
        marginRight:30,
        marginLeft:30,
        borderRadius:30
    },
  });
