import React from 'react';
import {StyleSheet} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

function App(): React.JSX.Element {
  return (
    <>
      <Provider store={store}>
        <GestureHandlerRootView style={{flex: 1}}>
          <AppNavigator />
        </GestureHandlerRootView>
      </Provider>
      <Toast />
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
