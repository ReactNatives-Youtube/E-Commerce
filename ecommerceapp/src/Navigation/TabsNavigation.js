// 4 Tabs

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {CartStack, ProductStack} from './StackNavigation';
import ProfileScreen from '../Screens/Profile';
import ChatBotScreen from '../Screens/ChatBot';
import Icon, {Icons} from '../Components/Icons';

const TabArr = [
  {
    label: 'Home',
    type: Icons.Ionicons,
    activeIcon: 'grid',
    inActiveIcon: 'grid-outline',
  },
  {
    label: 'Cart',
    type: Icons.Ionicons,
    activeIcon: 'cart',
    inActiveIcon: 'cart-outline',
  },
  {
    label: 'Chat Bot',
    type: Icons.Ionicons,
    activeIcon: 'md-chatbox-sharp',
    inActiveIcon: 'md-chatbox-outline',
  },
  {
    label: 'Profile',
    type: Icons.FontAwesome,
    activeIcon: 'user-circle',
    inActiveIcon: 'user-circle-o',
  },
];

const Tabs = createBottomTabNavigator();
const TabsNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 10,
        },
      }}>
      <Tabs.Screen
        name="HomeTab"
        component={ProductStack}
        options={({route}) => ({
          tabBarStyle: {display: getTabBarVisibility(route)},
          // tabBarLabel: TabArr[0].label,
          tabBarShowLabel: false,
          tabBarIcon: ({color, focused}) => (
            <Icon
              type={TabArr[0].type}
              name={focused ? TabArr[0].activeIcon : TabArr[0].inActiveIcon}
              color={color}
            />
          ),
        })}
      />
      <Tabs.Screen
        name="CartTab"
        component={CartStack}
        options={({route}) => ({
          tabBarStyle: {display: getTabBarVisibility(route)},
          // tabBarLabel: TabArr[1].label,
          tabBarShowLabel: false,
          tabBarIcon: ({color, focused}) => (
            <Icon
              type={TabArr[1].type}
              name={focused ? TabArr[1].activeIcon : TabArr[1].inActiveIcon}
              color={color}
            />
          ),
        })}
      />
      <Tabs.Screen
        name="ChatBotTab"
        component={ChatBotScreen}
        options={{
          // tabBarLabel: TabArr[2].label,
          tabBarShowLabel: false,
          tabBarIcon: ({color, focused}) => (
            <Icon
              type={TabArr[2].type}
              name={focused ? TabArr[2].activeIcon : TabArr[2].inActiveIcon}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          // tabBarLabel: TabArr[3].label,
          tabBarShowLabel: false,
          tabBarIcon: ({color, focused}) => (
            <Icon
              type={TabArr[3].type}
              name={focused ? TabArr[3].activeIcon : TabArr[3].inActiveIcon}
              color={color}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

// Function to dynamically hide tab bars in specific screens
const getTabBarVisibility = route => {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (routeName?.includes('Checkout') || routeName?.includes('Payment')) {
    return 'none';
  }
  return 'flex';
};

export default TabsNavigation;
