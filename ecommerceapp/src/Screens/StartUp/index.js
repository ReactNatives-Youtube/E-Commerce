import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import * as Actions from '../../Store/Actions';
const StartUpScreen = () => {
  const dispatch = useDispatch();
  // Getting data from firebase db
  useEffect(() => {
    //  dispatch startup action
    dispatch(Actions.startUp());
  }, []);

  return (
    <View>
      <Text>Start Up Screen</Text>
    </View>
  );
};

export default StartUpScreen;
