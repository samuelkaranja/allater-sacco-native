import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabs from './BottomTabs';
import CustomDrawerContent from '../components/Navigation/CustomDrawerContent';
import {DrawerParamList} from './type/navigationTypes';
import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: 'rgba(27, 151, 79, 1)', // Use a single valid color value
        },
        drawerActiveTintColor: '#ffffff', // active item text color
        drawerInactiveTintColor: '#ffffff', // inactive item text color
      }}>
      <Drawer.Screen
        name="Home"
        component={BottomTabs}
        options={{
          drawerIcon: ({color}) => <Icon name="home" size={17} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
