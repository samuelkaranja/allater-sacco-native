import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackParamsList} from './StackNavigationDemo';

type StackScreen1NavigationProp = StackNavigationProp<
  StackParamsList,
  'StackScreen1'
>;

const StackScreen1: React.FC = () => {
  const navigation = useNavigation<StackScreen1NavigationProp>();

  return (
    <View>
      <Text>Stack Screen 1</Text>
      <Button
        onPress={() => navigation.navigate('StackScreen2', {itemId: 100})}
        title="Go To Stack Screen 2"
      />
    </View>
  );
};

export default StackScreen1;
