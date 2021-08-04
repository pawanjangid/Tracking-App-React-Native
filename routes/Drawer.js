import { createDrawerNavigator } from '@react-navigation/drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './HomeStack';
import NotificationStack from './NotificationStack';
import SettingsStack from './SettingsStack';
const RootDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:HomeStack,
    },
    Notification:{
        screen:NotificationStack,
    },
    SettingsStack:{
        screen:SettingsStack
    }
});

export default createAppContainer(RootDrawerNavigator);