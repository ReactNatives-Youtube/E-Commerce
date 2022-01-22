import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Pressable} from 'react-native';

const ProductDetailsScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable onPress={() => navigation.navigate('CheckoutProduct')}>
        <Text>Go To Checkout Screen</Text>
      </Pressable>
    </View>
  );
};

export default ProductDetailsScreen;
