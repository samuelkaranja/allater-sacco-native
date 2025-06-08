import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import SavingsTransactionItem from './SavingsTransactionItem';

interface SavingsTransaction {
  type: string;
  amount: number;
  status: string;
  createdAt: string;
}

interface SavingsTransactionListProps {
  transactions: SavingsTransaction[];
}

const SavingsTransactionList: React.FC<SavingsTransactionListProps> = ({
  transactions,
}) => {
  return (
    <ScrollView>
      {transactions.map((transaction, index) => (
        <SavingsTransactionItem
          key={index}
          type={transaction.type}
          amount={transaction.amount}
          status={transaction.status}
          createdAt={transaction.createdAt}
        />
      ))}
    </ScrollView>
  );
};

export default SavingsTransactionList;
