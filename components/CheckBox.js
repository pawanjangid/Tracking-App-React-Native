import React,{Component}from 'react';
import {
  CheckBox,StyleSheet
} from 'react-native';


export default class Button extends Component {
    constructor(props){
      super(props);
      this.state = { 
        checked: false 
      }
    }
    render(){
        return (
            <CheckBox
                value={this.state.checked}
                onChange={() => {this.setState({ checked: !this.state.checked });this.props.onChange()}}
                style={styles.checkbox}
                />
        )
    }
}
const styles = StyleSheet.create({
checkbox: {
    color:"#495ac9"
}
});