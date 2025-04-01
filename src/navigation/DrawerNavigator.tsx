import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import CustomDrawer from '../components/Navigation/CustomDrawer';
// import SettingsScreen from '../screens/SettingsScreen';
// import HelpScreen from '../screens/HelpScreen';
// import AboutScreen from '../screens/AboutScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#ffffff',
        drawerActiveTintColor: '#2D8D4E',
        drawerInactiveTintColor: '#fff',
      }}>
      {/* BottomTabNavigator inside Drawer */}
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          drawerIcon: ({color}) => <Icon name="home" size={20} color={color} />,
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="Settings"
        component={HomeScreen}
        options={{
          drawerIcon: ({color}) => <Icon name="cog" size={20} color={color} />,
        }}
      />

      <Drawer.Screen
        name="Help"
        component={HomeScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="info-circle" size={20} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="About Us"
        component={HomeScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="users" size={20} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
