import React from 'react';
import {ScrollView, View} from 'react-native';
import AllTransactionsItem from './AllTransactionsItem';

const AllTransactionsList: React.FC = () => {
  return (
    <ScrollView>
      <AllTransactionsItem />
    </ScrollView>
  );
};

export default AllTransactionsList;
