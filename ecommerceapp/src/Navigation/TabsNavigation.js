// 4 Tabs

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CartStack, ProductStack} from './StackNavigation';
import ProfileScreen from '../Screens/Profile';
import ChatBotScreen from '../Screens/ChatBot';

const Tabs = createBottomTabNavigator();
const TabsNavigation = () => {
  return (
    <Tabs.Navigator screenOptions={{headerShown: false}}>
      <Tabs.Screen name="HomeTab" component={ProductStack} />
      <Tabs.Screen name="CartTab" component={CartStack} />
      <Tabs.Screen name="ChatBotTab" component={ChatBotScreen} />
      <Tabs.Screen name="ProfileTab" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

export default TabsNavigation;
