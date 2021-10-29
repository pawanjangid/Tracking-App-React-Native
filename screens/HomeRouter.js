import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React,{useState,useEffect} from 'react';
import { Text, View,StyleSheet,Image,SafeAreaView } from 'react-native';
import {Feather,AntDesign} from '@expo/vector-icons';
import Settings from './Settings';
import Home from './Home';
import Orders from './Orders';
import Wallet from './Wallet';
import MyDrivers from './MyDrivers';
import HelpCenter from './HelpCenter';
import HomeStack from '../routes/HomeStack';


function CustomDrawerContent(props) {

  const [day, setDay] = useState(false);

  useEffect(() => {
    var today = new Date();
    var time = today.getHours();
    if((time >=0 && time<6) ||(time>18 && time<=23)){
      setDay(false)
    }else{
      setDay(true);
    }
  
  },[])


  return (
    <SafeAreaView style={{flex: 1}} forceInset={{top: "always", horizontal: "never"}}>
      <DrawerContentScrollView style={[styles.drawerContainer,{backgroundColor:day ? 'rgba(248,163,70,1)' : 'rgba(69,77,175,1)'}]} {...props}>
        <View style={styles.HeaderContainer}>
          <View style={styles.ImageContainer}>
            <Image source={require('../assets/Profile.png')} style={styles.Image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.text,{color : day ? 'black':'white'}]}>Pawan Kumar Jangid</Text>
          </View>
        </View>
        <DrawerItemList {...props} itemStyle={{padding:1,paddingLeft:15,borderRadius:15}}  activeTintColor='white' activeBackgroundColor='#000473' inactiveTintColor={'white'} inactiveBackgroundColor='transparent' labelStyle={{fontSize:14,fontWeight:"bold"}} />
        
        <View style={{borderBottomWidth:1,width:"100%",borderColor:"#b8b8b8",marginTop:5}}></View>
        <View style={{marginTop:5,justifyContent:"center",alignItems:"center",padding:10}}>
          <Text style={[styles.ctext,{color:day ? 'black':'white'}]}>You are in <Text style={{color:"red"}}>Singapore</Text></Text>
        </View>
      </DrawerContentScrollView>
        <View style={styles.BottomContainer}>
          <View style={styles.textContainer}>
            <Image  source={require('../assets/banner.png')} style={{height:100,resizeMode:"stretch",width:"100%"}} />
          </View>
        </View>
        
    </SafeAreaView> 
  );
}
const Drawer = createDrawerNavigator();

export default function HomeRouter() {
  return (
    <NavigationContainer >
        <Drawer.Navigator initialRouteName="Root" drawerContent={(props) => <CustomDrawerContent {...props} />} >
        <Drawer.Screen name="Root" component={HomeStack} options={{
                drawerLabel: () => null,
                swipeEnabled: false
            }} />
        <Drawer.Screen name="Home" component={Home} options={{
                drawerIcon:(tabInfo)=><AntDesign name="home" size={24} color={tabInfo.focused ? "white":"white"} />
            }} />
        <Drawer.Screen name="Orders" component={Orders} options={{
                drawerIcon:(tabInfo)=><AntDesign name="barschart" size={24} color={tabInfo.focused ? "white":"white"} />
            }} />
        <Drawer.Screen name="Wallet" component={Wallet} options={{
                drawerIcon:(tabInfo)=><AntDesign name="wallet" size={24} color={tabInfo.focused ? "white":"white"} />
            }} />
        <Drawer.Screen name="My Drivers" component={MyDrivers} options={{
                drawerIcon:(tabInfo)=><AntDesign name="addusergroup" size={24} color={tabInfo.focused ? "white":"white"} />
            }} />
        <Drawer.Screen name="Help Center" component={HelpCenter} options={{
                drawerIcon:(tabInfo)=><Feather name="help-circle" size={24} color={tabInfo.focused ? "white":"white"} />
            }} />
        <Drawer.Screen name="Settings" component={Settings} options={{
                drawerIcon:(tabInfo)=><AntDesign name="setting" size={24} color={tabInfo.focused ? "white":"white"} />
            }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerContainer:{
    height:"100%",
  },
  HeaderContainer:{
    justifyContent:"center",
    alignItems:"center",
  },
  ImageContainer:{
    width:100,
    height:100,
    borderRadius:60,
    borderWidth:2,
    borderColor:"#c9c9c9",
    elevation:2
  },
  Image: {
    width:96,
    height:96,
    borderRadius:60,
    resizeMode:"stretch"
  },
  textContainer:{
    padding:0,
  },
  text:{
    fontSize:18,
    fontWeight:"bold",
  },
  ctext:{
    fontSize:13,
    fontWeight:"bold",
  },
  logout:{
    justifyContent:"space-around",
    flexDirection:"row"
  }
})