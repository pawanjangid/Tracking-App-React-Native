import * as React from 'react';
import { View,FlatList,StyleSheet,Text } from 'react-native';
import Constant from 'expo-constants';

export default function MyOrder() {


  return (
    <View style={styles.container}>
    <View style={{flexDirection:'row', justifyContent:'space-around',padding:10,backgroundColor:"#ffffff"}}>
      <Text style={{borderBottomWidth:1,borderColor:"blue",padding:5}}>
        All
      </Text>
      <Text style={{padding:5}}>
        Completed
      </Text>
      <Text style={{padding:5}}>
        On Going
      </Text>
      <Text style={{padding:5}}>
        Canceled
      </Text>
    </View>
    <FlatList
      data={[
        {key: 'Devin',type:"1",status:"On going"},
        {key: 'Dan',type:"1",status:"On going"},
        {key: 'Dominic',type:"2",status:"Completed"},
        {key: 'Jackson',type:"2",status:"Completed"},
        {key: 'James',type:"2",status:"Completed"},
        {key: 'Joel',type:"1",status:"On going"},
        {key: 'John',type:"1",status:"On going"},
        {key: 'Jillian',type:"1",status:"On going"},
        {key: 'Jimmy',type:"1",status:"On going"},
        {key: 'Julie',type:"1",status:"On going"},
        {key:'ab',type:"1",status:"On going"},
        {key:"ac",type:"3",status:"Canceled"},
        {key:"ad",type:"3",status:"Canceled"},
        {key:"ae",type:"3",status:"Canceled"},
        {key:"at",type:"1",status:"On going"},
        {key:"ay",type:"1",status:"On going"},
        {key:"atu",type:"1",status:"On going"}
      ]}
      renderItem={({item}) => {
        return(
          <View style={{paddingTop:10,paddingLeft:20,paddingRight:20,borderRadius:10}}>
            <View key={item.key} style={{backgroundColor:"#fff",elevation:5}}>
                <View style={{padding:0,
                    flexDirection:'row',
                    justifyContent:'space-around',
                    }}>
                    <View style={{width:"60%",
                    backgroundColor:'#ffffff',
                    padding:20,
                    fontSize:16,
                    borderBottomLeftRadius:10,borderTopLeftRadius:10
                    }} >
                        <Text>{item.key}</Text>
                        <Text>Sangai to Jaipur</Text>
                      </View>
                     <Text style={{fontSize:16,fontWeight: "bold",padding:25}}>$200</Text>
                     <View style={{backgroundColor:item.type==1 ? '#c78a1a':(item.type==2 ? 'green':'#454545'),paddingLeft:10,paddingTop:25,paddingRight:15,borderBottomRightRadius:10,borderTopRightRadius:10}}>
                       <Text style={{color:'white',fontSize:18,fontWeight:'500'}}>{item.status}</Text>
                     </View>
                </View>
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