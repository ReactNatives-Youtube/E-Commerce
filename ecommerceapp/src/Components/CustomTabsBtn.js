import React, {useEffect, useRef} from 'react';
import {View, Text, Pressable} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {TabsClr} from '../Constants/colors';
import Icon, {Icons} from '../Components/Icons';

const TabArr = [
  {
    label: 'Home',
    type: Icons.Ionicons,
    name: 'home',
  },
  {
    label: 'Cart',
    type: Icons.Ionicons,
    name: 'cart',
  },
  {
    label: 'Chat',
    type: Icons.Ionicons,
    name: 'md-chatbox-sharp',
  },
  {
    label: 'Profile',
    type: Icons.FontAwesome,
    name: 'user-circle',
  },
];

// Custom Tab Button
const CustomTabsBtn = props => {
  // console.log(props);
  // Destructuring the props
  const {item, onPress, accessibilityState} = props;
  // Getting focused value on the accessibility State of tabs
  const focused = accessibilityState.selected;
  // creating ref for that particular tab and tab's label
  const viewRef = useRef(null);
  const textRef = useRef(null);

  // UseEffect function to run whenever the value of focused variable changes
  useEffect(() => {
    if (focused) {
      viewRef.current.animate({0: {scale: 0.5}, 1: {scale: 1}});
      textRef.current.animate({0: {scale: 0.5}, 1: {scale: 1}});
    } else {
      viewRef.current.animate({0: {scale: 1}, 1: {scale: 0.9}});
      textRef.current.animate({0: {scale: 1}, 1: {scale: 0.5}});
    }
  }, [focused]);

  return (
    <Pressable
      onPress={onPress}
      style={{
        flex: focused ? 1 : 0.8,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Animatable.View
          ref={viewRef}
          style={{
            backgroundColor: focused ? TabsClr.alphaClr : TabsClr.primary,
            borderRadius: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 8,
              backgroundColor: focused ? null : TabsClr.primary,
            }}>
            <Icon
              type={TabArr[item].type}
              name={TabArr[item].name}
              color={focused ? TabsClr.inFocus : TabsClr.OutOfFocus}
            />
            <Animatable.View ref={textRef}>
              {focused && (
                <Text style={{color: TabsClr.inFocus, paddingHorizontal: 4}}>
                  {TabArr[item].label}
                </Text>
              )}
            </Animatable.View>
          </View>
        </Animatable.View>
      </View>
    </Pressable>
  );
};

export default CustomTabsBtn;
