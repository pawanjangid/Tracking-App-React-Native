import React,{useState,useEffect} from 'react';
import { View, StyleSheet,BackHandler,Text,Image,ProgressBarAndroid,Platform,Linking,TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';
import MapView, { Marker,Callout,PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { AntDesign,FontAwesome5,Feather,Entypo } from '@expo/vector-icons';
import { Menu, MenuItem } from 'react-native-material-menu';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GOOGLE_PLACES_API_KEY = 'AIzaSyD55uiGQUVs640sz5lAIdjatu6ZAxk4ybo';

const Tracking = ({navigation,route}) => {

  function handleBackButtonClick() {
    navigation.navigate("Orders");
    return true;
  }
  const [button,setButton] = useState(false);
  const [draw,setDraw] = useState([])
  const [initialRegion,setInitialRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const [driver,setDriver] = useState();
  const [origin,setOrigin] = useState();
  const [destination,setDestination] = useState();
  const [message,setMessage] = useState();
  const [count,setCount] = useState(0);
  const [driverData,setDriverData] = useState({
    photo:'',

  });
    useEffect(() => {
      setDraw(JSON.parse(route.params.locations));
      var lcn = JSON.parse(route.params.locations);
      var lattotal = 0;
      var lngtotal = 0;
      var lat = 0;
      var lng = 0;
      for (let i = 0; i < lcn.length; i++) {
        lattotal = lattotal+lcn[i].latitude;
        lngtotal = lngtotal+lcn[i].longitude;
      }

      lat = lattotal/(lcn.length);
      lng = lngtotal/(lcn.length);

      setOrigin({
        latitude: lcn[0].latitude,
        longitude: lcn[0].longitude
      })
      var final = lcn.length - 1;
      setDestination({
        latitude: lcn[final].latitude,
        longitude: lcn[final].longitude
      })
      setInitialRegion({
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      })


        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
          BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
      }, []);

     
      let markers = JSON.parse(route.params.locations).map(location => (
        <Marker
          key={location.place_id}
        
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
        >
            {location.type==='PickUp' ? <AntDesign name="home" size={24} color="black" /> : <AntDesign name="enviromento" size={24} color="black" />}

          <Callout style={{height:200}}>
              <View style={{width:200}}>
                <View style={{alignItems:"center",padding:10}}>
                  <Text style={{fontSize:20,fontWeight:"bold",color:"blue"}}>{location.floor}</Text>
                </View>
                <View style={{padding:5}}>
                  <Text>{location.formatted_address}</Text>
                </View>
                <View style={{padding:5,alignItems:"center"}}>
                  <Text style={{fontSize:16,fontWeight:"bold"}}>{location.type} Location</Text>
                </View>
              </View>
              
          </Callout>
        </Marker>
        
      ));

      
   const dialCall = (number) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
    else {phoneNumber = `telprompt:${number}`; }
    Linking.openURL(phoneNumber);
 };

  function checkOrderDetails() {
    console.log('Checking for driver');
    AsyncStorage.getItem('LOGIN_TOKEN').then((value) => {
      if(value!==null && !(driver >0)){
        fetch('https://gettruckingbackend.herokuapp.com/users/orderById', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization':value
            },
            body: JSON.stringify({
                order_id:route.params.order_id
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
                    if(responseData.success === 1) {
                          console.log(responseData);
                          if(responseData.data.driver_id>0){
                            setDriver(responseData.data.driver_id)
                          }
                          setCount(count+1)
                    }else{
                        setMessage(responseData.message)
                    }
                })
            .catch((error) =>{
                setMessage(error)
            })
      }
    })
  }

  function driverDetail() {
    
    AsyncStorage.getItem('LOGIN_TOKEN').then((value) => {
      if(value!==null){
        fetch('https://gettruckingbackend.herokuapp.com/users/driverDetail', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization':value
            },
            body: JSON.stringify({
                driver_id:driver
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
                    if(responseData.success === 1) {
                          console.log(responseData);
                          setDriverData(responseData.data[0])
                    }else{
                        setMessage(responseData.message)
                    }
                })
            .catch((error) =>{
                setMessage(error)
            })
      }
    })
  }
      
      useEffect(() => {
        if(!driver){
          console.log("Requestion process");
          setTimeout(()=>{checkOrderDetails()}, 10000);
        }else{
          driverDetail();
        }
      },[count])

  return (
    <View style={styles.container}>
      <View style={{alignItems:"flex-end"}}>
        <Menu
          style={{marginTop:38,backgroundColor:"#ebeced"}}
          visible={button}
          onRequestClose={()=>{setButton(!button)}}
        >
          <MenuItem onPress={()=>{setButton(!button)}}>Cancel</MenuItem>
          <MenuItem onPress={()=>{setButton(!button);navigation.navigate('Root',{screen:"SupportChat"})}}>Live Chat</MenuItem>
          <MenuItem onPress={()=>{setButton(!button);dialCall('1234567890')}}>Call Us</MenuItem>
        </Menu>
      </View>
        <View style={{flexDirection:"row",padding:10}}>
          <View style={{paddingLeft:10}}>
            <AntDesign name="arrowleft" size={24} color="black" onPress={()=>{navigation.navigate("Orders")}} />
          </View>
          <View style={{width:"80%",alignItems:"center"}}>
            <Text>Finding Driver</Text>
          </View>
          <View>
            <Entypo name="dots-three-horizontal" size={24} color="black" onPress={()=>{setButton(!button)}} />
          </View>
        </View>
       <View style={{flex:1}}>
          <MapView
          showsUserLocation={true}
          followUserLocation={true}
          loadingEnabled={true}
          provider={PROVIDER_GOOGLE}
          initialRegion={initialRegion} style={{height:"100%",width:"100%"}} 
          >
            {markers}
            <MapViewDirections
                
                origin={origin}
                destination={destination}
                apikey={GOOGLE_PLACES_API_KEY}
                strokeWidth={6}
                strokeColor="darkblue"
                lineDashPattern={[1]}
              />
            </MapView>
       </View>
       <View style={styles.driverContainer}>
          <View style={{paddingBottom:10,alignItems:"center"}}>
              <Text style={{fontSize:16,fontWeight:"bold"}}>{!driver ? 'Contacting Drivers Nearby...':'Fetching Driver Detail...'}</Text>
          </View>
            {!driver && <ProgressBarAndroid styleAttr="Horizontal" color="#000473" />}
          <View style={{justifyContent:"center",alignItems:"center",padding:5}}>
            {!driver ? <Image style={{width:50,height:50}} source={require('../assets/driver-image.png')} />:<Image style={{width:50,height:50}} source={{uri:'https://gettruckingbackend.herokuapp.com'+driverData.photo}} />}
          </View>
          {driver && <View style={{flexDirection:"row",justifyContent:"center",padding:5}}>
              <View style={{alignItems:"flex-end",paddingRight:10,justifyContent:"center"}}>
                <Text style={{fontSize:20,fontWeight:"bold"}}>{driverData.fullName}</Text>
              </View>
              <View style={{alignItems:"center",paddingLeft:10,justifyContent:"center"}}>
              <TouchableHighlight style={{alignItems:"center",backgroundColor:"green",paddingLeft:20,paddingRight:20,padding:8,borderRadius:10}} onPress={()=>{dialCall('9876543210')}}>
                  <Feather name="phone-call" size={24} color="white" />
              </TouchableHighlight>
            </View>
          </View>
          }

          

          <View style={{borderTopWidth:0.2,paddingTop:10,padding:0}}>
              {draw.map((point,index)=>{
                return(<View key={index.toString()} style={{padding:5}}>
                  <View style={{flexDirection:"row",borderWidth:0.3,borderRadius:10}}>
                    <View style={{padding:10,justifyContent:"center",alignItems:"center"}}>
                      {point.type==='PickUp' && <FontAwesome5 name="dot-circle" size={16} color="black" />}
                      {point.type==='Drop' && <Feather name="map-pin" size={16} color="black" />}
                      {point.type==='Stop' && <Entypo name="dot-single" size={16} color="black" />}
                    </View>
                    <View style={{padding:5,justifyContent:"center",alignItems:"center"}}>
                      <Text numberOfLines={1} style={{width:300}}>{point.formatted_address}</Text>
                    </View>
                  </View>  
                </View>)
              })}
              
          </View>
       </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white'
  },
  buttonStyle:{
    height:50,
    padding:10,
    paddingLeft:40,
    paddingRight:40,
    backgroundColor:"#000473",
    borderRadius:10,
    justifyContent:"center",alignItems:"center"
  },
  detailcontainer:{
    padding:20,
  },
  locationDetail:{
    flexDirection:"row",
    borderBottomWidth:1,
    borderBottomColor:"#ededed",
    padding:15
  },
  textContainer:{
    flexDirection:"row",
    padding:15,
    borderBottomWidth:1,
    borderBottomColor:"#ededed"
  },
  textinput:{
    marginLeft:10,
  },
  ButtonContainer:{
    paddingTop:4,
    alignItems:'center',
    justifyContent:"center"
  },
  driverContainer:{
    padding:20,
    alignSelf:'center',
    borderRadius:10

  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Tracking;
