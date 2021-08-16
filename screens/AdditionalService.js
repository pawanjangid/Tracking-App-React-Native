import React,{useEffect,useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  BackHandler,
  Switch,
  CheckBox,
  ScrollView,
  TouchableHighlight,
  FlatList
} from 'react-native';


import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons ,Feather} from '@expo/vector-icons'
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

    const [selectedItem,setSelectedItem] = useState(route.params);
    const [cod,setCOD] = useState(false);
    const [roundTrip,setRoundTrip] = useState(false);
    const [deepfreeze,setDeepFreeze] = useState(false);
    const [additional,setAdditional] = useState([]);
    const [message,setMessage] = useState();



    function onsubmitHandler(){
        //console.log({...route.params,selectedItem})
        navigation.navigate('Root',{screen:'PlaceOrder',params:{...route.params,selectedItem}})
    }

    const renderItem = ({ item }) => {
        return (
            <View style={{padding:15,
                flexDirection:'row',
                justifyContent:'space-around',
                borderBottomWidth:1,
                borderBottomColor:"#f5f5f5"
                }}>
                <View style={{width:"65%"}}>
                    <Text style={{
                        padding:8,
                        borderRadius:10,
                        paddingLeft:10,
                        fontSize:16,
                        fontWeight:'bold'
                        }} >{item.title}</Text>
                </View>
                <View style={{width:"25%"}}>
                    <Text style={{
                        padding:8,
                        borderRadius:10,
                        paddingLeft:10,
                        fontSize:16,
                        fontWeight:'bold'
                        }} >S${item.amount}</Text>
                </View>
                <View style={{justifyContent:"center"}}>
                    <CheckBox
                        value={cod}
                        onValueChange={setCOD}
                        style={styles.checkbox}
                        />
                </View>
            </View>
          );
        }


    useEffect(() => {
        AsyncStorage.getItem('LOGIN_TOKEN').then((value) => {
          if(value!==null){
            //console.log(route.params.item);
            fetch('https://gettruckingbackend.herokuapp.com/users/services', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization':value
                },
                body: JSON.stringify({
                    vehicle_id:route.params.item.vehicle_id
                })
            })
                .then((response) => response.json())
                .then((responseData) => {
                        if(responseData.success === 1) {
                            setAdditional(responseData.data)
                            console.log(responseData);
                        }else{
                            setMessage(responseData.data)
                            //AsyncStorage.removeItem('LOGIN_TOKEN')
                        }
                    })
                .catch((error) =>{
                    setMessage(error)
                })
          }
        })
      },[])




    return (
      <View style={{marginTop:Constant.statusBarHeight,backgroundColor:"white",flex:1}}>
          <View style={styles.headerBar}>
            <View style={styles.headerIcon}>
              <Ionicons name="arrow-back-sharp" size={24} color="black" onPress={()=>navigation.goBack()} />
            </View>
            <View style={styles.headerName}>
                <Text style={{fontSize:16,fontWeight:"bold"}}>Select Vehicle</Text>
            </View>
          </View>
          <View style={{padding:20,paddingBottom:80}}>

                <View>
                    <View style={styles.vehicleContainer}>
                        <View style={{position:"absolute",right:-3,top:-3,backgroundColor:"white"}}>
                            <Feather name="check-circle" size={24} color="black" />
                        </View>
                        <View style={styles.vehicleImage}>
                            <Image source={{uri:'https://gettruckingbackend.herokuapp.com'+route.params.item.image}} style={{width:"100%",height:100,resizeMode:"stretch"}} />
                        </View>
                        <View style={styles.vehicleDetail}>
                            <View style={styles.vehicletitleContainer}>
                                <Text style={styles.vehicletitle}>
                                    {route.params.item.vehicle_name}
                                </Text>
                            </View>
                            <View style={styles.vehicledescriptionContainer}>
                                <Text style={styles.vehicledescription}>
                                    {route.params.item.description}
                                </Text>
                            </View>
                            <View style={styles.vehicleDimensionContainer}>
                                <Text style={styles.vehicleDimension}>
                                    {route.params.item.dimension}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.serviceContainer}>
                    <View style={{padding:10, paddingLeft:20}}>
                        <Text style={{color:"#000473",fontWeight:"bold"}}>Vehicle Specification</Text>
                    </View>
                    <View style={{padding:15,
                        flexDirection:'row',
                        justifyContent:'space-around',
                        borderBottomWidth:1,
                        borderBottomColor:"#f5f5f5"
                        }}>
                        <View style={{width:"70%"}}>
                            <Text style={{
                                padding:8,
                                borderRadius:10,
                                paddingLeft:10,
                                fontSize:16,
                                fontWeight:'bold'
                                }} >OPEN</Text>
                        </View>
                        <View style={{width:"20%"}}>
                            <Text style={{
                                padding:8,
                                borderRadius:10,
                                paddingLeft:10,
                                fontSize:16,
                                fontWeight:'bold'
                                }} >S$0</Text>
                        </View>
                        <View style={{justifyContent:"center"}}>
                            <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={isEnabled ? "#09237a" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                        </View>
                    </View>
                    <View style={{padding:15,
                        flexDirection:'row',
                        justifyContent:'space-around',
                        borderBottomWidth:1,
                        borderBottomColor:"#f5f5f5"
                        }}>
                        <View style={{width:"70%"}}>
                            <Text style={{
                                padding:8,
                                borderRadius:10,
                                paddingLeft:10,
                                fontSize:16,
                                fontWeight:'bold'
                                }} >Close</Text>
                        </View>
                        <View style={{width:"20%"}}>
                            <Text style={{
                                padding:8,
                                borderRadius:10,
                                paddingLeft:10,
                                fontSize:16,
                                fontWeight:'bold'
                                }} >S$0</Text>
                        </View>
                        <View style={{justifyContent:"center"}}>
                            <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={!isEnabled ? "#09237a" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={!isEnabled}
                                />
                        </View>
                    </View>
                </View>
                <View style={styles.additionalContainer}>
                    <View style={{height:250}}>
                        <View style={{padding:10, paddingLeft:20}}>
                            <Text style={{color:"#000473",fontWeight:"bold"}}>Additional Services</Text>
                        </View>
                        <FlatList
                            data={additional}
                            renderItem={renderItem}
                            keyExtractor={item => item.aservice_id.toString()}
                            />
                    </View>
                </View>
                <View style={{justifyContent:"center",padding:10}}>
                    <TouchableHighlight style={styles.buttonStyle} underlayColor='rgba(73,182,77,1,0.9)' onPress={()=>{onsubmitHandler()}}>
                        <Text style={{fontWeight:"bold",fontSize:16,color:'white'}}>Next</Text>
                    </TouchableHighlight>
                </View>
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
  vehicleContainer:{
      flexDirection:"row",
      padding:15,
      backgroundColor:"#ffffff",
      elevation:3,
      borderWidth:1,
      borderColor:"#000473",
      margin:5,
      borderRadius:10
  },
  vehicleImage:{
      width:"20%",
  },
  vehicleDetail:{
    width:"80%",
    padding:10,
    paddingTop:0
  },
  vehicletitleContainer:{
    padding:5
  },
  vehicletitle:{
    fontSize:18,
    fontWeight:"bold",
    color:"black"
  },
  vehicledescriptionContainer:{
    padding:3,
    paddingLeft:7
  },
  vehicledescription:{

  },
  vehicleDimensionContainer:{
    padding:3,
    paddingLeft:7
  },
  vehicleDimension:{

  },
  buttonStyle:{
    padding:10,
    backgroundColor:"#000473",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center"
  },
});
