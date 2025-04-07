// navigation/HomeStackNavigator.tsx
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoansScreen from '../screens/LoansScreen';
import {HomeStackParamList} from './type/navigationTypes';
import SharesScreen from '../screens/SharesScreen';
import ContactScreen from '../screens/ContactScreen';
import InvestingScreen from '../screens/InvestingScreen';
import LocateScreen from '../screens/LocateScreen';
import AboutScreen from '../screens/AboutScreen';
import FaqScreen from '../screens/FaqScreen';

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="Shares" component={SharesScreen} />
      <Stack.Screen name="Loan" component={LoansScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
      <Stack.Screen name="Investing" component={InvestingScreen} />
      <Stack.Screen name="Locate" component={LocateScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Faq" component={FaqScreen} />
      {/* Add other screens here */}
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
