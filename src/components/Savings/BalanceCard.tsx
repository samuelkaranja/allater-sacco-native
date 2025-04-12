import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const BalanceCard = () => (
  <View style={styles.card}>
    <Text style={styles.label}>Current Balance</Text>
    <Text style={styles.amount}>
      <Text style={{fontSize: 15}}>Ksh</Text>
      123,456.00
    </Text>
    <View style={styles.section}>
      <Text style={styles.account}>Acc: 1234 5678 9012</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SAVE NOW</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#27ae60',
    borderRadius: 12,
    padding: 20,
    margin: 16,
  },

  label: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },

  amount: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  account: {
    color: '#fff',
    fontWeight: 500,
    marginTop: 8,
  },

  button: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginTop: 10,
  },

  buttonText: {
    color: '#27ae60',
    fontWeight: '600',
  },
});

export default BalanceCard;
