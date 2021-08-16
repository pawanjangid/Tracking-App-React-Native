import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,Image,ScrollView,Alert,TouchableHighlight,Modal,CheckBox} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign,MaterialIcons,Entypo,FontAwesome5,Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';

function Home({navigation}) {

const [token,setToken] = useState(null);
const [element,setElement] = useState([]);
var key = 'AddStop';
const [elementkey,setElementKey] = useState(1);
const [modalVisible, setModalVisible] = useState(false);
const [isSelected, setSelection] = useState(true);

const [pickText,setPickText] = useState('ASAP');

const [orderParams,setOrderParams] = useState({
  locations:[
    {
      latitude:0.0,
      langitude:0.0,
    },
    {
      latitude:0.0,
      langitude:0.0,
    },
    {
      latitude:0.0,
      langitude:0.0,
    },
    {
      latitude:0.0,
      langitude:0.0,
    }
],
asap:true,
later:false
})



useEffect(() => {
  AsyncStorage.getItem('LOGIN_TOKEN').then((value) => {
    setToken(value)
    if(value==null){
      navigation.navigate('Root',{screen:'Login'})
    }
  })


  
})

function selectVehicleClick(){
    navigation.navigate('Root',{screen:'SelectVehicle',params:orderParams})
}


const StopLocation = () => (
        <View style={styles.dropContainer}>
            <View>
              <MaterialIcons name="location-pin" size={20} color="black" />
            </View>
            <View style={{width:"93%",paddingLeft:15}}>
              <Text style={{color:"#8a8a8a",fontWeight:"bold"}}>Stop to...</Text>
            </View>
            <View>
              <Entypo name="cross" size={20} color="black" onPress={() =>RemoveElement()}/>
            </View>
        </View>)


  function addElement(){
    element.push(<StopLocation key={key+'_'+elementkey} />)
    setElement(element);
    setElementKey(elementkey+1)
  }

  function RemoveElement(){
    element.pop()
    setElement(element);
    setElementKey(elementkey-1)
  }


  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <View style={styles.headerIcon}>
          <AntDesign name="menu-fold" size={24} color="black" onPress={() =>{navigation.openDrawer()}}/>
        </View>
        <View style={styles.headerName}>
            <Text style={{fontSize:16,fontWeight:"bold"}}>Get Trucking</Text>
        </View>
        <View style={styles.headerNotification}>
          <AntDesign name="bells" size={24} color="black" onPress={() =>{navigation.navigate('Root',{screen: 'Notification'})}}  />
        </View>
      </View>
      <View style={styles.homePageContainer}>
        <ScrollView>
        <View style={styles.imageitem}>
          <View style={styles.textContainer}>
            <Text style={{fontSize:25,fontWeight:"bold"}}>Welcome</Text>
            <Text style={styles.text} numberOfLines={1}>Pawan Kumar Jangid</Text>
          </View>
          <View style={styles.image}>
              <Image source={require("../assets/homeBackground.png")} style={{ height:100,width:200,resizeMode:"contain"}} />
          </View>
        </View>
        <View style={styles.locationContainer}>
          <View style={styles.boxContainer}>
          <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={()=>{setModalVisible(!modalVisible)}}>
            <View style={styles.asapContainer}>
                <View>
                  <Entypo name="stopwatch" size={16} color="#6e6e6e" />
                </View>
                <View style={{width:"90%",paddingLeft:15}}>
                  <Text style={{fontWeight:"bold"}}>Pick up {pickText}</Text>
                </View>
                <View>
                  <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
                </View>
            </View>
          </TouchableHighlight>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Driver Added Successfully");
                setModalVisible(!modalVisible);
                }}
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
                                        <Feather name="clock" size={24} color="#878787" />
                                    </View>
                                    <View style={{width:"70%",justifyContent:"center"}}>
                                      <Text style={{fontSize:16,fontWeight:"bold"}}>ASAP</Text>
                                    </View>
                                    <View style={styles.iconContainer}>
                                    <CheckBox
                                        value={isSelected}
                                        onValueChange={()=>{setSelection(!isSelected);
                                          !isSelected ? setPickText('ASAP') : setPickText('Later')
                                          }}
                                        style={styles.checkbox}
                                        />
                                    </View>
                            </View>
                        </View>
                          <View style={{marginTop:30}}>
                                <View style={styles.Inputcontainer}>
                                        <View style={styles.iconContainer}>
                                            <Feather name="smartphone" size={24} color="#878787" />
                                        </View>
                                        <View style={{width:"70%",justifyContent:"center"}}>
                                          <Text>Later</Text>
                                        </View>
                                        <View style={styles.iconContainer}>
                                          <CheckBox
                                              value={!isSelected}
                                              boxType="circle"
                                              onValueChange={()=> {setSelection(!isSelected); !isSelected ? setPickText('ASAP') : setPickText('Later')}}
                                              style={styles.checkbox}
                                              />
                                        </View>
                              </View>
                          </View>
                          <View style={{justifyContent:"center",alignItems:"center"}}>
                            <TouchableHighlight style={[styles.CloseContainer,{backgroundColor:"red"}]} onPress={() => setModalVisible(!modalVisible)}>
                                <View>
                                    <Text style={{fontWeight:"bold",color:"white"}}>Close</Text>
                                </View>
                            </TouchableHighlight> 
                        </View>
                    </View>
                </View>
                </View>
            </Modal>
            
              <View style={styles.routerContainer}>
                  <View>
                    <FontAwesome5 name="dot-circle" size={16} color="black" />
                  </View>
                  <View style={{width:"90%",paddingLeft:15}}>
                    <Text style={{color:"#8a8a8a",fontWeight:"bold"}}>Pickup Location</Text>
                  </View>
                  <View>
                      <MaterialIcons name="location-searching" size={20} color="black" onPress={()=>{Alert.alert("Fetching Your current location")}} />
                  </View>
              </View>
            <View style={styles.dropContainer}>
                <View>
                  <MaterialIcons name="location-pin" size={20} color="black" />
                </View>
                <View style={{width:"93%",paddingLeft:15}}>
                  <Text style={{color:"#8a8a8a",fontWeight:"bold"}}>Where to...</Text>
                </View>
            </View>
            {/* Append Element Here */}
            <View>
              {element}
            </View>
            <View style={styles.buttonContainer}>
              <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={()=>addElement()}>
                <View style={styles.stopTextcontainer}>
                  <Text style={{color:"#3242d1",fontWeight:"bold",fontSize:16}}>+ Add Stop</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
      <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={()=>selectVehicleClick()}>
          <View style={styles.buttonStyle}>
            <Text style={{color:"white",fontWeight:"bold"}}>Select Vehicle</Text>
          </View>
        </TouchableHighlight>
      </View>
      
      </View>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:Constants.statusBarHeight,
    backgroundColor:"white"
  },
  headerBar: {
    flexDirection:"row",
    justifyContent:"space-around",
    padding:5,
    paddingTop:15
  },
  headerName:{
    width:"75%",
    justifyContent:"center",
    alignItems:"center"
  },
  homePageContainer:{
    flex:1
  },
  imageitem:{
    flexDirection:"row",
    paddingTop:60,
    padding:10
  },
  image:{
    padding:0
  },
  textContainer:{
    padding:5,
    width:"45%",
    height:100,
    justifyContent:"center"
  },
  text:{
    fontSize:20,
    fontWeight:"bold",
  },
  locationContainer:{
    padding:30
  },
  boxContainer:{
    padding:30,
    elevation:1
  },
  asapContainer:{
    flexDirection:"row",
    padding:15,
    borderBottomWidth:1,
    borderBottomColor:"#ebebeb"
  },
  routerContainer:{
    flexDirection:"row",
    padding:15,
  },
  dropContainer:{
    flexDirection:"row",
    padding:15,
  },
  buttonContainer:{
    padding:15,
  },
  stopTextcontainer:{
    padding:13,
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center"
  },
  bottomContainer:{
    padding:13,
    justifyContent:"center",
    alignItems:"center"
  },
  buttonStyle:{
    padding:10,
    paddingLeft:40,
    paddingRight:40,
    backgroundColor:"#000473",
    borderRadius:10
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
  Inputcontainer: {
    padding:8,
    margin:5,
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'#fff',
    borderBottomWidth:0.5,
    borderBottomColor:"#e8e8e8",
    borderRadius:10,
 },
 checkbox: {
  alignSelf: "center",
},
  iconContainer:{
    justifyContent:"center"
  },
  CloseContainer:{
    alignItems: "center",
    marginTop:20,
    backgroundColor:'#000473',
    padding:15,
    marginRight:30,
    marginLeft:30,
    borderRadius:30
},
})