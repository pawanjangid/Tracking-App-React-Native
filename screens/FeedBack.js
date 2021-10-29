import React,{useEffect} from 'react'
import {View,Text,BackHandler} from 'react-native'
function FeedBack({navigation}) {

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
                Welocme to FeedBack Page
            </Text>
        </View>
    )
}

export default FeedBack
