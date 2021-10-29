import React,{useEffect} from 'react'
import {View,Text,BackHandler} from 'react-native'
function FAQ({navigation}) {

    function handleBackButtonClick() {
            navigation.navigate('Help Center');
         return true;
       } 

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        }
    }, []);


    return (
        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
            <Text>
                Welocme to FAQ Page
            </Text>
        </View>
    )
}

export default FAQ
