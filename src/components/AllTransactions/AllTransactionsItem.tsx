import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const AllTransactionsItem: React.FC = () => {
  return (
    <></>
    // <View style={styles.container}>
    //   <View style={styles.details}>
    //     <Text style={styles.title}>{type}</Text>
    //     <Text style={styles.time}>{formattedDate}</Text>
    //   </View>
    //   <View style={styles.amountContainer}>
    //     <Text
    //       style={[
    //         styles.amount,
    //         type === 'WITHDRAW' ? styles.withdraw : styles.deposit,
    //       ]}>
    //       <Text style={styles.currency}>Kshs</Text>
    //       {amount.toFixed(2)}
    //     </Text>
    //     <Text style={[styles.type, getStatusStyle()]}>
    //       <Text style={{fontSize: 10}}>Status</Text>: {status}
    //     </Text>
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F4F6FC',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    marginBottom: 10,
  },

  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  details: {
    flex: 1,
  },

  title: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1E1E1E',
  },

  time: {
    fontSize: 10,
    color: '#7E8A9A',
    paddingTop: 5,
  },

  amountContainer: {
    alignItems: 'flex-end',
  },

  amount: {
    fontSize: 14,
    fontWeight: '600',
  },

  currency: {
    fontSize: 12,
    color: '#000',
  },

  type: {
    fontSize: 11,
    color: '#7E8A9A',
    paddingTop: 5,
  },

  deposit: {
    color: 'green',
  },

  withdraw: {
    color: 'red',
  },
});

export default AllTransactionsItem;
