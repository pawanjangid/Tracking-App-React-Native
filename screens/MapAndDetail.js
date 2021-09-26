import React,{useState,useEffect} from 'react';
import { View, StyleSheet,BackHandler,Text,TextInput,TouchableHighlight, Alert } from 'react-native';
import Constants from 'expo-constants';
import MapView, { Marker } from 'react-native-maps';

import { Ionicons,AntDesign } from '@expo/vector-icons'; 

const GOOGLE_PLACES_API_KEY = 'AIzaSyD55uiGQUVs640sz5lAIdjatu6ZAxk4ybo';

const InitialRegion = ({navigation,route}) => {

  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }


  const [floor,setFloor] = useState();
  const [opContact,setOpContact] = useState();
  const [opPerson,setOpPerson] = useState();
  const [finaldata,setFinalData] = useState(route.params.finaldata);
  const [count,setCount] = useState(0);

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
          BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
      }, []);

      const [initialRegion,setInitialRegion] = useState({
        latitude: route.params.initialRegion.latitude,
        longitude: route.params.initialRegion.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });

      const [location,setLocation] = useState({
        latitude: route.params.initialRegion.latitude,
        longitude: route.params.initialRegion.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      })


      function changeLocation(e){
        setLocation(e);
      }

      function ConfirmHandler() {
        console.log("map page Page")
        console.log(finaldata);


        setFinalData([...finaldata,{
          status: "success",
          type:route.params.initialRegion.type,
          formatted_address: route.params.initialRegion.formatted_address,
          place_id: route.params.initialRegion.place_id,
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: location.latitudeDelta,
          longitudeDelta: location.longitudeDelta,
          floor:floor,
          option_number:opContact,
          option_person:opPerson
        }])
        setCount(count+1);
      }

      useEffect(() => {
        console.log(finaldata);
        if(count>0) {
          navigation.navigate('Home',{finaldata})
        }
    }, [finaldata]);

      useEffect(() => {
        
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
          BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
      }, []);


  return (
    <View style={styles.container}>
       <View style={{flex:1}}>
          <MapView initialRegion={initialRegion} style={{height:"100%",width:"100%"}} 
            onRegionChangeComplete={(e)=>{changeLocation(e)}}
          />
       <View style={{position:"absolute",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}}>
            <Ionicons name="pin" size={40} color="#0e0f2e" />
        </View>
       
       </View>

      <View style={styles.detailcontainer}>
          <View style={styles.locationDetail}>
              <Ionicons name="pin" size={24} color="#0e0f2e" />
              <Text style={{width:"90%",padding:3,paddingLeft:0,fontSize:14}}>{route.params.initialRegion.formatted_address}</Text>
          </View>
          <View style={styles.textContainer}>
              <View style={styles.iconContainer}>
                <AntDesign name="home" size={24} color="#3c3d59" />
              </View>
              <TextInput style={styles.textinput}
              placeholder="Floor and House Number"
              value={floor}
              onChangeText={(e)=>setFloor(e)}
              placeholderTextColor="#878787"
              />
          </View>
          <View style={styles.textContainer}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.iconContainer}>
                  <AntDesign name="phone" size={24} color="#3c3d59" />
                </View>
                <TextInput style={styles.textinput}
                placeholder="Phone Number"
                placeholderTextColor="#878787"
                keyboardType="numeric"
                value={opContact}
                onChangeText={(e)=>setOpContact(e)}
                />
              </View>
              <View style={{flexDirection: 'row',marginLeft:15}}>
                <View style={styles.iconContainer}>
                  <AntDesign name="user" size={24} color="#3c3d59" />
                </View>
                <TextInput style={styles.textinput}
                placeholder="Contact Person"
                placeholderTextColor="#878787"
                value={opPerson}
                onChangeText={(e)=>setOpPerson(e)}
                />
              </View>
          </View>
          <View style={styles.ButtonContainer}>
              <TouchableHighlight underlayColor='rgba(73,182,77)' onPress={()=>{ConfirmHandler()}}>
                <View style={styles.buttonStyle}>
                  <Text style={{color:"white",fontWeight:"bold",fontSize:16}}>Confirm</Text>
                </View>
              </TouchableHighlight>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight + 10,
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
});

export default InitialRegion;
