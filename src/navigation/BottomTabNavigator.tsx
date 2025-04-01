import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import TransactScreen from '../screens/TransactScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();
const CustomHeaderLeft = ({
  navigation,
}: {
  navigation: DrawerNavigationProp<any>;
}) => (
  <TouchableOpacity
    onPress={() => navigation.openDrawer()}
    style={{marginLeft: 15}}>
    <Icon name="bars" size={24} color="#000" />
  </TouchableOpacity>
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Search') iconName = 'search';
          else if (route.name === 'Transact') iconName = 'credit-card';
          else if (route.name === 'Account') iconName = 'user';
          return (
            <Icon name={iconName || 'help-circle'} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {height: 60, paddingBottom: 5},
        headerLeft: () => {
          const drawerNavigation =
            navigation.getParent<DrawerNavigationProp<any>>();
          return drawerNavigation ? (
            <CustomHeaderLeft navigation={drawerNavigation} />
          ) : null;
        }, // Add hamburger menu
        headerTitleAlign: 'center',
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Transact" component={TransactScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
