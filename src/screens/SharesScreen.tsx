import {DrawerNavigationProp} from '@react-navigation/drawer';
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {HomeStackParamList} from '../navigation/type/navigationTypes';
import SharesSummaryCard from '../components/Shares/SharesSummaryCard';
import {Transaction} from '../components/Shares/types';
import ScreenHeader from '../components/ScreenHeader/ScreenHeader';
import SharesTransactionList from '../components/Shares/SharesTransactionList';

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
    status: 'Savings - Shares',
    amount: 123456,
    createdAt: '2025-04-06',
  },
  {
    type: 'Sell',
    status: 'Shares - Savings',
    amount: 123456,
    createdAt: '2025-04-01',
  },
  {
    type: 'Transfer',
    status: 'Savings to Shares',
    amount: 123456,
    createdAt: '2025-03-28',
  },
  {
    type: 'Transfer',
    status: 'Savings to Shares',
    amount: 123456,
    createdAt: '2025-03-02',
  },
  {
    type: 'Buy',
    status: 'Savings - Shares',
    amount: 123456,
    createdAt: '2025-04-06',
  },
  {
    type: 'Sell',
    status: 'Shares - Savings',
    amount: 123456,
    createdAt: '2025-04-01',
  },
  {
    type: 'Transfer',
    status: 'Savings to Shares',
    amount: 123456,
    createdAt: '2025-03-28',
  },
  {
    type: 'Transfer',
    status: 'Savings to Shares',
    amount: 123456,
    createdAt: '2025-03-02',
  },
  {
    type: 'Buy',
    status: 'Savings - Shares',
    amount: 123456,
    createdAt: '2025-04-06',
  },
  {
    type: 'Sell',
    status: 'Shares - Savings',
    amount: 123456,
    createdAt: '2025-04-01',
  },
  {
    type: 'Transfer',
    status: 'Savings to Shares',
    amount: 123456,
    createdAt: '2025-03-28',
  },
  {
    type: 'Transfer',
    status: 'Savings to Shares',
    amount: 123456,
    createdAt: '2025-03-02',
  },
  {
    type: 'Buy',
    status: 'Savings - Shares',
    amount: 123456,
    createdAt: '2025-04-06',
  },
  {
    type: 'Sell',
    status: 'Shares - Savings',
    amount: 123456,
    createdAt: '2025-04-01',
  },
  {
    type: 'Transfer',
    status: 'Savings to Shares',
    amount: 123456,
    createdAt: '2025-03-28',
  },
  {
    type: 'Transfer',
    status: 'Savings to Shares',
    amount: 123456,
    createdAt: '2025-03-02',
  },
];

const SharesScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScreenHeader route="HomeMain" title="Shares Account" />

      <SharesSummaryCard />

      <View style={styles.more}>
        <Text style={styles.history}>Shares Transctions</Text>
        <TouchableOpacity>
          <Text style={styles.moreBtn}>See all</Text>
        </TouchableOpacity>
      </View>

      <SharesTransactionList transactions={allTransactions} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },

  history: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  more: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 5,
  },

  moreBtn: {
    textDecorationLine: 'underline',
    color: '#000',
    fontSize: 13,
  },
});

export default SharesScreen;
