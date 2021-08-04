import React from 'react';
import {View,StyleSheet, TouchableHighlight,Animated} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
export default class AddButton extends React.Component {

    render() {

    
        return (
            <View style={{position: 'absolute',alignItems: 'center'}}>
                 <Animated.View style={[styles.button]}>
                    <TouchableHighlight underlayColor="#7F58FF">
                        <Animated.View>
                            <FontAwesome5 name="home" size={24} color="#FFF" />
                        </Animated.View>
                    </TouchableHighlight>
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button : {
        backgroundColor: "#495ac9",
        alignItems: 'center',
        justifyContent: 'center',
        width:50,
        height:50,
        borderRadius:36,
        position:"absolute",
        top:-30,
        shadowColor:"#495ac9",
        shadowRadius:5,
        shadowOffset:{height:10},
        shadowOpacity:0.3,
        borderWidth:3,
        borderColor:"#FFF",
    },
    secondaryButton:{
        position:"absolute",
        alignItems: 'center',
        justifyContent:'center',
        width:48,
        height:48,
        borderRadius:24,
        backgroundColor:"#495ac9"
    }
})