import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  balance: number;
  accountNumber: string;
}

const BalanceCard: React.FC<Props> = ({balance, accountNumber}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Account balance</Text>
      <Text style={styles.balance}>
        <Text style={styles.currency}>Kshs</Text>
        {balance.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Text>
      <Text style={styles.account}>{accountNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '95%',
    backgroundColor: '#27ae60',
    borderRadius: 16,
    padding: 35,
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#fff',
  },
  balance: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#fff',
  },
  currency: {
    fontSize: 15,
  },
  account: {
    fontSize: 12,
    color: '#fff',
  },
});

export default BalanceCard;
