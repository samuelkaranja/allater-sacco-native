import React from 'react';
import {StyleSheet} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
