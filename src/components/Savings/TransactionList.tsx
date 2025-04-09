import React from 'react';
import {FlatList, Text} from 'react-native';
import TransactionItem from './TransactionItem';
import {SavingsTransaction} from './types';

type Props = {
  transactions: SavingsTransaction[];
};

const TransactionList: React.FC<Props> = ({transactions}) => (
  <FlatList
    data={transactions.filter(t => t != null)}
    renderItem={({item}) => <TransactionItem transaction={item} />}
    keyExtractor={(_, index) => index.toString()}
    ListEmptyComponent={
      <Text
        style={{
          textAlign: 'center',
          marginTop: 70,
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        No Transactions!!
      </Text>
    }
  />
);

export default TransactionList;
