import React from 'react';
import {ScrollView, View} from 'react-native';
import SharesTransactionItem from './SharesTransactionItem';

interface SharesTransaction {
  type: string;
  amount: number;
  status: string;
  createdAt: string;
}

interface SharesTransactionListProps {
  transactions: SharesTransaction[];
}

const SharesTransactionList: React.FC<SharesTransactionListProps> = ({
  transactions,
}) => {
  return (
    <ScrollView>
      {transactions.map((transaction, index) => (
        <SharesTransactionItem
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

export default SharesTransactionList;
