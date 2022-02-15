import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
const HomeScreen = () => {
  const navigation = useNavigation();
  const state = useSelector(state => state.Products);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Pressable onPress={() => navigation.navigate('Details')}>
        <Text>Go To Products</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
