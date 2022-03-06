import React from 'react';
import {View, Text, Pressable, Image, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {HomeScreenClr} from '../Constants/colors';
import Icon, {Icons} from './Icons';
const ProductsBtn = ({item}) => {
  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation();
  return (
    <Pressable
      style={{
        width: '49%',
        backgroundColor: HomeScreenClr.productsBtnBkg,
        marginVertical: 4,
        marginRight: 4,
        borderRadius: 20,
        padding: 12,
      }}
      onPress={() => navigation.navigate('Details')}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {/* Discount % */}
        <View
          style={{
            backgroundColor: HomeScreenClr.discountBkg,
            borderRadius: 40,
            alignItems: 'center',
            padding: 8,
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: HomeScreenClr.discountTxt,
            }}>
            30% OFF
          </Text>
        </View>
        {/* Like Icon */}
        <Icon
          type={Icons.Ionicons}
          name="heart-sharp"
          color={HomeScreenClr.likeIcon}
        />
      </View>
      {/* Image */}
      <Image
        source={{
          uri: item.image[0],
        }}
        style={{
          width: width * 0.33,
          height: height / 4.2,
          alignSelf: 'center',
          marginVertical: 8,
          borderRadius: 20,
          resizeMode: 'contain',
        }}
      />
      <View
        style={{
          backgroundColor: HomeScreenClr.titleBkg,
          padding: 8,
          borderBottomEndRadius: 20,
          borderBottomLeftRadius: 20,
        }}>
        {/* Title */}
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
          }}
          numberOfLines={1}>
          {item.title}
        </Text>
        {/* Price */}
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: HomeScreenClr.price,
          }}>
          ${item.price}
        </Text>
      </View>
    </Pressable>
  );
};

export default ProductsBtn;
