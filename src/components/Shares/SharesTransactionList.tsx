import React from 'react';
import {FlatList, Text} from 'react-native';
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
    <>
      <FlatList
        data={transactions}
        keyExtractor={(item, index) => item.createdAt + index}
        renderItem={({item}) => (
          <SharesTransactionItem
            type={item.type}
            amount={item.amount}
            status={item.status}
            createdAt={item.createdAt}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
      {transactions.length === 0 && (
        <Text style={{textAlign: 'center', color: 'black'}}>
          No transactions found
        </Text>
      )}
    </>
  );
};

export default SharesTransactionList;
