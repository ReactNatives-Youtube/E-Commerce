// Search Modal
import React, {useEffect, useRef} from 'react';
import {Animated, Modal} from 'react-native';
import SearchBtn from './SearchBar';

const SearchModal = ({visible, showModal}) => {
  // Animation scale value
  const scaleValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (visible) {
      // Open animation
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      //Close animation
      Animated.spring(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);
  return (
    <Modal transparent visible={visible}>
      <Animated.View style={{flex: 1, transform: [{scale: scaleValue}]}}>
        <SearchBtn goBack={showModal} />
      </Animated.View>
    </Modal>
  );
};

export default SearchModal;
