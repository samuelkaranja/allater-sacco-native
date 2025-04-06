import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Transaction} from './types';

type Props = {
  transaction: Transaction;
};

const TransactionItem: React.FC<Props> = ({transaction}) => {
  const color = transaction.type === 'Sell' ? 'red' : 'green';

  return (
    <View style={styles.item}>
      <View style={styles.itemCard}>
        <View>
          <Text>{transaction.type}</Text>
          <Text>{transaction.account}</Text>
        </View>
        <View>
          <Text style={{color}}>{transaction.amount}</Text>
          <Text>{transaction.date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 3,
    borderBottomWidth: 1,
    borderColor: '#eee',
    borderStyle: 'solid',
  },

  itemCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
});

export default TransactionItem;
