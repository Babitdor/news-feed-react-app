import {View, Text, StyleSheet, Image, useColorScheme} from 'react-native';
import React from 'react';
import Home from 'react-native-vector-icons/AntDesign';
import Search from 'react-native-vector-icons/AntDesign';
import Bookmark from 'react-native-vector-icons/Feather';
export default function BottomTab() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Home
          size={25}
          color={isDarkMode ? 'white' : 'black'}
          name="home"
          style={{marginRight: 10}}
        />
        <Text
          style={{color: isDarkMode ? 'white' : 'black', fontWeight: 'bold'}}>
          Home
        </Text>
      </View>
      <View>
        <Search
          size={25}
          color={isDarkMode ? 'white' : 'black'}
          name="search1"
          style={{marginRight: 10}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Bookmark
          size={25}
          color={isDarkMode ? 'white' : 'black'}
          name="bookmark"
          style={{marginRight: 25}}
        />
        <Image
          style={{width: 32, height: 32, borderRadius: 50}}
          source={{
            uri: 'https://www.kpoppost.com/wp-content/uploads/2021/04/152c388421d57f15acaa0a2bdf0a932e-2-670x570.jpg',
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    padding: 15,
    alignItems: 'center',
    borderRadius: 30,
    marginVertical: 10,
  },
});
