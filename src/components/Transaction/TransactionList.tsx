import React from 'react';
import {ScrollView} from 'react-native';
import TransactionItem from './TransactionItem';

interface Transaction {
  amount: number;
  status: string;
  type: string;
  createdAt: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({transactions}) => {
  return (
    <ScrollView>
      {transactions.map((transaction, index) => (
        <TransactionItem
          key={index}
          status={transaction.status}
          createdAt={transaction.createdAt}
          amount={transaction.amount}
          type={transaction.type}
        />
      ))}
    </ScrollView>
  );
};

export default TransactionList;
