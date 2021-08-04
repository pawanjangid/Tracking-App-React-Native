import React,{useEffect} from 'react'
import {Text,View,Image, Button,StyleSheet} from 'react-native'
import  Constant from 'expo-constants'
import {FontAwesome5} from '@expo/vector-icons';

function TrackOrder() {

    return (
        <View style={{marginTop:Constant.statusBarHeight}}>
            <View>
                <Image source={require('../assets/track.png')} style={{width:"100%",height:370,resizeMode:"stretch"}} />
            </View>
            <View style={{padding:20,paddingTop:0,backgroundColor:"white"}}>
                        <View style={{borderRadius:20,backgroundColor:"white",padding:10,alignItems:"center",marginTop:0}}>
                            <View style={styles.image}>
                                <Image source={require('../assets/Profile.png')} style={{height:"100%",width:"100%",borderRadius:60,resizeMode:"contain"}} />
                            </View>
                            <View style={{padding:10,flexDirection:"row",justifyContent:"space-around",alignItems:"baseline",marginTop:-20}}>
                                <View style={{padding:15,width:"50%",alignItems:"center"}}>
                                    <FontAwesome5 name="phone" size={24} color="#989fab" />
                                    <Text style={{padding:3,fontSize:16,fontWeight:"bold",color:"#989fab"}}>9876543210</Text>
                                </View>
                                <View style={{padding:15,width:"50%",alignItems:"center"}}>
                                    <FontAwesome5 name="truck" size={24} color="#989fab" />
                                    <Text style={{padding:3,fontSize:16,fontWeight:"bold",color:"#989fab"}}>ABC 102012</Text>
                                </View>
                            </View>
                        </View>
                        <Button title="Call Driver" color="#001287" />
            </View>
            
        </View>
        
    )
}

export default TrackOrder;

const styles = StyleSheet.create({
    image: {
        width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#d5dff0",
    marginBottom:10,
    alignSelf:'center'
    }
})
