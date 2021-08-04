import React,{useEffect} from 'react'
import {Text,View,Image, Button} from 'react-native'
import  Constant from 'expo-constants'
import {AntDesign} from '@expo/vector-icons'
function AssignDriver({navigation}) {

    useEffect(() => {
        let timer = setInterval(() => {navigation.navigate("TrackOrder")}, 5000);
        return () => clearInterval(timer)
    }, [])



    return (
        <View style={{marginTop:Constant.statusBarHeight}}>
            <View>
                <Image source={require('../assets/map.png')} style={{width:"100%",height:450,resizeMode:"stretch"}} />
            </View>
            <View style={{padding:20,paddingTop:0,backgroundColor:"white"}}>
                        <View style={{borderRadius:20,backgroundColor:"white",padding:10,alignItems:"center",marginTop:0}}>
                            <Text style={{fontSize:22,color:"black",fontWeight:"bold"}}>Assigning Driver</Text>
                            <View style={{padding:10,flexDirection:"row",justifyContent:"space-around",alignItems:"baseline"}}>
                                <View style={{padding:15,width:"50%"}}>
                                    <Text style={{padding:3,fontSize:16}}>2021</Text>
                                    <Text style={{padding:3,fontSize:16,fontWeight:"bold"}}>Fri, DEC 23</Text>
                                </View>
                                <View style={{padding:15,width:"50%"}}>
                                    <Text style={{padding:3,fontSize:16}}><AntDesign name="clockcircleo" size={24} color="black" /></Text>
                                    <Text style={{padding:3,fontSize:16,fontWeight:"bold"}}>12:20 PM</Text>
                                </View>
                            </View>
                        </View>
                        <Button title="Add Tips" color="#001287" />
                        <View style={{marginTop:10}}></View>
                        <Button title="Cancel Order" color="#495ac9" />
            </View>
            
        </View>
        
    )
}

export default AssignDriver
