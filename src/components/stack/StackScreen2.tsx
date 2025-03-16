import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamsList} from './StackNavigationDemo';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

type StackScreen2NavigationProp = StackNavigationProp<
  StackParamsList,
  'StackScreen2'
>;

type StackScreenRouteProp = RouteProp<StackParamsList, 'StackScreen2'>;

const StackScreen2: React.FC = () => {
  const navigation = useNavigation<StackScreen2NavigationProp>();
  const route = useRoute<StackScreenRouteProp>();

  return (
    <View>
      <Text>Stack Screen 2</Text>
      <Text>Item ID : {route.params.itemId}</Text>
      <Button
        title="Go Back to Stack Button 1"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default StackScreen2;
