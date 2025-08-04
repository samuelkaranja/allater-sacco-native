import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TransactScreen from '../screens/TransactScreen';
import SavingsScreen from '../screens/SavingsScreen';
import SharesScreen from '../screens/SharesScreen';
import AccountScreen from '../screens/AccountScreen';
import HomeScreen from '../screens/HomeScreen';
import {BottomTabParamList} from './type/navigationTypes';
import HomeStackNavigator from './HomeStackNavigator';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Savings') iconName = 'card';
          else if (route.name === 'Shares') iconName = 'card';
          // else if (route.name === 'Transact') iconName = 'card';
          else if (route.name === 'Profile') iconName = 'person';
          else iconName = 'ellipse-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Savings" component={SavingsScreen} />
      <Tab.Screen name="Shares" component={SharesScreen} />
      {/* <Tab.Screen name="Transact" component={TransactScreen} /> */}
      <Tab.Screen name="Profile" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
