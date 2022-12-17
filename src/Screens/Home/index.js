import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Pressable, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import Icon, {Icons} from '../../Components/Icons';
import CategoryBtn from '../../Components/CategoryBtn';
import ProductsBtn from '../../Components/ProductsBtn';
import {HomeScreenClr} from '../../Constants/colors';
import {styles} from './styles';
import SearchModal from '../../Components/SearchBtn/SearchModal';

const HomeScreen = () => {
  const Products = useSelector(state => state.Products);
  const [visible, setVisible] = useState(false);
  const Categories = useSelector(state => state.Categories);
  const [selectedCategory, setSelectedCategory] = useState(Categories[0].Name);
  const [categoryProducts, setCategoryProducts] = useState([]);
  // Update products whenever category is changed
  useEffect(() => {
    setCategoryProducts(
      Products.filter(ele => ele.category == selectedCategory),
    );
  }, [selectedCategory]);
  return (
    <View style={styles.mainContainer}>
      {/* Search Modal */}
      <SearchModal visible={visible} showModal={setVisible} />
      {/* Header */}
      {/* Logo */}
      {/* Search bar btn */}
      <View style={styles.headerContainer}>
        <Icon
          type={Icons.Ionicons}
          name="ios-logo-react"
          color={HomeScreenClr.logoClr}
          size={40}
        />
        <Pressable
          style={styles.searchContainer}
          onPress={() => setVisible(true)}>
          <Icon
            type={Icons.FontAwesome}
            name="search"
            color={HomeScreenClr.searchBarIcon}
            size={24}
          />
        </Pressable>
      </View>
      {/* Greetings */}
      <View style={{marginVertical: 12}}>
        <Text
          style={{
            fontSize: 20,
            color: HomeScreenClr.heading,
            fontWeight: 'bold',
          }}>
          Hello, Nakul
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: HomeScreenClr.subHeading,
            fontWeight: '500',
          }}>
          Let's get you something!
        </Text>
      </View>
      {/* Categories - Horizontal flatlist*/}
      <View style={{marginVertical: 8}}>
        <Text style={styles.categoryText}>Top Categories</Text>
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
      {categoryProducts.length ? (
        <FlatList
          data={categoryProducts}
          showsVerticalScrollIndicator={false}
          style={{marginTop: 12, width: '100%'}}
          renderItem={({index, item}) => <ProductsBtn item={item} />}
          numColumns={2}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Coming soon...</Text>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
