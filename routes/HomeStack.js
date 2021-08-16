import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import More from '../screens/More';
import MyOrder from "../screens/MyOrder";
import ManageDriver from "../screens/ManageDriver";
import OrderDetail from '../screens/OrderDetail';
import AssignDriver from '../screens/AssignDriver';
import TrackOrder from '../screens/TrackOrder';
import OrderPayment from '../screens/OrderPayment';
import EditProfile from '../screens/EditProfile';
import ReferEarn from "../screens/ReferEarn";
import Country from "../screens/Country";
import GetStart from "../screens/GetStart";
import Notifications from '../screens/Notification';
import TopupList from '../screens/TopupList';
import Checkout from '../screens/Checkout';
import BalanceDetail from '../screens/BalanceDetail';
import Coupons from '../screens/Coupons';
import SelectVehicle from '../screens/SelectVehicle';
import AdditionalService from '../screens/AdditionalService';
import PlaceOrder from '../screens/PlaceOrder';
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Country" component={Country} options={{ swipeEnabled: false }}  />
      <Stack.Screen name="GetStart" component={GetStart}  options={{ swipeEnabled: false }}/>
      <Stack.Screen name="Login" component={Login}  options={{ swipeEnabled: false }}/>
      <Stack.Screen name="Register" component={Register} options={{ swipeEnabled: false }} />
      <Stack.Screen name="Notification" component={Notifications} options={{ swipeEnabled: false }} />
      <Stack.Screen name="TopupList" component={TopupList} options={{ swipeEnabled: false }} />
      <Stack.Screen name="Checkout" component={Checkout} options={{ swipeEnabled: false }} />
      <Stack.Screen name="Coupons" component={Coupons} options={{ swipeEnabled: false }} />
      <Stack.Screen name="SelectVehicle" component={SelectVehicle} options={{ swipeEnabled: false }} />
      <Stack.Screen name="AdditionalService" component={AdditionalService} options={{ swipeEnabled: false }} />
      <Stack.Screen name="BalanceDetail" component={BalanceDetail} options={{ swipeEnabled: false }} />
      <Stack.Screen name="More" component={More} options={{ swipeEnabled: false }} />
      <Stack.Screen name="PlaceOrder" component={PlaceOrder} options={{ swipeEnabled: false }} />
      <Stack.Screen name="MyOrders" component={MyOrder} options={{ swipeEnabled: false }} />
      <Stack.Screen name="TrackOrder" component={TrackOrder} options={{ swipeEnabled: false }} />
      <Stack.Screen name="ManageDriver" component={ManageDriver} options={{ swipeEnabled: false }} />
      <Stack.Screen name="OrderHistory" component={More} options={{ swipeEnabled: false }} />
      <Stack.Screen name="OrderDetail" component={OrderDetail} options={{ swipeEnabled: false }} />
      <Stack.Screen name="AssignDriver" component={AssignDriver} options={{ swipeEnabled: false }} />
      <Stack.Screen name="OrderPayment" component={OrderPayment} options={{ swipeEnabled: false }} />
      <Stack.Screen name="EditProfile" component={EditProfile} options={{ swipeEnabled: false }} />
      <Stack.Screen name="ReferEarn" component={ReferEarn} options={{ swipeEnabled: false }} />
    </Stack.Navigator>
  );
}



export default HomeStack;