import React, {useState,useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Modal,
  TextInput,
  Alert,
  FlatList
} from 'react-native';
import { Ionicons,FontAwesome,Feather,AntDesign } from '@expo/vector-icons'
import Constant from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MyDrivers({navigation})  {

    const [modalVisible, setModalVisible] = useState(false);
    const [phone,setPhone] = useState();
    const [message,setMessage] = useState();
    const [drivers,setDrivers] = useState([]);
    const [driverviews,setDriverviews] = useState(false);
    const [count,setCount] = useState(0);

    useEffect(() => {
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
                            setDriverviews(true);
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
    },[count])


    function onsubmitHandler(){
      AsyncStorage.getItem('LOGIN_TOKEN').then((value) => {
          if(value!==null){
            fetch('https://gettruckingbackend.herokuapp.com/users/favoriteDriver', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization':value
                },
                body: JSON.stringify({
                    phone:phone
                })
            })
                .then((response) => response.json())
                .then((responseData) => {
                        if(responseData.success === 1) {
                              setCount(count+1);
                              Alert.alert("Driver Added Successfully")
                        }else{
                            setMessage(responseData.message)
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
      <View style={{marginTop:Constant.statusBarHeight,backgroundColor:"#f5f5f5",flex:1}}>
          <View style={styles.headerBar}>
            <View style={styles.headerIcon}>
              <Ionicons name="arrow-back-sharp" size={24} color="black" onPress={()=>navigation.navigate("Home")} />
            </View>
            <View style={styles.headerName}>
                <Text style={{fontSize:16,fontWeight:"bold"}}>Drivers</Text>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
                    
                    {!driverviews && <View>
                        <View style={{alignItems:"center",marginTop:200}}>
                            <FontAwesome name="user-circle" size={70} color="#919191" />
                        </View>
                        <View style={{justifyContent:"center",alignItems:"center",padding:30}}>
                            <Text>Not any data here</Text>
                        </View>
                      </View>}
                    <View>
                    <FlatList
                      data={drivers}
                      renderItem={({item})=>{
                        return(
                          <View style={{paddingLeft:10,paddingRight:10,paddingBottom:10}}>
                            <View style={{justifyContent:"space-around",padding:20,flexDirection:"row",backgroundColor:"#e0e0e0",borderRadius:10,elevation:2}}>
                              <View style={{justifyContent:"center"}}>
                                <Text style={{fontSize:16,fontWeight:"bold"}}>{item.fullName}</Text>
                              </View>
                              <View style={{justifyContent:"center"}}>
                                <Text style={{fontSize:16,fontWeight:"bold"}}>{item.phone}</Text>
                              </View>
                              <View style={{justifyContent:"center",width:24}}>
                                <AntDesign name="delete" size={24} color="black" onPress={()=>{Alert.alert("Driver removed from your favorite list")}} />
                              </View>
                            </View>
                          </View>
                        )
                      }}
                      keyExtractor={(item) => item.favdriver_id.toString()}
                    />
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {setModalVisible(!modalVisible)}}
                    >
                        <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View >
                                <Text style={{fontSize:18}}>
                                    Add a favorite get trucking driver
                                </Text>
                                <View style={{marginTop:30}}>
                                    <View style={styles.Inputcontainer}>
                                            <View style={styles.iconContainer}>
                                                <Feather name="smartphone" size={24} color="#878787" />
                                            </View>
                                            <TextInput style={styles.textinput}
                                            placeholder="Mobile Number"
                                            placeholderTextColor="#878787"
                                            value={phone}
                                            onChangeText={(e)=>{setPhone(e)}}
                                            keyboardType="numeric"
                                            />
                                    </View>
                                </View>
                                <View style={{justifyContent:"center",alignItems:"center"}}>
                                    <TouchableHighlight style={[styles.buttonContainer,{marginTop:0}]} onPress={() =>{onsubmitHandler();setModalVisible(!modalVisible)}}>
                                        <View>
                                            <Text style={{fontWeight:"bold",color:"white"}}>Add Driver</Text>
                                        </View>
                                    </TouchableHighlight> 
                                </View>
                            </View>
                        </View>
                        </View>
                    </Modal>

            </View>
           </View>
           <View style={{justifyContent:"center",alignItems:"center",}}>
                <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'  style={styles.buttonContainer} onPress={() => setModalVisible(!modalVisible)}>
                    <View>
                        <Text style={{fontWeight:"bold",color:"white"}}>Add Driver</Text>
                    </View>
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
  body:{
      padding:1,
      flex:1
  },
  bodyContent: {
    paddingTop:30
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#000473",
  },
  buttontitle:{
      fontSize:20,
      fontWeight:"bold",
      color:"white",
  },
  Inputcontainer: {
    padding:8,
    margin:10,
    flexDirection:'row',
    justifyContent:'space-around',
    borderWidth:1,
    borderColor:"#bdbdbd",
    backgroundColor:'#fff',
    borderRadius:10,
    marginBottom:80
 },
 iconContainer:{
    alignItems:"center",
    justifyContent:"center"
 },
  textinput:{
    width:"80%",
    backgroundColor:'#fff',
    padding:11,
    borderRadius:10,
    paddingLeft:10,
    fontSize:14,
    fontWeight:'bold'
},
buttonStyle: {
    justifyContent:"center",
    backgroundColor:"#f0f0f0",
    padding:5,
    paddingLeft:15,
    paddingRight:15,
    marginRight:-6,
    borderBottomRightRadius:10,
    borderTopRightRadius:10
},
centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  modalView: {
    backgroundColor: "white",
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});
