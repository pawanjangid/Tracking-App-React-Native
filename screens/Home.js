import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,Image,ScrollView,Alert,TouchableHighlight,Modal,CheckBox } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign,MaterialIcons,Entypo,FontAwesome5,Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SliderBox } from "react-native-image-slider-box";

function Home({navigation,route}) {

const [element,setElement] = useState([]);
var key = 'AddStop';
const [elementkey,setElementKey] = useState(1);
const [modalVisible, setModalVisible] = useState(false);
const [isSelected, setSelection] = useState(true);
const [pickText,setPickText] = useState('ASAP');
const [finaldata,setFinalData] = useState([]);
const [pickup,setPickUp] = useState('Pickup Location');
const [detailpickup,setDetailpickup] = useState();
const [detaildrop,setDetaildrop] = useState();
const [drop,setDrop] = useState('Where to..');
const [laterDate,setLaterDate] = useState();
const [date, setDate] = useState(new Date());
const [mode, setMode] = useState('date');
const [show, setShow] = useState(false);
const [day,setDay] = useState(false);
const [images,setImages] = useState([
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
    require('../assets/banner1.jpg'),
    require('../assets/banner2.jpg'),
])

const [stop,setStop] = useState();
const [stopDetail,setStopDetail] = useState();


function checkZero(data){
  if(data.length == 1){
    data = "0" + data;
  }
  return data;
}

function convert (str){
  var date = new Date(str).toLocaleString("en-US", {timeZone: 'Asia/Kolkata'});
  var testdate = new Date(date);
  var final = checkZero(testdate.getDate())+'-'+ checkZero(testdate.getMonth()+1) +'-'+ testdate.getFullYear()+', '+checkZero(testdate.getHours())+':'+checkZero(testdate.getMinutes());
  return final;
}

const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setLaterDate(convert(currentDate));
};

const showMode = (currentMode) => {
  setShow(true);
  setMode(currentMode);
};

const showDatepicker = () => {
  showMode('date');
};

const showTimepicker = () => {
  showMode('time');
};



useEffect(() => {
  if(route.params){
    setFinalData(route.params.finaldata);
    var result = (route.params.finaldata).filter(column => column.type=='PickUp');
    if(result.length>0){
      setPickUp(result[0].formatted_address);
      setDetailpickup(result[0].floor);
    }
    var result = (route.params.finaldata).filter(column => column.type=='Drop');
    if(result.length>0){
      setDrop(result[0].formatted_address);
      setDetaildrop(result[0].floor);
    }

    var result = (route.params.finaldata).filter(column => column.type=='Stop');
    if(result.length>0){
      setStop(result[0].formatted_address);
      setStopDetail(result[0].floor);
    }
  }


});


useEffect(() => {
  AsyncStorage.getItem('LOGIN_TOKEN').then((value) => {
    if(value===null){
      navigation.navigate('Root',{screen:'Login'})
    }
  })
})

useEffect(() => {
  var today = new Date();
  var time = today.getHours();
  if((time >=0 && time<6) ||(time>18 && time<=23)){
    setDay(false)
  }else{
    setDay(true);
  }

},[])

function selectVehicleClick(){
    if(detaildrop && detailpickup){
      navigation.navigate('Root',{screen:'SelectVehicle',params:{finaldata,asap:pickText}})
    }else{
      Alert.alert("Please select pickup and drop location");
    }
    
}


