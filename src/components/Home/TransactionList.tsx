import React, {useState, useEffect} from 'react';
import {View, Button, FlatList, Text} from 'react-native';
import TransactionItem from './TransactionItem';

interface Transaction {
  amount: number;
  status: string;
  type: string;
  createdAt: string;
}

interface Pagination {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

interface Props {
  transactions: Transaction[];
  pagination: Pagination;
}

const TransactionList: React.FC<Props> = ({transactions, pagination}) => {
  const [currentPage, setCurrentPage] = useState(pagination.page);
  const [currentItems, setCurrentItems] = useState<Transaction[]>([]);

  const {pageSize, totalPages} = pagination;

  useEffect(() => {
    const startIdx = (currentPage - 1) * pageSize;
    const endIdx = startIdx + pageSize;
    setCurrentItems(transactions.slice(startIdx, endIdx));
  }, [currentPage, transactions, pageSize]);

  const goNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const goPrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  //   const startIdx = (currentPage - 1) * pagination.pageSize;
  //   const currentItems = transactions.slice(
  //     startIdx,
  //     startIdx + pagination.pageSize,
  //   );

  //   const goNext = () => {
  //     if (currentPage < pagination.totalPages) setCurrentPage(prev => prev + 1);
  //   };

  //   const goPrev = () => {
  //     if (currentPage > 1) setCurrentPage(prev => prev - 1);
  //   };

  return (
    <View>
      <FlatList
        data={currentItems}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <TransactionItem
            type={item.type}
            status={item.status}
            amount={item.amount}
            createdAt={item.createdAt}
          />
        )}
      />

      {totalPages > 1 && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Button
            title="Previous"
            onPress={goPrev}
            disabled={currentPage === 1}
          />
          <Text>
            Page {currentPage} of {totalPages}
          </Text>
          <Button
            title="Next"
            onPress={goNext}
            disabled={currentPage === totalPages}
          />
        </View>
      )}
    </View>
  );
};

export default TransactionList;
