import React, { Component } from 'react';
import {
  Text,
  View,
  BackHandler
} from 'react-native';
export default class More extends Component {
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    this.backHandler.remove()
  }

 handleBackPress = () => {
    this.props.navigation.navigate("Settings"); // React Navigation goBack
    return true;
  }


  render() {
    return (
      <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
        <Text>Web Page appear here</Text>
      </View>
    );
  }
}