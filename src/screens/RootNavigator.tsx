import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import FlatListScreen from './FlatListScreen';
import SectionListScreen from './SectionListScreen';
import TouchableScreen from './TouchableScreen';
import ModalScreen from './ModalScreen';

export type RootStackParamList = {
  Home: undefined;
  FlatListDemo: undefined;
  SectionListDemo: undefined;
  TouchableDemo: undefined;
  ModalDemo: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="FlatListDemo" component={FlatListScreen} />
      <Stack.Screen name="SectionListDemo" component={SectionListScreen} />
      <Stack.Screen name="TouchableDemo" component={TouchableScreen} />
      <Stack.Screen name="ModalDemo" component={ModalScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
