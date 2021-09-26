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
import { Ionicons } from '@expo/vector-icons'
import Constant from 'expo-constants';
export default function Wallet({navigation,route})  {
  const [vehicle,setVehicle] = useState([]);
    function handleBackButtonClick() {
        navigation.navigate("Home");
        return true;
      }

      const [duration,setDuration] = useState(0);
      const [distance,setDistance] = useState(0);
    
      useEffect(() => {
         fetchDistanceBetweenPoints();

        fetch('https://gettruckingbackend.herokuapp.com/vehicle/')
        .then((response) => response.json())
        .then((json) => {setVehicle(json.data);console.log(json.data)})
        .catch((error) => console.error(error));
        

        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
          BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
        
      }, []);

    const [selectedItem,setSelectedItem] = useState();


    function onClickHandler(item){
        setSelectedItem(item);
        navigation.navigate('Root',{screen:'AdditionalService',params:{...route.params,item,distance:distance,duration:duration}})

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
            
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={vehicle}
                        renderItem={({ item })=>
                            (
                                <TouchableHighlight key={item.vehicle_id.toString()} underlayColor='rgba(73,182,77,1,0.9)' onPress={()=>onClickHandler(item)}>
                                    <View key={item.vehicleId} style={styles.vehicleContainer}>
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
                            )
                        }
                        keyExtractor={item => item.vehicle_id.toString()}
                    />
                </SafeAreaView>
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
