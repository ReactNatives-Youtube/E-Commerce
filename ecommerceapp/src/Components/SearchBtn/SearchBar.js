import React, {useState} from 'react';
import {TextInput, View, Keyboard} from 'react-native';
import Icon, {Icons} from '../Icons';
import SearchList from './SearchList';

const SearchBar = ({goBack}) => {
  const [searchPhrase, setSearchPhrase] = useState('');
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 8,
        backgroundColor: '#fff',
      }}>
      {/* Search Bar */}
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {/* Back btn -> to return back to home screen*/}
        <Icon
          type={Icons.Ionicons}
          name="arrow-back"
          color="#000"
          onPress={() => {
            Keyboard.dismiss();
            goBack(false);
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#d9dbda',
            alignItems: 'center',
            width: '95%',
            borderRadius: 20,
            paddingHorizontal: 4,
          }}>
          {/* Input field */}
          <TextInput
            style={{fontSize: 20, marginLeft: 10, width: '90%'}}
            placeholder="Search"
            value={searchPhrase}
            onChangeText={setSearchPhrase}
          />
          {/* cross Icon, depending on whether the search bar is clicked or not */}
          {searchPhrase.length != '' && (
            <Icon
              type={Icons.Entypo}
              name="cross"
              onPress={() => setSearchPhrase('')}
            />
          )}
        </View>
      </View>
      {/* Search List */}
      <SearchList phrase={searchPhrase} />
    </View>
  );
};

export default SearchBar;
