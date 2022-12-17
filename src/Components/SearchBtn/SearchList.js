import React from 'react';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';

const Item = props => {
  const {info, navigation} = props;
  return (
    <Pressable
      style={{
        backgroundColor: '#f3f3f3',
        marginVertical: 8,
        padding: 12,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
      }}
      onPress={() => navigation.navigate('Details')}>
      {/* IMAGE */}
      <Image
        source={{uri: info.image[0]}}
        style={{
          width: '10%',
          height: '100%',
          borderRadius: 20,
          resizeMode: 'contain',
        }}
      />
      <View style={{marginLeft: 12}}>
        {/* TITLE */}
        <Text style={{fontSize: 16, color: '#000'}} numberOfLines={1}>
          {info.title}
        </Text>
        {/* PRICE */}
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
          }}>
          ${info.price}
        </Text>
      </View>
    </Pressable>
  );
};

const SearchList = ({phrase}) => {
  const Products = useSelector(state => state.Products);
  const navigation = useNavigation();
  const renderList = item => {
    // when no input, show all
    if (phrase === '') {
      return <Item info={item} navigation={navigation} />;
    }
    // filter of the name ||  filter of the description
    if (
      item.title
        .toUpperCase()
        .includes(phrase.toUpperCase().trim().replace(/\s/g, '')) ||
      item.category
        .toUpperCase()
        .includes(phrase.toUpperCase().trim().replace(/\s/g, ''))
    ) {
      return <Item info={item} navigation={navigation} />;
    }
  };

  return (
    <FlatList
      data={Products}
      showsVerticalScrollIndicator={false}
      renderItem={({index, item}) => renderList(item)}
    />
  );
};

export default SearchList;
