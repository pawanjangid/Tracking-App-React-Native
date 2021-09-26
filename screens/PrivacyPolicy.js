import React from 'react'
import  { View, StyleSheet,Text } from 'react-native';
import Constant from 'expo-constants';
import {Ionicons} from "@expo/vector-icons";
import { WebView } from 'react-native-webview';


function PrivacyPolicy() {
    return (
        <View style={{marginTop:Constant.statusBarHeight,backgroundColor:"white",flex:1}}>
            <View style={styles.headerBar}>
                <View style={styles.headerIcon}>
                    <Ionicons name="arrow-back-sharp" size={24} color="black" onPress={()=>navigation.goBack()} />
                </View>
                <View style={styles.headerName}>
                    <Text style={{fontSize:16,fontWeight:"bold"}}>Privacy Policy</Text>
                </View>
            </View>
            <View style={styles.content}>
                <WebView
                    source={{
                    uri: 'https://www.google.com/'
                    }}
                    style={{ marginTop: 0 }}
                />
            </View>
        </View>
    )
}

export default PrivacyPolicy;
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
      content:{
        height:"100%",
      }
})