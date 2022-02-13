import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import * as Actions from '../../Store/Actions';
import LottieView from 'lottie-react-native';
const StartUpScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const products = useSelector(state => state.Products);
  const [error, setError] = useState(false);
  // Getting data from firebase db
  useEffect(() => {
    //  dispatch startup action
    dispatch(Actions.startUp());
  }, []);

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

  return !error ? (
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
