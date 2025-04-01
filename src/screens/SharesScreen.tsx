import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SharesScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Shares Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SharesScreen;
