import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import BusinessComp from '../components/screens/BusinessComp';
import HealthComp from '../components/screens/HealthComp';
import SportsComp from '../components/screens/SportsComp';
import TechComp from '../components/screens/TechComp';
import All from '../components/screens/All';
import { Icon } from 'react-native-elements/dist/icons/Icon';
const Tab = createBottomTabNavigator();


export default function BottomNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="All" component={All} options={{
            tabBarIcon: (props) => (
              <Icon type='feather' name='home' color={props.color} />
            ),
          }} />
        <Tab.Screen name="Business" component={BusinessComp} options={{
            tabBarIcon: (props) => (
              <Icon type='feather' name='dollar-sign' color={props.color} />
            ),
          }}/>
        <Tab.Screen name="Health" component={HealthComp} options={{
            tabBarIcon: (props) => (
              <Icon type='feather' name='heart' color={props.color} />
            ),
          }}/>
        <Tab.Screen name="Sports" component={SportsComp} options={{
            tabBarIcon: (props) => (
              <Icon type='ionicon' name='football' color={props.color} />
            ),
          }}/>
        <Tab.Screen name="Technology" component={TechComp} options={{
            tabBarIcon: (props) => (
              <Icon type='ionicon' name='hardware-chip-outline' color={props.color} />
            ),
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}


