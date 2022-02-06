// 4 Tabs

import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {CartStack, ProductStack} from './StackNavigation';
import ProfileScreen from '../Screens/Profile';
import ChatBotScreen from '../Screens/ChatBot';
import CustomTabsBtn from '../Components/CustomTabsBtn';

const Tabs = createBottomTabNavigator();

// Function to dynamically hide tab bars in specific screens
const getTabBarVisibility = route => {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (routeName?.includes('Checkout') || routeName?.includes('Payment')) {
    return 'none';
  }
  return 'flex';
};

const TabsNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="HomeTab"
        component={ProductStack}
        options={({route}) => ({
          tabBarStyle: {display: getTabBarVisibility(route)},
          // tabBarLabel: TabArr[0].label,
          tabBarShowLabel: false,
          tabBarButton: props => <CustomTabsBtn {...props} item={0} />,
        })}
      />
      <Tabs.Screen
        name="CartTab"
        component={CartStack}
        options={({route}) => ({
          tabBarStyle: {display: getTabBarVisibility(route)},
          // tabBarLabel: TabArr[1].label,
          tabBarShowLabel: false,
          tabBarButton: props => <CustomTabsBtn {...props} item={1} />,
        })}
      />
      <Tabs.Screen
        name="ChatBotTab"
        component={ChatBotScreen}
        options={{
          // tabBarLabel: TabArr[2].label,
          tabBarShowLabel: false,
          tabBarButton: props => <CustomTabsBtn {...props} item={2} />,
        }}
      />
      <Tabs.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          // tabBarLabel: TabArr[3].label,
          tabBarShowLabel: false,
          tabBarButton: props => <CustomTabsBtn {...props} item={3} />,
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigation;
