import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const actions = ['Sell Shares', 'Transfer Shares', 'Buy Shares'];

const SharesActions = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button}>
      <Text>Sell Shares</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button}>
      <Text>Transfer Shares</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button}>
      <Text>Buy Shares</Text>
    </TouchableOpacity>
    {actions.map((action, idx) => (
      <TouchableOpacity key={idx} style={styles.button}>
        <Text>{action}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
  },

  button: {
    alignItems: 'center',
    padding: 10,
  },
});

export default SharesActions;
