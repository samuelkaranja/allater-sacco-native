import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TransactScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Transact Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TransactScreen;
