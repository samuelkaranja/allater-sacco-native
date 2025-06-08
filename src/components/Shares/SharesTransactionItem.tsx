import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

interface SharesTransactionItemProps {
  type: string;
  status: string;
  amount: number;
  createdAt: string;
}

const SharesTransactionItem: React.FC<SharesTransactionItemProps> = ({
  type,
  status,
  amount,
  createdAt,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.title}>{type}</Text>
        <Text style={styles.type}>{status}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>
          <Text style={styles.currency}>Kshs </Text>
          {amount.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Text>
        <Text style={styles.time}>{createdAt}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F4F6FC',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    marginBottom: 8,
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
    fontSize: 14,
    fontWeight: '600',
    color: '#1E1E1E',
  },

  time: {
    fontSize: 11,
    color: '#000',
    paddingTop: 5,
  },

  amountContainer: {
    alignItems: 'flex-end',
    paddingTop: 5,
  },

  amount: {
    fontSize: 14,
    fontWeight: '500',
    color: 'green',
  },

  currency: {
    fontSize: 11,
    color: '#000',
  },

  type: {
    fontSize: 12,
    color: '#000',
    paddingTop: 5,
  },

  deposit: {
    color: 'green',
  },

  withdraw: {
    color: 'red',
  },

  statusPending: {
    color: 'orange',
  },

  statusSuccess: {
    color: 'green',
  },

  statusFailed: {
    color: 'orange',
  },

  statusInsufficient: {
    color: 'purple',
  },

  statusCancelled: {
    color: 'red',
  },
});

export default SharesTransactionItem;
