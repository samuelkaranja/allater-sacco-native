import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface TransactionItemProps {
  type: 'Deposit' | 'Withdraw';
  transfer: string;
  amount: number;
  date: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  type,
  transfer,
  amount,
  date,
}) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.type}>{type}</Text>
        <Text style={styles.transfer}>{transfer}</Text>
      </View>

      <View>
        <Text
          style={[
            styles.amount,
            type === 'Withdraw' ? styles.withdraw : styles.deposit,
          ]}>
          {type === 'Withdraw'
            ? `-Ksh ${amount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`
            : `+Ksh ${amount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`}
        </Text>
        <Text style={styles.date}>{date}</Text>
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
    fontWeight: 400,
  },

  transfer: {
    fontSize: 14,
    fontWeight: 400,
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
