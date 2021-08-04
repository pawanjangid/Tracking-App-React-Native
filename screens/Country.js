import React,{useState} from "react"
import {FlatList, StyleSheet,Text,View,TouchableOpacity,Image} from "react-native"
import Constants from "expo-constants"
import { FontAwesome5,MaterialIcons } from "@expo/vector-icons";


function Country({navigation}) {

    const [countries,setCountries] = useState([
        {
            key:"1",
            name: "United States"
        },
        {
            key:"2",
            name: "United Kingdom"
        },
        {
            key:"3",
            name: "United States of Ireland"
        },
        {
            key:"4",
            name:"India"
        },
        {
            key:"5",
            name:"Singapore"
        },
        {
            key:"6",
            name:"China"
        },
        {
            key:"7",
            name:"Taivan"
        },
        {
            key:"8",
            name:"Canada"
        },
        {
            key:"9",
            name:"South Africa"
        },
        {
            key:"10",
            name:"Shree Lanka"
        },
        {
            key:"11",
            name:"Thailand"
        }
    ]);

    const [country,setCountry] = useState('')

      const renderItem = ({ item }) => {
        return (
            <TouchableOpacity key={item.key} onPress={()=>{navigation.navigate("GetStart")}}>
                <View style={styles.ItemContainer}>
                    <View style={{width:"80%"}}>
                        <Text>{item.name}</Text>
                    </View>
                    <View style={{flex:1}}>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                    </View>
                        
                </View>
                
            </TouchableOpacity>
          );
    }
    return (
        <View style={styles.Container}> 
            <View style={styles.ImageContainer}>
                <Image source={require("../assets/country.png")} style={{resizeMode:"contain",width:300,height:200}} />
            </View>
            <View style={styles.CountryContainer}>
                <View style={{padding:20}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Select Country</Text>
                </View>
                <FlatList
                data={countries}
                renderItem={renderItem}   
                />
            </View>
            <View style={{padding:10,paddingBottom:30}}>
                    <Text style={{fontSize:16,fontWeight:"bold",color:"#94a6ff"}}>Don't see your city here?</Text>
                </View>
        </View>
    )
}

export default Country;

const styles = StyleSheet.create({
    Container: {
        flex:1,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
    },
    ImageContainer: {
        flex:2,
        padding:20,
        paddingTop:30,
        paddingBottom:5,
        justifyContent:"center",
        alignItems:"center",
    },
    CountryContainer: {
        flex:5,
        justifyContent:"center",
        alignItems:"center",
        padding:30,
        paddingTop:10,
        width:"100%"
    },
    ItemContainer: {
        padding:20,
        paddingTop:10,
        borderBottomWidth:1,
        borderBottomColor:"#f7f7f7",
        flexDirection:"row"
    }

})
