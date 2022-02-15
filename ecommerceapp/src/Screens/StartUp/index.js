import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import * as Actions from '../../Store/Actions';
const StartUpScreen = () => {
  const netInfo = useNetInfo();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const products = useSelector(state => state.Products);
  const [error, setError] = useState(false);
  const [netConnected, setNetConnected] = useState(true);
  // Getting data from firebase db and checking internet connection
  useEffect(() => {
    if (netInfo.isConnected == false) setNetConnected(false);
    else if (netInfo.isConnected == true) {
      setNetConnected(true);
      //  dispatch startup action
      dispatch(Actions.startUp());
    }
  }, [netInfo]);

  // Checking if data has come from db
  useEffect(() => {
    if (products.length != 0) {
      navigation.reset({
        index: 0,
        routes: [{name: 'Tabs'}],
      });
    }
    const timeout = setTimeout(() => {
      setError(true);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [products]);

  return netConnected == false ? (
    <LottieView
      source={require('../../Constants/no-internet.json')}
      autoPlay
      loop
      style={{backgroundColor: 'white'}}
    />
  ) : !error ? (
    <LottieView
      source={require('../../Constants/shopping-cart.json')}
      autoPlay
      loop
    />
  ) : (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 18}}>Some Error Occurred</Text>
    </View>
  );
};

export default StartUpScreen;
