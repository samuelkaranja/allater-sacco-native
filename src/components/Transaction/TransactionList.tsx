import React from 'react';
import {ScrollView} from 'react-native';
import TransactionItem from './TransactionItem';

const TransactionList: React.FC = () => {
  return (
    <ScrollView>
      <TransactionItem
        title="Top up"
        time="Today 1:53 PM"
        amount={100.0}
        type="Deposit"
        isPositive={true}
      />
      <TransactionItem
        title="Transfer"
        time="Today 2:33 PM"
        amount={-500.0}
        type="Send"
        isPositive={false}
      />
      <TransactionItem
        title="Received"
        time="Today 3:32 PM"
        amount={50.0}
        type="Deposit"
        isPositive={true}
      />
    </ScrollView>
  );
};

export default TransactionList;
