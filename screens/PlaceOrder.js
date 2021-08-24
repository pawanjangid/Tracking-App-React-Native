import React,{useEffect,useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  Switch,
  TouchableHighlight,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons ,FontAwesome5,MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons'
import Constant from 'expo-constants';
export default function Wallet({navigation,route})  {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    function handleBackButtonClick() {
        navigation.goBack();
        return true;
      }
    
      useEffect(() => {

        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
          BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
      }, []);

    const [vehicle_id,setVehicleId] = useState(route.params.selectedItem.item.vehicle_id);
    const [asap,setASAP] = useState(route.params.selectedItem.asap);
    const [locations,setLocations] = useState(route.params.selectedItem.locations);
    const [message,setMessage]=useState();
    function onsubmitHandler(){
        AsyncStorage.getItem('LOGIN_TOKEN').then((value) => {
            if(value!==null){
              //console.log(route.params.item);
              fetch('https://gettruckingbackend.herokuapp.com/users/order', {
                  method: 'POST',
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                      'authorization':value
                  },
                  body: JSON.stringify({
                      vehicle_id:vehicle_id,
                      asap:asap,
                      locations: JSON.stringify(locations),
                      amount:200,
                      preferred_driver:1
                  })
              })
                  .then((response) => response.json())
                  .then((responseData) => {
                          if(responseData.success === 1) {
                                Alert.alert("Order Placed Successfully")
                                navigation.navigate("Home");
                                setMessage('Order Placed Successfully')
                          }else{
                              setMessage(responseData.data)
                              Alert.alert("Unable to save response");
                              //AsyncStorage.removeItem('LOGIN_TOKEN')
                          }
                      })
                  .catch((error) =>{
                      setMessage(error)
                  })
            }
          })
    }

    return (
      <View style={{marginTop:Constant.statusBarHeight,backgroundColor:"white",flex:1}}>
          <View style={styles.headerBar}>
            <View style={styles.headerIcon}>
              <Ionicons name="arrow-back-sharp" size={24} color="black" onPress={()=>navigation.goBack()} />
            </View>
            <View style={styles.headerName}>
                <Text style={{fontSize:16,fontWeight:"bold"}}>Place Order</Text>
            </View>
          </View>
            <View style={{padding:20,marginTop:40,flex:1}}>
                
                <View style={{padding:5}}>
                <TouchableHighlight underlayColor='rgba(73,182,77)' onPress={()=>{console.log('hello')}}>
                    <View style={{padding:10,flexDirection:"row",justifyContent:"space-around"}}>
                        <MaterialIcons name="chat" size={24} color="#000473" />
                        <Text style={{width:"70%",padding:3,paddingLeft:0,fontSize:16}}>Add notes to your driver</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                    </View>
                </TouchableHighlight>
                </View>
                <View style={{padding:5}}>
                <TouchableHighlight underlayColor='rgba(73,182,77)' onPress={()=>{console.log('hello')}}>
                    <View style={{padding:10,flexDirection:"row",justifyContent:"space-around"}}>
                        <FontAwesome5 name="phone" size={24} color="#000473" />
                        <View style={{width:"70%"}}>
                            <Text style={{padding:3,paddingLeft:0,fontSize:16}}>945984759</Text>
                            <Text style={{fontSize:12}}>Order Contact Number</Text>
                        </View>
                        
                        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                    </View>
                </TouchableHighlight>
                </View>
                <View style={{padding:15,
                    flexDirection:'row',
                    justifyContent:'space-around',
                    borderBottomWidth:1,
                    borderBottomColor:"#f5f5f5"
                    }}>
                    <View style={{justifyContent:'center'}}>
                        <MaterialIcons name="favorite" size={24} color="#000473" />
                    </View>
                    <View style={{width:"70%",justifyContent:'center'}}>
                        <Text style={{
                            padding:8,
                            borderRadius:10,
                            paddingLeft:10,
                            fontSize:16,
                            fontWeight:'bold',
                            }} >Favourite drivers first</Text>
                            
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                    </View>
                </View>
                <View style={{padding:5}}>
                    <TouchableHighlight underlayColor='rgba(73,182,77)' onPress={()=>{console.log('hello')}}>
                        <View style={{padding:10,flexDirection:"row",justifyContent:"space-around"}}>
                            <FontAwesome5 name="dollar-sign" size={24} color="#000473" />
                            <View style={{width:"70%"}}>
                                <Text style={{padding:3,paddingLeft:0,fontSize:16}}>Select payment method</Text>
                            </View>
                            
                            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{padding:5}}>
                    <TouchableHighlight underlayColor='rgba(73,182,77)' onPress={()=>navigation.navigate('Root',{screen:'Coupons'})}>
                        <View style={{padding:10,flexDirection:"row",justifyContent:"space-around"}}>
                            <MaterialCommunityIcons name="file-plus-outline" size={24} color="#000473" />
                            <View style={{width:"70%"}}>
                                <Text style={{padding:3,paddingLeft:0,fontSize:16}}>Add coupon</Text>
                            </View>
                            
                            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={{justifyContent:"center",padding:30}}>
                    <TouchableHighlight style={styles.buttonStyle} underlayColor='rgba(73,182,77,1,0.9)' onPress={()=>{onsubmitHandler()}}>
                        <Text style={{fontWeight:"bold",fontSize:16,color:'white'}}>Place Order</Text>
                    </TouchableHighlight>
            </View>
        </View>
    )
}

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
      buttonStyle:{
        padding:10,
        backgroundColor:"#000473",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"
      },

});
