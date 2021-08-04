import { createStackNavigator } from "react-navigation-stack";
import Notification from '../screens/Notification';
const screens = {
    Notification:{
        screen:Notification
    }
}


const NotificationStack = createStackNavigator(screens,{
    headerMode: 'none',
});
export default NotificationStack;