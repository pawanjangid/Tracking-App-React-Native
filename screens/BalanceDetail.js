import React, {useState,useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  BackHandler
} from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons'
import Constant from 'expo-constants';

const FirstRoute = () => (
    <View style={{ flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: '#d6d6d6'}} >
        <Text>Ops! Not Found</Text>
    </View>
  );
  
  const SecondRoute = () => (
    <View style={{ flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: '#d6d6d6'}}>
        <Text>Ops! Not Found</Text>
    </View>
  );
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

export default function BalanceDetail({navigation})  {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'All' },
        { key: 'second', title: 'TOP-UP' },
    ]);


    function handleBackButtonClick() {
        navigation.navigate("Wallet");
        return true;
      }
    
      useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
          BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
      }, []);

    return (
        <View style={{marginTop:Constant.statusBarHeight,backgroundColor:"white",flex:1}}>
            <View style={styles.headerBar}>
                <View style={styles.headerIcon}>
                <Ionicons name="arrow-back-sharp" size={24} color="black" onPress={()=>navigation.navigate("Wallet")} />
                </View>
                <View style={styles.headerName}>
                    <Text style={{fontSize:16,fontWeight:"bold"}}>Transaction History</Text>
                </View>
            </View>
            <View style={styles.walletContainer}>
            <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    renderTabBar={props => <TabBar {...props} indicatorStyle={{ backgroundColor: 'blue' }} style={{ backgroundColor: 'white'}} renderLabel={({ route, focused, color }) => (
                        <Text style={{ color:focused ? "blue":"black", margin: 8,fontWeight:"bold" }}>
                          {route.title}
                        </Text>
                      )} />}
                    onIndexChange={setIndex}
                    initialLayout={{ width: "100%"}}
                    />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  detailbox:{
    backgroundColor:"#000473",
    padding:20,
    borderRadius:10
  },
  walletContainer:{
    flex:1
  },
  headerBar: {
    flexDirection:"row",
    justifyContent:"space-around",
    padding:5,
    paddingTop:15
  },
  headerName:{
    width:"80%",
    justifyContent:"center"
  }
});
