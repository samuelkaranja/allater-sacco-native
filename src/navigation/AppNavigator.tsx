import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DrawerNavigator from './DrawerNavigator';
import {RootStackParamList} from './type/navigationTypes';
import LoanScreen from '../screens/LoansScreen';
import {useAuthBootstrap} from '../hooks/useAuthBootstrap';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const {loading} = useAuthBootstrap();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  // if (loading) {
  //   return <SplashScreen />;
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="OnBoarding" component={OnboardingScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainApp" component={DrawerNavigator} />
        <Stack.Screen name="Loan" component={LoanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
