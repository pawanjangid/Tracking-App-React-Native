import React,{useEffect} from 'react'
import {Text,View,StyleSheet, Image,Button,ScrollView,BackHandler} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Constant from 'expo-constants';
function ReferEarn({navigation}) {

    function handleBackButtonClick() {
        navigation.navigate("Settings");
        return true;
      }
    

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
          BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
      }, []);





    return (
        <ScrollView style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <View style={{flex:1,justifyContent:"center",padding:5,paddingLeft:15}}>
                            <View style={{height:40,width:40,justifyContent:"center",alignItems:"center",borderRadius:9}}>
                                <Ionicons name="arrow-back-outline" size={24} color="black" onPress={() => {navigation.navigate("Settings")}} />
                            </View>       
                </View>
                <View style={{flex:8,justifyContent:"center",padding:5}}>
                            <Text style={{fontSize:20,fontWeight:"bold"}}>Referals</Text>       
                </View>
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>Refer and earn $0</Text>
            </View>
            <View style={styles.imageContainer}>
                <Text style={{padding:20}}>Sachin, we know if feels great to be healthy. Pass it on and we'll give you $0 in return</Text>
                <View>
                    <Image source={require("../assets/refer.png")} style={{height:200,width:"100%",resizeMode:"stretch"}}/>
                </View>
                <Text style={{padding:30}}>Your get trucking referral code is : TRUCK56668</Text>
                <View style={{padding:20}}>
                    <Button title="Invite Now" />
                </View>
            </View>
            <View style={styles.earningContainer}>
                <View style={styles.earningText}>
                    <View style={{flex:5,padding:5}}>
                        <Text style={{fontSize:20,fontWeight:"bold",padding:5}}>Your Earnings</Text>
                        <Text style={{paddingLeft:5,fontSize:15}}>
                            You're yet to tell your friend about your health & wellness secret!
                        </Text>
                    </View>
                    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                        <Text style={{fontSize:20,fontWeight:"bold"}}>$0</Text>
                    </View>
                </View>
            </View>
            <View style={{padding:20}}>
                <Button title="Refer Now" />
            </View>
            <View style={styles.earningContainer}>
                <View style={styles.earningText}>
                    <View style={{flex:1,padding:5}}>
                        <Text style={{fontSize:18,fontWeight:"bold",padding:5}}>How it Works</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",marginTop:10}}>
                    <View style={{flex:1,justifyContent:"center",padding:5}}>
                        <View style={{backgroundColor:"#dbe8ff",height:40,width:40,justifyContent:"center",alignItems:"center",borderRadius:9}}>
                            <Text>1</Text>
                        </View>
                        
                    </View>
                    <View style={{flex:5}}>
                        <Text style={{fontSize:16,fontWeight:"bold"}}>Refer your friends</Text>
                        <Text>We have made it super easy to share, your phone number is your referal code!</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",marginTop:10}}>
                    <View style={{flex:1,justifyContent:"center",padding:5}}>
                        <View style={{backgroundColor:"#dbe8ff",height:40,width:40,justifyContent:"center",alignItems:"center",borderRadius:9}}>
                            <Text>2</Text>
                        </View>
                        
                    </View>
                    <View style={{flex:5}}>
                        <Text style={{fontSize:16,fontWeight:"bold"}}>They Begin Their trcuking Journey</Text>
                        <Text>Your friends get 0 in their get trucking Wallet on using the code</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",marginTop:10}}>
                    <View style={{flex:1,justifyContent:"center",padding:5}}>
                        <View style={{backgroundColor:"#dbe8ff",height:40,width:40,justifyContent:"center",alignItems:"center",borderRadius:9}}>
                            <Text>3</Text>
                        </View>
                        
                    </View>
                    <View style={{flex:5}}>
                        <Text style={{fontSize:16,fontWeight:"bold"}}>You Get Rewarded</Text>
                        <Text>You  earn $0 in your get trucking Wallet once they place an order with get trucking.</Text>
                    </View>
                </View>
            </View>
            <View style={{padding:20}}>
                <Button title="Start Sharing" />
            </View>
        </ScrollView>
        
    )
}

export default ReferEarn;

const styles = StyleSheet.create({
    container: {
        marginTop:Constant.statusBarHeight,
        flex:1,
        backgroundColor:"#fff"
    },
    title:{
        paddingTop:22,
        paddingLeft:20
    },
    titleText:{
        fontSize:25,
        fontWeight:"bold",
        color:"#4a4a4a",

    },
    imageContainer:{
        padding:0
    },
    earningContainer:{
        padding:20,
        paddingTop:30
    },
    earningText:{
        flexDirection:"row",
        justifyContent:"center"
    }
})