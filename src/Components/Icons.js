// Reusable Component for Icons
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
export const Icons = {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Feather,
  FontAwesome5,
  Entypo,
};

const Icon = ({type, name, color, size = 24, style, onPress}) => {
  const fontSize = 24;
  const Tag = type;
  return (
    <>
      {type && name && (
        <Tag
          name={name}
          size={size || fontSize}
          color={color}
          style={style}
          onPress={onPress}
        />
      )}
    </>
  );
};

export default Icon;
