import {DrawerNavigationProp} from '@react-navigation/drawer';
import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {HomeStackParamList} from '../navigation/type/navigationTypes';
import SharesSummaryCard from '../components/Shares/SharesSummaryCard';
import SharesActions from '../components/Shares/SharesActions';
import TransactionFilterTabs from '../components/Shares/TransactionFilterTabs';
import {Transaction} from '../components/Shares/types';
import TransactionList from '../components/Shares/TransactionList';
import Header from '../components/Header/Header';
import useTransactionFilter from '../hooks/useTransactionFilter';

type LoansScreenNavigationProps = DrawerNavigationProp<
  HomeStackParamList,
  'Shares'
>;

interface Props {
  navigation: LoansScreenNavigationProps;
}

const allTransactions: Transaction[] = [
  {
    type: 'Buy',
    account: 'Savings - Shares',
    amount: '+Ksh 123,456.00',
    date: '2025-04-06',
  },
  {
    type: 'Sell',
    account: 'Shares - Savings',
    amount: '-Ksh 123,456.00',
    date: '2025-04-01',
  },
  {
    type: 'Transfer',
    account: 'Savings to Shares',
    amount: '+Ksh 123,456.00',
    date: '2025-03-28',
  },
  {
    type: 'Transfer',
    account: 'Savings to Shares',
    amount: '+Ksh 123,456.00',
    date: '2025-03-02',
  },
  {
    type: 'Buy',
    account: 'Savings - Shares',
    amount: '+Ksh 123,456.00',
    date: '2025-04-06',
  },
  {
    type: 'Sell',
    account: 'Shares - Savings',
    amount: '-Ksh 123,456.00',
    date: '2025-04-01',
  },
  {
    type: 'Transfer',
    account: 'Savings to Shares',
    amount: '+Ksh 123,456.00',
    date: '2025-03-28',
  },
  {
    type: 'Transfer',
    account: 'Savings to Shares',
    amount: '+Ksh 123,456.00',
    date: '2025-03-02',
  },
  {
    type: 'Buy',
    account: 'Savings - Shares',
    amount: '+Ksh 123,456.00',
    date: '2025-04-06',
  },
  {
    type: 'Sell',
    account: 'Shares - Savings',
    amount: '-Ksh 123,456.00',
    date: '2025-04-01',
  },
  {
    type: 'Transfer',
    account: 'Savings to Shares',
    amount: '+Ksh 123,456.00',
    date: '2025-03-28',
  },
  {
    type: 'Transfer',
    account: 'Savings to Shares',
    amount: '+Ksh 123,456.00',
    date: '2025-03-02',
  },
];

const SharesScreen: React.FC<Props> = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState('All');
  const filteredTransactions = useTransactionFilter(
    allTransactions,
    selectedTab,
  );
  return (
    <View style={styles.container}>
      {/* Top Bar with Hamburger Menu */}
      <Header navigation={navigation} />

      {/* Main Content */}
      <Text style={styles.title}>Your Shares</Text>
      <SharesSummaryCard />

      <SharesActions />

      <Text style={styles.history}>Shares Transction History</Text>
      <TransactionFilterTabs selected={selectedTab} onSelect={setSelectedTab} />

      <TransactionList transactions={filteredTransactions} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 20,
    fontWeight: 500,
  },

  history: {
    fontSize: 15,
    fontWeight: 500,
    paddingVertical: 8,
  },
});

export default SharesScreen;
