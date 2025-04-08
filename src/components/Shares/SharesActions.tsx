import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SharesActions = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button}>
      <Icon name="money" size={25} color={'black'} style={styles.icon} />
      <Text style={styles.iconText}>Sell Shares</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button}>
      <Icon name="exchange" size={25} color={'black'} style={styles.icon} />
      <Text style={styles.iconText}>Transfer Shares</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button}>
      <Icon name="credit-card" size={25} color={'black'} style={styles.icon} />
      <Text style={styles.iconText}>Buy Shares</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },

  button: {
    padding: 8,
    alignItems: 'center',
  },

  icon: {
    marginBottom: 5,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 13,
  },

  iconText: {
    fontSize: 13,
    color: '#333',
  },
});

export default SharesActions;
