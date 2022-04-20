import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import BusinessComp from '../news-feed-react-native-main/components/screens/BusinessComp';
import HealthComp from '../news-feed-react-native-main/components/screens/HealthComp';
import SportsComp from '../news-feed-react-native-main/components/screens/SportsComp';
import TechComp from '../news-feed-react-native-main/components/screens/TechComp';
import All from '../news-feed-react-native-main/components/screens/All';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { StatusBar } from 'react-native';
import { View,TextInput } from 'react-native';
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <StatusBar backgroundColor="#1e1e1f"/>
    <View style={{backgroundColor:'#1e1e1f'}}>
      <View style={{padding:5}}>
      <TextInput style={{color:'white',backgroundColor:'rgba(98, 96, 97, 0.48)',padding:15,margin:10,borderRadius:40,alignItems:'center'}} placeholder="Search" placeholderTextColor={'rgba(255, 251, 253, 1)'}/>
      </View>
    </View>
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#f0edf6"
    inactiveColor="#7E7D7D"
    barStyle={{ backgroundColor: '#232121' }}>
      <Tab.Screen name="All" component={All} options={{
          tabBarIcon: (props) => (
            <Icon type='ionicon' name='home' color={props.color} />
          ),
        }} />
      <Tab.Screen name="Business" component={BusinessComp} options={{
          tabBarIcon: (props) => (
            <Icon type='feather' name='dollar-sign' color={props.color} />
          ),
        }}/>
      <Tab.Screen name="Health" component={HealthComp} options={{
          tabBarIcon: (props) => (
            <Icon type='ionicon' name='heart-sharp' color={props.color} />
          ),
        }}/>
      <Tab.Screen name="Sports" component={SportsComp} options={{
          tabBarIcon: (props) => (
            <Icon type='ionicon' name='football' color={props.color} />
          ),
        }}/>
      <Tab.Screen name="Technology" component={TechComp} options={{
          tabBarIcon: (props) => (
            <Icon type='ionicon' name='hardware-chip-sharp' color={props.color} />
          ),
        }}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
}


