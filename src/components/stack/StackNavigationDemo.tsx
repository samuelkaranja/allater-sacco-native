import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import StackScreen1 from './StackScreen1';
import StackScreen2 from './StackScreen2';

const Stack = createStackNavigator();

const StackNavigationDemo: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{title: 'Stack Screen One'}}
        name="StackScreen1"
        component={StackScreen1}
      />
      <Stack.Screen name="StackScreen2" component={StackScreen2} />
    </Stack.Navigator>
  );
};

export default StackNavigationDemo;
