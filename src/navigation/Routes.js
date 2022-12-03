import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NewsStack from './NewsStack';

export default function Routes() {
  return (
    <NavigationContainer>
      <NewsStack />
    </NavigationContainer>
  );
}
