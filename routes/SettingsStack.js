import { createStackNavigator } from "react-navigation-stack";
import Settings from '../screens/Settings';
const screens = {
    Notification:{
        screen:Settings
    }
}
const SettingsStack = createStackNavigator(screens,{
    headerMode: 'none',
});
export default SettingsStack;