import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import StackScreen1 from './StackScreen1';
import StackScreen2 from './StackScreen2';

export type StackParamsList = {
  StackScreen1: undefined;
  StackScreen2: {
    itemId: number;
  };
};

const Stack = createStackNavigator<StackParamsList>();

const StackNavigationDemo: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{title: 'Stack Screen One'}}
        name="StackScreen1"
        component={StackScreen1}
      />
      <Stack.Screen
        options={({route}) => ({
          title: `Item ${route.params.itemId}`,
        })}
        name="StackScreen2"
        component={StackScreen2}
      />
    </Stack.Navigator>
  );
};

export default StackNavigationDemo;
