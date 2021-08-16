import React, {useState,useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Modal,
  TextInput,
  Alert
} from 'react-native';
import { Ionicons,FontAwesome,Feather } from '@expo/vector-icons'
import Constant from 'expo-constants';
export default function MyDrivers({navigation})  {

    const [modalVisible, setModalVisible] = useState(false);
    const [phone,setPhone] = useState();
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
                    <View style={{justifyContent:"center",alignItems:"center",marginTop:200}}>
                        <FontAwesome name="user-circle" size={70} color="#919191" />
                    </View>
                    <View style={{justifyContent:"center",alignItems:"center",padding:30}}>
                        <Text>you do not added any driver here.</Text>
                    </View>

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
                                    <TouchableHighlight style={[styles.buttonContainer,{marginTop:0}]}>
                                        <View>
                                            <Text style={{fontWeight:"bold",color:"white"}}>Add Driver</Text>
                                        </View>
                                    </TouchableHighlight> 
                                </View>
                            </View>
                        </View>
                        </View>
                    </Modal>




                    <View style={{justifyContent:"center",alignItems:"center",}}>
                        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'  style={styles.buttonContainer} onPress={() => setModalVisible(!modalVisible)}>
                            <View>
                                <Text style={{fontWeight:"bold",color:"white"}}>Add Driver</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    
            </View>
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
      padding:1
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
