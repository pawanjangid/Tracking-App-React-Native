import React, { useState, useCallback, useEffect } from 'react';
import {View,Text,StyleSheet,BackHandler}  from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import {AntDesign} from '@expo/vector-icons';
import Constants from 'expo-constants';

function SupportChat({navigation}) {

    const [messages, setMessages] = useState([]);
 
    useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: 'Hello Rider, How Can i help you',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Admin',
            avatar: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
          },
        },
      ])
    }, [])



    function handleBackButtonClick() {
        navigation.navigate("Help Center");
        return true;
      }
    
      useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
          BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
      }, []);


    const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.headerBar}>
                <View style={styles.headerIcon}>
                <AntDesign name="arrowleft" size={24} color="black" onPress={() =>{navigation.navigate('Help Center')}}/>
                </View>
                <View style={styles.headerName}>
                    <Text style={{fontSize:16,fontWeight:"bold"}}>Live Chat</Text>
                </View>
                <View style={styles.headerNotification}>
                
                </View>
            </View>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
        />
        </View>
        
      )
}

export default SupportChat;
const styles = StyleSheet.create({
    container: {
      flex:1,
      marginTop:Constants.statusBarHeight,
      backgroundColor:"white"
    },
    headerBar: {
      flexDirection:"row",
      justifyContent:"space-around",
      padding:5,
      paddingTop:15
    },
    headerName:{
      width:"80%",
      justifyContent:"center",
      alignItems:"center"
    }
})