// Reusable component of Categories-Flatlist-HomeScreen
import React from 'react';
import {Pressable} from 'react-native';
import {HomeScreenClr} from '../Constants/colors';
import Icon, {Icons} from './Icons';
const CategoryBtn = props => {
  // Current focus item should be colored orange
  const {item, category, setInFocus} = props;
  const inFocus = category == item.Name ? true : false;
  let iconType = item['icon-type'];
  let iconName = item['icon-name'];
  return (
    <Pressable
      style={{
        backgroundColor: inFocus
          ? HomeScreenClr.categoriesBtnBkgInFocus
          : HomeScreenClr.categoriesBtnBkgOutOfFocus,
        padding: 8,
        borderRadius: 8,
        marginRight: 16,
      }}
      onPress={() => setInFocus(item.Name)}>
      <Icon
        type={Icons[iconType]}
        name={iconName}
        color={
          inFocus
            ? HomeScreenClr.categoriesBtnInFocus
            : HomeScreenClr.categoriesBtnOutOfFocus
        }
        size={24}
      />
    </Pressable>
  );
};

export default CategoryBtn;
