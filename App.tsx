import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import RootNavigator from './src/screens/RootNavigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
