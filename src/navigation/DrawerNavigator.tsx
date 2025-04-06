import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabs from './BottomTabs';
import CustomDrawerContent from '../components/Navigation/CustomDrawerContent';
import {DrawerParamList} from './type/navigationTypes';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Tabs" component={BottomTabs} />

      {/* <Drawer.Screen name="Home" component={HomeScreen} /> */}

      {/* <Drawer.Screen name="Contact Info" component={HomeScreen} />
      <Drawer.Screen name="FAQs" component={HomeScreen} />
      <Drawer.Screen name="About Us" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={HomeScreen} />
      <Drawer.Screen name="Help" component={HomeScreen} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
