import * as React from 'react';
import { View, useWindowDimensions,FlatList,StyleSheet,Text } from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import Constant from 'expo-constants';
import { FontAwesome,Ionicons,Feather } from '@expo/vector-icons';

export default function ManageDriver() {


  return (
    <View style={styles.container}>
    <FlatList
      data={[
        {key: 'Devin'},
        {key: 'Dan'},
        {key: 'Dominic'},
        {key: 'Jackson'},
        {key: 'James'},
        {key: 'Joel'},
        {key: 'John'},
        {key: 'Jillian'},
        {key: 'Jimmy'},
        {key: 'Julie'},
        {key:'ab'},
        {key:"ac"},
        {key:"ad"},
        {key:"ae"},
        {key:"at"},
        {key:"ay"},
        {key:"atu"}
      ]}
      renderItem={({item}) => {
        return(
            <View style={{padding:15,
                flexDirection:'row',
                justifyContent:'space-around',
                borderBottomWidth:1,
                borderBottomColor:'black'
                }}>
                <View style={{padding:5}}>
                <FontAwesome name="drivers-license" size={24} color="black" />
                </View>
                <Text style={{width:"70%",
                padding:8,
                borderRadius:10,
                paddingLeft:10,
                fontSize:16,
                fontWeight:'bold'
                }} >{item.key}</Text>
                <View>
                <Feather name="check" size={24} color="#000d80" />
                </View>
            </View>
        )
    }}
    />
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     marginTop:Constant.statusBarHeight
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });