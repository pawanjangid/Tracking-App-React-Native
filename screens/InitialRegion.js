import React,{useState,useEffect} from 'react';
import { View, StyleSheet,BackHandler } from 'react-native';
import Constants from 'expo-constants';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const GOOGLE_PLACES_API_KEY = 'AIzaSyD55uiGQUVs640sz5lAIdjatu6ZAxk4ybo';

const InitialRegion = ({navigation,route}) => {

    function handleBackButtonClick() {
        navigation.goBack();
        return true;
      }
    
      var count = 0;

    const [initialRegion,setInitialRegion] = useState({
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    });

      const [finaldata,setFinalData] = useState([]);
      
    useEffect(() => {
      console.log("Initial region Page")
      console.log(route.params.finaldata);
      setFinalData(route.params.finaldata);

        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
          BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
      });


      useEffect(() => {
        if(initialRegion.status==='success') {
          navigation.navigate('Root',{screen:'MapAndDetail',params:{initialRegion,finaldata}})
        }
    }, [initialRegion]);


  return (
    <View style={styles.container}>
        <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: 'en', // language of the results
        }}
        onPress={(data, details = null) => {
          setInitialRegion({
            status: 'success',
            formatted_address:details.formatted_address,
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
            type:route.params.type,
            place_id:details.place_id
          });
        }}
        onFail={(error) => console.error(error)}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: 'white'
  },
  buttonStyle:{
    padding:10,
    paddingLeft:40,
    paddingRight:40,
    backgroundColor:"#000473",
    borderRadius:10,
    justifyContent:"center",alignItems:"center"
  },
});

export default InitialRegion;
