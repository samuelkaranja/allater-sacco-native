import React from 'react';
import {FlatList} from 'react-native';
import TransactionItem from './TransactionItem';
import {Transaction} from './types';

type Props = {
  transactions: Transaction[];
};

const TransactionList: React.FC<Props> = ({transactions}) => (
  <FlatList
    data={transactions}
    renderItem={({item}) => <TransactionItem transaction={item} />}
    keyExtractor={(_, index) => index.toString()}
  />
);

export default TransactionList;
