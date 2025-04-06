import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const SharesSummaryCard: React.FC = () => (
  <View style={styles.card}>
    <Text style={styles.label}>Number of Shares:</Text>
    <Text style={styles.value}>10000</Text>
    <View style={styles.worth}>
      <View>
        <Text style={styles.label}>Worth:</Text>
        <Text style={styles.value}>Ksh 1,000,000</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Buy Shares</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#DAA520',
    borderRadius: 12,
    padding: 16,
    margin: 16,
  },

  worth: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
  },

  label: {
    color: '#fff',
  },

  value: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },

  button: {
    marginTop: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
  },

  buttonText: {color: '#000'},
});

export default SharesSummaryCard;
