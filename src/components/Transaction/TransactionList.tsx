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
      {/* <TransactionItem
        status="Top up"
        createdAt="Today 1:53 PM"
        amount={100.0}
        type="Deposit"
      />
      <TransactionItem
        status="Transfer"
        createdAt="Today 2:33 PM"
        amount={-500.0}
        type="Send"
      />
      <TransactionItem
        status="Received"
        createdAt="Today 3:32 PM"
        amount={50.0}
        type="Deposit"
      /> */}
    </ScrollView>
  );
};

export default TransactionList;
