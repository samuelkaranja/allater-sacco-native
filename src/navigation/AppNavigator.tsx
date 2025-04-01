import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DrawerNavigator from './DrawerNavigator';
import LoansScreen from '../screens/LoansScreen';

export type RootStackParamList = {
  Welcome: undefined;
  OnBoarding: undefined;
  Register: undefined;
  Login: undefined;
  Home: undefined;
  Search: undefined;
  Transact: undefined;
  Account: undefined;
  MainApp: undefined;
  Loan: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="OnBoarding" component={OnboardingScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Loan" component={LoansScreen} />

      <Stack.Screen name="Home" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
