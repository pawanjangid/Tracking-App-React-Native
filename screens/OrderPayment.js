import React,{useEffect} from 'react'
import {Text,View,Image, Button,StyleSheet} from 'react-native'
import  Constant from 'expo-constants'
import {FontAwesome5} from '@expo/vector-icons';

function OrderPayment({navigation}) {
    
    return (
        <View style={{marginTop:Constant.statusBarHeight,flex:1}}>
            
            <View style={{padding:30,flexDirection:"row",JustifyContent:"space-around",alignItems:"center"}}>
                <View style={{flex:1,alignItems:"center",padding:10}}>
                    <FontAwesome5 name="wallet" size={24} color="black" />
                    <Text>Wallet</Text>
                </View>
                <View style={{flex:1,alignItems:"center",padding:10}}>
                    <FontAwesome5 name="money-bill-alt" size={24} color="black" />
                    <Text>Cash</Text>
                </View>
                <View style={{flex:1,alignItems:"center",padding:10}}>
                    <FontAwesome5 name="credit-card" size={24} color="black" />
                    <Text>Credit Card</Text>
                </View>
            </View>

            <View style={{padding:30}}>
                <View>
                    <Text>FEE DETAILS</Text>
                </View>
                <View>
                    <View style={{flexDirection:"row",padding:15}}>
                        <Text style={{flex:3,fontWeight:"bold"}}>Service FEE</Text>
                        <Text style={{flex:1,fontWeight:"bold"}}>$128</Text>
                    </View>
                    <View style={{flexDirection:"row",padding:15}}>
                        <Text style={{flex:3,fontWeight:"bold"}}>Late Night Surcharge</Text>
                        <Text style={{flex:1,fontWeight:"bold"}}>$50</Text>
                    </View>
                    <View style={{flexDirection:"row",padding:15}}>
                        <Text style={{flex:3,fontWeight:"bold"}}>Moving Cart</Text>
                        <Text style={{flex:1,fontWeight:"bold"}}>$20</Text>
                    </View>
                    <View style={{flexDirection:"row",padding:15}}>
                        <Text style={{flex:3,fontWeight:"bold"}}>Discount</Text>
                        <Text style={{flex:1,fontWeight:"bold"}}>-$30</Text>
                    </View>
                    <View style={{flexDirection:"row",padding:15}}>
                        <Text style={{flex:3,fontWeight:"bold"}}>Moving Cart</Text>
                        <Text style={{flex:1,fontWeight:"bold"}}>$20</Text>
                    </View>
                    <View style={{flexDirection:"row",padding:15}}>
                        <Text style={{flex:3,fontWeight:"bold"}}>Discount</Text>
                        <Text style={{flex:1,fontWeight:"bold"}}>-$30</Text>
                    </View>
                    <View style={{flexDirection:"row",padding:15}}>
                        <Text style={{flex:3}}></Text>
                        <Text style={{flex:1,fontSize:22,fontWeight:"bold"}}>$168</Text>
                    </View>
                </View>
            </View>
            <View style={{bottom:-100,padding:15}}>
                <Button title="Order Now" onPress={()=>{navigation.navigate("AssignDriver")}} />
            </View>
        </View>
        
    )
}

export default OrderPayment;