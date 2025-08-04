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
import WithdrawScreen from '../screens/WithdrawScreen';
import SavingsScreen from '../screens/SavingsScreen';
import SaveMoneyScreen from '../screens/SaveMoneyScreen';
import ProfileInfoScreen from '../screens/ProfileInfoScreen';
import NextOfKinScreen from '../screens/NextOfKinScreen';
import BuySharesScreen from '../screens/BuySharesScreen';

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      {/* <Stack.Screen name="Savings" component={SavingsScreen} />
      <Stack.Screen name="Shares" component={SharesScreen} /> */}
      <Stack.Screen name="Loan" component={LoansScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
      <Stack.Screen name="Investing" component={InvestingScreen} />
      <Stack.Screen name="Locate" component={LocateScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Faq" component={FaqScreen} />
      <Stack.Screen name="Save" component={SaveMoneyScreen} />
      <Stack.Screen name="Withdraw" component={WithdrawScreen} />
      <Stack.Screen name="Member" component={ProfileInfoScreen} />
      <Stack.Screen name="Kin" component={NextOfKinScreen} />
      <Stack.Screen name="BuyShares" component={BuySharesScreen} />
      {/* Add other screens here */}
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
