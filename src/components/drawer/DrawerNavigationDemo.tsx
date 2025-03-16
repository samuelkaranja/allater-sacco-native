import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import React from 'react';
import {Text, View} from 'react-native';

type DrawerParamList = {
  DrawerScreen1: undefined;
  DrawerScreen2: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerScreen1Props = {
  navigation: DrawerNavigationProp<DrawerParamList, 'DrawerScreen1'>,
};

const DrawerScreen2Props = {
  navigation: DrawerNavigationProp<DrawerParamList, 'DrawerScreen2'>,
};

const DrawerScreen1: React.FC = () => {
  <View>
    <Text>Drawer Screen 1</Text>
  </View>;
};

const DrawerScreen2: React.FC = () => {
  <View>
    <Text>Drawer Screen 2</Text>
  </View>;
};

const DrawerNavigationDemo: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="DrawerScreen1" component={DrawerScreen1} />
      <Drawer.Screen name="DrawerScreen2" component={DrawerScreen2} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigationDemo;
