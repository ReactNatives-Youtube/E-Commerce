import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Pressable} from 'react-native';

const CheckoutScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Pressable onPress={() => navigation.navigate('PaymentProduct')}>
        <Text>Go To Checkout Screen</Text>
      </Pressable>
    </View>
  );
};

export default CheckoutScreen;
