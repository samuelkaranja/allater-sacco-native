// navigation/HomeStackNavigator.tsx
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoansScreen from '../screens/LoansScreen';
import {HomeStackParamList} from './type/navigationTypes';
import SharesScreen from '../screens/SharesScreen';

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="Shares" component={SharesScreen} />
      <Stack.Screen name="Loan" component={LoansScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
