import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, View} from 'react-native';
import TabScreen1 from './TabScreen1';
import TabScreen2 from './TabScreen2';
import TabScreen3 from './TabScreen3';
import TabScreen4 from './TabScreen4';

type BottomTabParamsList = {
  TabScreen1: undefined;
  TabScreen2: undefined;
  TabScreen3: undefined;
  TabScreen4: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamsList>();

const TabNavigationDemo: React.FC = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="TabScreen1" component={TabScreen1} />
      <BottomTab.Screen name="TabScreen2" component={TabScreen2} />
      <BottomTab.Screen name="TabScreen3" component={TabScreen3} />
      <BottomTab.Screen name="TabScreen4" component={TabScreen4} />
    </BottomTab.Navigator>
  );
};

export default TabNavigationDemo;
