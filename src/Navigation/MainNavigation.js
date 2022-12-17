// It will have main stack differtiating between startup screen and rest of the application
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './StackNavigation';
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default MainNavigation;
