import React,{useEffect,useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  BackHandler,
  SafeAreaView,
  FlatList,
  TouchableHighlight
} from 'react-native';


import SelectVehicle from '../components/SelectVehicle';

import { Ionicons } from '@expo/vector-icons'
import Constant from 'expo-constants';
export default function SelectVehicles({navigation,route})  {
  const [vehicle,setVehicle] = useState([]);
    function handleBackButtonClick() {
        navigation.navigate("Home");
        return true;
      }

      const [duration,setDuration] = useState(0);
      const [distance,setDistance] = useState(0);
      const [amount,setAmount] = useState(0);


      useEffect(() => {
         fetchDistanceBetweenPoints();

        fetch('https://gettruckingbackend.herokuapp.com/vehicle/')
        .then((response) => response.json())
        .then((json) => {setVehicle(json.data);})
        .catch((error) => console.error(error));
        

        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
          BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
        
      }, []);

    const [selectedItem,setSelectedItem] = useState();





    function onClickHandler(){
        navigation.navigate('Root',{screen:'PlaceOrder',params:{...route.params,selectedItem,distance:distance,duration:duration,amount:amount,duration:duration}})
    }

    const fetchDistanceBetweenPoints = () => {
               var urlToFetchDistance =  'https://maps.googleapis.com/maps/api/distancematrix/json?destinations='+route.params.finaldata[1].latitude+'%2C'+route.params.finaldata[1].longitude+'&origins='+route.params.finaldata[0].latitude+'%2C'+route.params.finaldata[0].longitude+'&key=AIzaSyD55uiGQUVs640sz5lAIdjatu6ZAxk4ybo';
                fetch(urlToFetchDistance)
              .then(res => {return res.json()})
              .then(res => {
                console.log(res);
                let distance = res.rows[0].elements[0].distance.text;
                let duration = res.rows[0].elements[0].duration.text;
                setDuration(duration);
                setDistance(distance);
                console.log(distanceString)
              })
              .catch(error => {
                        console.log("Problem occurred");
              });
  
  }




    return (
      <View style={{marginTop:Constant.statusBarHeight,backgroundColor:"white",flex:1}}>
          <View style={styles.headerBar}>
            <View style={styles.headerIcon}>
              <Ionicons name="arrow-back-sharp" size={24} color="black" onPress={()=>navigation.navigate("Home")} />
            </View>
            <View style={styles.headerName}>
                <Text style={{fontSize:16,fontWeight:"bold"}}>Select Vehicle</Text>
            </View>
          </View>
          <View style={{padding:20,paddingBottom:80}}>
            
                <SafeAreaView style={{paddingBottom:130}}>
                    <FlatList
                        data={vehicle}
                        renderItem={({ item })=>
                            (
                              <SelectVehicle item={item} setAmount={setAmount} setSelectedItem={setSelectedItem}  distance={distance} />
                            )
                        }
                        keyExtractor={item => item.vehicle_id.toString()}
                    />
                </SafeAreaView>
           </View>
           <View style={{position:"absolute",bottom:0,width:"100%",backgroundColor:"#f2f2f2",elevation:10}}>
             <View style={{padding:20,paddingBottom:0,justifyContent:"center",alignItems:"center"}}>
               <Text style={{fontSize:16,fontWeight:"bold"}}>Amount : {amount}</Text>
             </View>
             <TouchableHighlight style={{paddingTop:20}} onPress={()=>{onClickHandler()}}>
              <View style={{backgroundColor:"#000473",padding:20,justifyContent:"center",alignItems:"center"}}>
                
                <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>
                  Place Order
                </Text>
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
