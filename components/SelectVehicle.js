import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,TouchableHighlight,Image,Switch,FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather} from '@expo/vector-icons'
import CheckBox from '../components/CheckBox';

function SelectVehicle({item,setAmount,setSelectedItem,distance}) {
    const [view,setView] = useState(false);
    const [additional,setAdditional] = useState([]);
    const [checkedState, setCheckedState] = useState([]);
    const [isEnabled, setIsEnabled] = useState(false);

    const [amount,setAmount1] = useState(0);


    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const toggleView = () => setView(prevView => !prevView);

    const handleOnChange = (position,data) => {
        checkedState[position] = !checkedState[position];

        if(checkedState[position]){
            setAmount(amount+parseInt(data.amount));
            setAmount1(amount+parseInt(data.amount))
        }else{
            setAmount1(amount-parseInt(data.amount))
            setAmount(amount-parseInt(data.amount));
            console.log("removed")
        }


        console.log(checkedState);
        setCheckedState(checkedState);
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
                    vehicle_id:item.vehicle_id
                })
            })
                .then((response) => response.json())
                .then((responseData) => {
                    console.log(responseData);
                        if(responseData.success === 1) {
                            setAdditional(responseData.data)
                            var arr = new Array(responseData.data.length).fill(false);
                            setCheckedState(arr);
                        }else{
                            setMessage(responseData.data)
                            AsyncStorage.removeItem('LOGIN_TOKEN')
                        }
                    })
                .catch((error) =>{
                    setMessage(error)
                })
          }
        })
      },[]);


      function OnclickManager(amt){
          if(!view){
              var amt = parseInt(item.baseprice)+parseInt(item.parKmcost)*parseInt(distance.replace(/,/g, ''))
              setAmount(amt);
              setAmount1(amt);
              setSelectedItem(item);
              toggleView();
          }else{
              setAmount(0);
              setAmount1(0)
              toggleView();
          }
            
      }

      const renderItem = ({ item,index }) => {
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
                        <CheckBox  onChange={()=>handleOnChange(index,item)} />
                </View>
            </View>
          );
        }


    return (
        <View>
            <TouchableHighlight key={item.vehicle_id.toString()} >
                <View>                  
                <TouchableHighlight  onPress={()=>{OnclickManager()}} underlayColor='rgba(73,182,77,1,0.0)'>
                    <View style={[styles.vehicleContainer,{borderWidth:view ? 1 :0,borderColor:view ? '#000473':'white' }]}>
                    

                        {view && <View style={{position:"absolute",right:-3,top:-3,backgroundColor:"white"}}>
                            <Feather name="check-circle" size={24} color="black" />
                        </View>}



                    <View style={styles.vehicleImage}>
                        <Image source={{uri:'https://gettruckingbackend.herokuapp.com'+item.image}} style={{width:"100%",height:100,resizeMode:"stretch"}} />
                    </View>
                    <View style={styles.vehicleDetail}>
                        <View style={styles.vehicletitleContainer}>
                            <Text style={styles.vehicletitle}>
                                {item.vehicle_name}
                            </Text>
                        </View>
                        <View style={styles.vehicledescriptionContainer}>
                            <Text numberOfLines={1} style={styles.vehicledescription}>
                                {item.description}
                            </Text>
                        </View>
                        <View style={styles.vehicleDimensionContainer}>
                            <Text style={styles.vehicleDimension}>
                                {item.dimension}
                            </Text>
                        </View>
                        <View style={[styles.vehicleDiomensinContainer,{flexDirection:"row",justifyContent:"space-around"}]}>
                            <Text style={[styles.vehicleDimension,{fontWeight:"bold",color:"green"}]}>
                                Base Price : {item.baseprice}
                            </Text>
                            <Text style={[styles.vehicleDimension,{fontWeight:"bold",color:"green"}]}>
                                Cost/km : {parseInt(item.parKmcost)}
                            </Text>
                        </View>
                        
                    </View>
                    </View>
                </TouchableHighlight>
                {view && <View>
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
                    <View style={{height:200}}>
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
                </View>}
                </View>
            </TouchableHighlight>
        </View>
    )
}

export default SelectVehicle


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
  
    }
  });