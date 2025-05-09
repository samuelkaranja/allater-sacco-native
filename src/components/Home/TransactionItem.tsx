import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface TransactionItemProps {
  type: string;
  status: string;
  amount: number;
  createdAt: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  type,
  status,
  amount,
  createdAt,
}) => {
  const formattedDate = new Date(createdAt).toLocaleString();

  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.type}>{type}</Text>
        <Text style={styles.transfer}>{status}</Text>
      </View>

      <View>
        <Text
          style={[
            styles.amount,
            type === 'WITHDRAW' ? styles.withdraw : styles.deposit,
          ]}>
          {type === 'WITHDRAW'
            ? `-Ksh ${amount.toFixed(2)}`
            : `+Ksh ${amount.toFixed(2)}`}
        </Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  type: {
    fontSize: 14,
    fontWeight: 500,
  },

  transfer: {
    fontSize: 13,
    fontWeight: 400,
    color: '#666',
  },

  amount: {
    fontSize: 14,
  },

  deposit: {
    color: 'green',
  },

  withdraw: {
    color: 'red',
  },

  date: {
    fontSize: 13,
    color: '#888',
    textAlign: 'right',
  },
});

export default TransactionItem;
