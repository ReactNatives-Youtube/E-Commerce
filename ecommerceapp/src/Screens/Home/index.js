import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import Icon, {Icons} from '../../Components/Icons';
const HomeScreen = () => {
  const navigation = useNavigation();
  const state = useSelector(state => state.Products);
  return (
    <View style={{backgroundColor: '#fff', flex: 1, padding: 16}}>
      {/* Header */}
      {/* Logo */}
      {/* Search bar btn */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Icon
          type={Icons.Ionicons}
          name="ios-logo-react"
          color="#61dafb"
          size={40}
        />
        <Pressable
          style={{backgroundColor: '#f8f8f8', padding: 8, borderRadius: 8}}>
          <Icon type={Icons.FontAwesome} name="search" color="#000" size={24} />
        </Pressable>
      </View>

      <Pressable onPress={() => navigation.navigate('Details')}>
        <Text>Go To Products</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
