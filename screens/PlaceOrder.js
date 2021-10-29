import React,{useEffect,useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  Switch,
  TouchableHighlight,
  Alert,
  Pressable,
  Modal,
  TextInput,
  FlatList,
  CheckBox
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons ,FontAwesome5,MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons'
import Constant from 'expo-constants';
export default function Wallet({navigation,route})  {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        if(!isEnabled===false) {
            setPreferedName('');
            setPreferedDriver(0);
        }else{
            setDriverModal(!driverModal)
        }
        setIsEnabled(previousState => !previousState)
    }
    function handleBackButtonClick() {
       navigation.goBack();
        return true;
      } 
    const [balanceModal,setBalanceModal] = useState(false);
    const [driveNote,setDriverNote] = useState('No any Note');
    const [noteModal,setNoteModal] = useState(false);
    const [drivers,setDrivers] = useState([]);
    const [preferedDriver,setPreferedDriver] = useState(0);
    const [pereferedName,setPreferedName] = useState();
    const [walletamount,setWalletAmount] = useState(400);
    const [walletSelect,setWalletSelect] = useState(false);
    const [online,setOnline] = useState(false);
    const [pickup,setPickUp] = useState();

    function toggleMethod(){
        if(walletSelect){
            setWalletSelect(false);
            setOnline(true);
        }else{
            setOnline(false);
            setWalletSelect(true);
        }
    }

      
            useEffect(() => {
                    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
                    return () => {
                    BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
                    }
            }, []);


      useEffect(() => {


        
                
            var pickup = route.params.finaldata.filter(item=>item.type === 'PickUp');
            setPickUp(pickup[0]);
                    
                



        AsyncStorage.getItem('LOGIN_TOKEN').then((value) => {
          if(value!==null){
            fetch('https://gettruckingbackend.herokuapp.com/users/favoriteDriver', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization':value
                }
            })
                .then((response) => response.json())
                .then((responseData) => {
                        if(responseData.success === 1) {
                              setDrivers(responseData.data);
                        }else{
                            setMessage(responseData.message)
                            console.log(responseData);
                        }
                    })
                .catch((error) =>{
                    setMessage(error)
                })
          }
        })
      },[])

    const [vehicle_id,setVehicleId] = useState(route.params.selectedItem.vehicle_id);
    const [asap,setASAP] = useState(route.params.asap);
    const [locations,setLocations] = useState(route.params.finaldata);
    const [message,setMessage]=useState();
    const [driverModal,setDriverModal] = useState(false);
    const [coupon,setCoupon] = useState();
    const [couponModal,setCouponModal] = useState(false);





    function onsubmitHandler(){
        AsyncStorage.getItem('LOGIN_TOKEN').then((value) => {
            if(value!==null){
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
                      amount:route.params.amount,
                      duration:route.params.duration,
                      distance:route.params.distance,
                      pickLatitude:pickup.latitude,
                      pickLongitude:pickup.longitude,
                      preferred_driver:preferedDriver
                  })
              })
                  .then((response) => response.json())
                  .then((responseData) => {
                          if(responseData.success === 1) {
                                Alert.alert("Order Placed Successfully");
                                console.log(responseData);
                                navigation.navigate('Root',{screen:"Tracking",params:responseData.data[0]})
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

    function applyCoupon(){
        AsyncStorage.getItem('LOGIN_TOKEN').then((value) => {
            if(value!==null){
              fetch('https://gettruckingbackend.herokuapp.com/users/applyCoupon', {
                  method: 'POST',
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                      'authorization':value
                  },
                  body: JSON.stringify({
                      coupon:coupon
                  })
              })
                  .then((response) => response.json())
                  .then((responseData) => {
                          if(responseData.success === 1) {
                                console.log(responseData);
                          }else{
                                console.log(responseData);
                              setMessage(responseData.data)
                              Alert.alert("Unable to save response");
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

          <Modal
                animationType="slide"
                transparent={true}
                visible={driverModal}
                onRequestClose={() => {
                setDriverModal(!driverModal);
                toggleSwitch()
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <FlatList
                      data={drivers}
                      renderItem={({item})=>{
                        return(
                          <View style={{paddingLeft:10,paddingRight:10,paddingBottom:10}}>
                            <TouchableHighlight underlayColor='rgba(73,182,77)' onPress={()=>{setPreferedDriver(item.driver_id);setPreferedName(item.fullName);setDriverModal(!driverModal)}}>
                            <View style={{justifyContent:"space-around",padding:20,flexDirection:"row",backgroundColor:"#e0e0e0",borderRadius:10,elevation:2}}>
                              <View style={{justifyContent:"center"}}>
                                <Text style={{fontSize:16,fontWeight:"bold"}}>{item.fullName}</Text>
                              </View>
                              <View style={{justifyContent:"center"}}>
                                <Text style={{fontSize:16,fontWeight:"bold"}}>{item.phone}</Text>
                              </View>
                            </View>
                            </TouchableHighlight>
                          </View>
                        )
                      }}
                      keyExtractor={(item) => item.favdriver_id.toString()}
                    />
                </View>
                </View>
            </Modal>



            <View style={{padding:20,marginTop:40,flex:1}}>
                        <Modal
                        animationType="slide"
                        transparent={true}
                        visible={noteModal}
                        onRequestClose={() => {
                            setNoteModal(!noteModal);
                        }}
                        >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={styles.Inputcontainer}>
                                    <TextInput
                                        style={styles.textinput}
                                        multiline={true}
                                        numberOfLines={4}
                                        onChangeText={(text) =>setDriverNote(text)}
                                        value={driveNote}/>
                                </View>
                                <View style={{alignItems:"center"}}>
                                    <Pressable style={styles.buttonStyle} onPress={()=>{setNoteModal(!noteModal)}}>
                                        <Text style={styles.textStyle}>Done</Text>
                                    </Pressable>
                                </View>
                                
                            </View>
                        </View>
                        </Modal>

                        <Modal
                        animationType="slide"
                        transparent={true}
                        visible={balanceModal}
                        onRequestClose={() => {
                            setBalanceModal(!balanceModal);
                        }}
                        >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View  style={{flexDirection: 'row',justifyContent:'flex-start',padding:10,paddingLeft:10,backgroundColor:"#f5fff7",borderRadius:10}}>
                                    <View style={{justifyContent:'center'}}>
                                    <CheckBox
                                        value={walletSelect}
                                        onValueChange={()=>{toggleMethod()}}
                                        style={{}}
                                        />
                                    </View>
                                    <View style={{justifyContent:'center'}}>
                                        <Text style={{fontSize:16,fontWeight:"bold"}}>Wallet balance :</Text>
                                    </View>
                                    <View style={{justifyContent:'center'}}>
                                        <Text style={{fontSize:16,fontWeight:"bold"}}>${walletamount}</Text>
                                    </View>
                                </View>
                                <View  style={{flexDirection: 'row',justifyContent:'flex-start',padding:10,paddingLeft:10,backgroundColor:"#f5fff7",borderRadius:10,marginTop:10}}>
                                    <View style={{justifyContent:'center'}}>
                                    <CheckBox
                                        value={online}
                                        onValueChange={()=>{toggleMethod()}}
                                        style={{}}
                                        />
                                    </View>
                                    <View style={{justifyContent:'center'}}>
                                        <Text style={{fontSize:16,fontWeight:"bold"}}>Pay Online</Text>
                                    </View>
                                   
                                </View>
                                <View style={{alignItems:"center",padding:10}}>
                                    <Pressable style={{padding:10,backgroundColor:"#868dbd",borderRadius:20}} onPress={()=>{onsubmitHandler()}}>
                                        <Text style={{fontSize:16,fontWeight:"bold",color:"white"}}>Pay Now</Text>
                                    </Pressable>
                                </View>
                                
                            </View>
                        </View>
                        </Modal>
                <View style={{padding:5}}>
                <TouchableHighlight underlayColor='rgba(73,182,77)' onPress={()=>{setNoteModal(!noteModal)}}>
                    <View style={{padding:10,flexDirection:"row",justifyContent:"space-around"}}>
                        <View style={{justifyContent:"center"}}>
                            <MaterialIcons name="chat" size={24} color="#000473" />
                        </View>
                        
                        <View style={{width:"70%"}}>
                            <Text style={{padding:3,paddingLeft:0,fontSize:16}}>Add notes to your driver</Text>
                            <Text numberOfLines={1} style={{fontSize:12}}>{driveNote}</Text>
                        </View>
                        
                        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                    </View>
                </TouchableHighlight>
                </View>
                <View style={{padding:5}}>
                <TouchableHighlight underlayColor='rgba(73,182,77)' onPress={()=>{console.log('hello')}}>
                    <View style={{padding:10,flexDirection:"row",justifyContent:"space-around"}}>
                        <View style={{justifyContent:"center",alignItems:"center"}}>
                            <FontAwesome5 name="phone" size={24} color="#000473" />
                        </View>
                        
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
                    <View style={{justifyContent:'center',alignItems: 'center'}}>
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
                        <Text>
                            {pereferedName}
                        </Text>
                            
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={()=>{toggleSwitch();}}
                                value={isEnabled}
                            />
                    </View>
                </View>
                

                <Modal
                        animationType="slide"
                        transparent={true}
                        visible={couponModal}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setCouponModal(!couponModal);
                        }}
                        >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={styles.Inputcontainer}>
                                <TextInput style={styles.textinput}
                                        placeholder="Coupon"
                                        placeholderTextColor="#878787"
                                        value={coupon}
                                        onChangeText={(e)=>{setCoupon(e)}}
                                        />
                                </View>
                                <View style={{alignItems:"center"}}>
                                    <Pressable style={styles.buttonStyle} onPress={()=>{applyCoupon();setCouponModal(!couponModal)}}>
                                        <Text style={styles.textStyle}>Done</Text>
                                    </Pressable>
                                </View>
                                
                            </View>
                        </View>
                        </Modal>



                <View style={{padding:5}}>
                    <TouchableHighlight underlayColor='rgba(73,182,77)' onPress={()=>{setCouponModal(!couponModal)}}>
                        <View style={{padding:10,flexDirection:"row",justifyContent:"space-around"}}>
                            <MaterialCommunityIcons name="file-plus-outline" size={24} color="#000473" />
                            <View style={{width:"70%"}}>
                                <Text style={{padding:3,paddingLeft:0,fontSize:16}}>{coupon ? coupon : 'Add coupon'}</Text>
                            </View>
                            
                            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={{justifyContent:"space-around",padding:10,alignItems:"center",flexDirection:"row"}}>
                <Text style={{fontSize:16,fontWeight:"bold"}}>Total Amount:</Text>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>S${route.params.amount}</Text>
                </View>
            <View style={{justifyContent:"center",padding:30}}>
                    <TouchableHighlight style={styles.buttonStyle} underlayColor='rgba(73,182,77,1,0.9)' onPress={()=>{setBalanceModal(!balanceModal)}} >
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
      centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor:"rgba(0,0,0,0.5)"
      },
      modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        borderBottomRightRadius:0,
        borderBottomLeftRadius:0,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
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
      textinput:{
        backgroundColor:'#fff',
        padding:3,
        borderRadius:10,
        paddingLeft:10,
        fontSize:14,
        fontWeight:'bold'
    },
    textStyle:{
        color:'#fff'
    }

});
