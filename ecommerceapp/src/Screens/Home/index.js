import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/core';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable onPress={() => navigation.navigate('Details')}>
        <Text>Go To Products</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
