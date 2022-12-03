import React from 'react';
import {Easing} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import NewsScreen from '../screens/NewsScreen';
import NewsDescription from '../screens/NewsDescription';


export default function NewsStack() {
  const Stack = createStackNavigator();

  const config = {
    animation: 'Spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  const closeConfig = {
    animation: 'Timing',
    config: {
      duration: 500,
      easing: Easing.linear,
    },
  };

  const screenOptions = {
    headerShown: false,
    CardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS,
    transitionSpec: {
      open: config,
      close: closeConfig,
    },
  };

  const forFade = ({current, closing}) => ({
    cardStyle: {
      backgroundColor: 'black',
      opacity: current.progress,
      presentaion: 'modal',
    },
  });
  return (
    <>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={NewsScreen}
          options={{cardStyleInterpolator: forFade}}
        />
        <Stack.Screen
          name="NewsDescription"
          component={NewsDescription}
          options={{cardStyleInterpolator: forFade}}
        />
      </Stack.Navigator>
    </>
  );
}
