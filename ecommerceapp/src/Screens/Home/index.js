import React, {useState} from 'react';
import {View, Text, Pressable, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import Icon, {Icons} from '../../Components/Icons';
import CategoryBtn from '../../Components/CategoryBtn';
const HomeScreen = () => {
  const navigation = useNavigation();
  const Products = useSelector(state => state.Products);
  const Categories = useSelector(state => state.Categories);
  const [selectedCategory, setSelectedCategory] = useState(Categories[0].Name);
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
      {/* Greetings */}
      <View style={{marginVertical: 12}}>
        <Text style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>
          Hello, Nakul
        </Text>
        <Text style={{fontSize: 16, color: '#a6a6a6', fontWeight: '500'}}>
          Let's get you something!
        </Text>
      </View>
      {/* Categories - Horizontal flatlist*/}
      <View style={{marginVertical: 8}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: '#000',
            marginBottom: 12,
          }}>
          Top Categories
        </Text>
        <FlatList
          data={Categories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.Name}
          renderItem={({index, item}) => (
            <CategoryBtn
              item={item}
              category={selectedCategory}
              setInFocus={setSelectedCategory}
            />
          )}
        />
      </View>
      {/* Product items - Vertical Flat list */}
      <Pressable onPress={() => navigation.navigate('Details')}>
        <Text>Go To Products</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