const StopLocation = () => (
  <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => {navigation.navigate('Root',{screen:'InitialRegion',params:{type:"Stop",finaldata}})}}> 
        <View style={styles.dropContainer}>
            <View>
              <MaterialIcons name="location-pin" size={20} color="black" />
            </View>
            <View style={{width:"93%",paddingLeft:15}}>
              <Text style={{color:"#8a8a8a",fontWeight:"bold"}}>{stop ? stop : 'Stop to..'}</Text>
              {stopDetail ? <Text style={{color:"#8a8a8a",fontWeight:"bold"}}>{stopDetail ? stopDetail : 'Stop to..'}Stop to...</Text> : null}
            </View>
            <View>
              <Entypo name="cross" size={20} color="black" onPress={() =>RemoveElement()}/>
            </View>
        </View>
        </TouchableHighlight>)


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

      <Image source={day ? require('../assets/day.jpg') : require('../assets/night.jpg')} style={styles.background} />

      <View style={styles.headerBar}>
        <View style={{justifyContent:"center",alignItems:"center"}}>
          <Entypo name="menu" size={30} color="white" onPress={() =>{navigation.openDrawer()}}/>
        </View>
        <View style={styles.headerName}>
            <Text style={{fontSize:16,fontWeight:"bold",color:"white"}}>Get Trucking</Text>
        </View>
        <View style={{justifyContent:"center",alignItems:"center"}}>
          <AntDesign name="bells" size={24} color="white" onPress={() =>{navigation.navigate('Root',{screen: 'Notification'})}}  />
        </View>
      </View>
      <View style={styles.homePageContainer}>
        <ScrollView>
        <View style={styles.imageitem}>
          <View style={styles.image}>
            <SliderBox images={images}  />
              {/* <Image source={require("../assets/banner2.jpg")} style={{height:"100%",width:"100%",resizeMode:"stretch"}} /> */}
          </View>
        </View>

      

        <View style={styles.locationContainer}>
          <View style={styles.boxContainer}>
          <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={()=>{setModalVisible(!modalVisible);}}>
            <View style={styles.asapContainer}>
                <View>
                  <Entypo name="stopwatch" size={16} color="#6e6e6e" />
                </View>
                <View style={{width:"90%",paddingLeft:15}}>
                  <Text style={{fontWeight:"bold"}}>Pick up {pickText==='Later' ? laterDate : pickText}</Text>
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
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View >
                        <Text style={{fontSize:18}}>
                            Pickup Later
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
                          <View style={{justifyContent:"center",alignItems:"center",padding:20}}>
                              <Text style={{fontSize:16,fontWeight:"bold"}}>
                                {laterDate}
                              </Text>
                            </View>
                          <View style={{flexDirection: 'row',justifyContent:"space-around"}}>
                            {show && (
                              <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                              />
                            )}
                            
                            <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() =>{showDatepicker()}}>
                              <View style={{justifyContent:"center",alignItems:"center",padding:10,borderWidth:0.5,borderColor:"gray",borderRadius:10,backgroundColor:"#f2f2f2"}}>
                                <Text>Select Date</Text>
                              </View>
                            </TouchableHighlight> 
                            <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() =>{showTimepicker()}}>
                              <View style={{justifyContent:"center",alignItems:"center",padding:10,paddingLeft:20,paddingRight:20,borderWidth:0.5,backgroundColor:"#f2f2f2",borderColor:"gray",borderRadius:10}}>
                                <Text>Time</Text>
                              </View>
                            </TouchableHighlight>         
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
            
            <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => {navigation.navigate('Root',{screen:'InitialRegion',params:{type:"PickUp",finaldata}})}}>                     
              <View style={styles.routerContainer}>
                  <View style={{justifyContent:"center",alignItems:"center"}}>
                    <FontAwesome5 name="dot-circle" size={20} color="black" />
                  </View>
                  <View style={{width:"90%",paddingLeft:15}}>
                    <Text style={{color:"#8a8a8a",fontWeight:"bold",fontSize:16}}>{pickup}</Text>
                    {detailpickup ? <Text style={{color:"#8a8a8a",fontWeight:"bold"}}>{detailpickup}</Text> : null}
                  </View>
              </View>
            </TouchableHighlight> 
            <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => {navigation.navigate('Root',{screen:'InitialRegion',params:{type:"Drop",finaldata}})}}>     
            <View style={styles.dropContainer}>
                <View style={{justifyContent:"center",alignItems:"center"}}>
                  <MaterialIcons name="location-pin" size={24} color="black" />
                </View>
                <View style={{width:"93%",paddingLeft:15}}>
                  <Text style={{color:"#8a8a8a",fontWeight:"bold",fontSize:16}}>{drop}</Text>
                  {detaildrop ? <Text style={{color:"#8a8a8a",fontWeight:"bold"}}>{detaildrop}</Text> : null}
                </View>
            </View>
            </TouchableHighlight>
            {/* Append Element Here */}
            <View>
              {element}
            </View>
            <View style={styles.buttonContainer}>
              <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' style={{backgroundColor:"rgba(0, 4, 115,0.05)",borderRadius:100}} onPress={()=>addElement()}>
                <View style={styles.stopTextcontainer}>
                  <Text style={{color:"#3242d1",fontWeight:"bold",fontSize:16}}>+ Add Stop</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </ScrollView>
      </View>
      <View style={styles.bottomContainer}>
            <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={()=>selectVehicleClick()}>
                <View style={styles.buttonStyle}>
                  <Text style={{color:"white",fontWeight:"bold",fontSize:18}}>Select Vehicle</Text>
                </View>
              </TouchableHighlight>
          </View>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#000473"
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    width:"100%",
    resizeMode:"stretch"
  },
  headerBar: {
    padding:5,
    paddingTop:Constants.statusBarHeight+15,
    flexDirection:"row",
    backgroundColor:"transparent",
    justifyContent:"space-around",
    paddingBottom:10
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
    padding:0
  },
  image:{
    padding:0,
    height:210,
    width:"100%"
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
    marginTop:-20,
    margin:30,
    borderTopLeftRadius:50,
    borderBottomEndRadius:50,
    backgroundColor:"white",
    borderWidth:0.5
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
    justifyContent:"center",
    alignItems:"center"
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
    padding:20,
    paddingLeft:40,
    paddingRight:40,
    backgroundColor:"#000473",
    borderRadius:10,
    borderWidth:0.8,
    borderColor:"white"
  },
  locationbuttonStyle:{
    padding:15,
    paddingLeft:40,
    paddingRight:40,
    backgroundColor:"#000473",
    justifyContent:"center",
    alignItems:"center",
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
locationModalContainer:{
    flex: 1,
    backgroundColor: '#fff'
},
locationModalView:{
  flex: 1,
  paddingTop:10
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
})