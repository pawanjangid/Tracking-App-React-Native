import React from "react"
import { StyleSheet,Text,View,Image,ImageBackground, TouchableHighlight} from "react-native"
import { FontAwesome5,MaterialIcons } from "@expo/vector-icons";
//import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';



function GetStart({navigation}) {

    const Component = () => {
        return(
            <View style={styles.button}>
                <Text style={styles.buttonTitle}>Get Started</Text>
                <MaterialIcons name="double-arrow" size={24} color="white" />
            </View>
            
        )
    }


    // signIn = async () => {
    //     try {
    //       await GoogleSignin.hasPlayServices();
    //       const userInfo = await GoogleSignin.signIn();
    //       this.setState({ userInfo });
    //     } catch (error) {
    //       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //         // user cancelled the login flow
    //       } else if (error.code === statusCodes.IN_PROGRESS) {
    //         // operation (e.g. sign in) is in progress already
    //       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //         // play services not available or outdated
    //       } else {
    //         // some other error happened
    //       }
    //     }
    //   };

    const image = require('../assets/truck.png');

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" blurRadius={5} style={styles.image}>
                <View style={styles.content}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../assets/logo.png')} style={[styles.logo,{resizeMode: 'contain'}]} />
                    </View>
                    <Text style={styles.headertitle}>
                        24/7 On-Demand Delivery App
                    </Text>
                    <View style={styles.buttonContainer}>
                        <TouchableHighlight onPress={()=>{navigation.navigate("Login")}}>
                            <Component />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.socialContainer}>
                        <View style={styles.googleContainer}>
                            <FontAwesome5 name="google" size={24} color="#4b5fe3" onPress={()=>{signIn()}} />
                        </View>
                        <View style={styles.facebookContainer}>
                            <FontAwesome5 name="facebook" size={24} color="#0015a1" />
                        </View>
                    </View>
                    <View style={styles.accountContainer} >
                        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={()=>{navigation.navigate("Register")}}>
                            <Text style={styles.accounttitle}>
                                Already have an Account?
                            </Text>
                        </TouchableHighlight>
                        
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default GetStart;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
    },
    content:{
        padding:20,
        height:"100%",
        backgroundColor: "rgba(0, 0, 0, 0.48)"
    },
    logoContainer: {
        marginTop:60
    },
    logo:{
        height:100,
        width:100,
        tintColor:"white"
    },
    headertitle:{
        fontSize:50,
        fontWeight:"bold",
        color:"white"
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    },
    buttonContainer: {
        padding:20,
        paddingTop:60,
        marginTop:60
    },
    button:{
        backgroundColor: "#5c95d6",
        padding:10,
        borderRadius:10,
        justifyContent:"center",
        alignItems: "center",
        flexDirection: "row"
    },
    buttonTitle: {
        fontSize:30,
        color: "white",
        fontWeight: "bold",
        justifyContent:"center",
        alignItems: "center",
        marginRight:30
    },
    socialContainer: {
        flexDirection: "row",
        justifyContent:"space-around",
        alignItems: "center",
        marginTop:20
    },
    googleContainer:{
        justifyContent:"center",
        alignItems: "center",
        backgroundColor:"white",
        height:50,
        width:50,
        borderRadius:25,
        marginLeft:90
    },
    facebookContainer:{
        justifyContent:"center",
        alignItems: "center",
        backgroundColor:"white",
        height:50,
        width:50,
        borderRadius:25,
        marginRight:90
    },
    accountContainer:{
        alignItems: "center",
        marginTop:20
    },
    accounttitle:{
        fontSize:16,
        fontWeight:"bold",
        color:"white"
    }
  });
