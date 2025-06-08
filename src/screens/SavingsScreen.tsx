import React, {useEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {HomeStackParamList} from '../navigation/type/navigationTypes';
import Balance from '../components/Savings/Balance';
import {SavingsTransaction} from '../components/Savings/types';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/store';
import {fetchUserOverview} from '../store/slices/overviewSlice';
import {useFocusEffect} from '@react-navigation/native';
import ScreenHeader from '../components/ScreenHeader/ScreenHeader';
import SavingsTransactionList from '../components/Savings/SavingsTransactionList';

type SavingsScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Savings'
>;

interface Props {
  navigation: SavingsScreenNavigationProp;
}

const allTransactions: SavingsTransaction[] = [
  {
    type: 'Deposit',
    status: 'Mpesa to Savings',
    amount: 123456,
    createdAt: '2025-04-09',
  },
  {
    type: 'Withdraw',
    status: 'Savings - Mpesa',
    amount: 123456,
    createdAt: '18-11-2023',
  },
  {
    type: 'Withdraw',
    status: 'Savings to Shares',
    amount: 123456,
    createdAt: '2025-04-09',
  },
  {
    type: 'Deposit',
    status: 'Mpesa to Savings',
    amount: 123456,
    createdAt: '2025-04-09',
  },
  {
    type: 'Withdraw',
    status: 'Savings - Mpesa',
    amount: 123456,
    createdAt: '18-11-2023',
  },
  {
    type: 'Deposit',
    status: 'Savings to Shares',
    amount: 123456,
    createdAt: '2025-04-09',
  },
  {
    type: 'Deposit',
    status: 'Mpesa to Savings',
    amount: 123456,
    createdAt: '2025-04-09',
  },
  {
    type: 'Withdraw',
    status: 'Savings - Mpesa 0700123456',
    amount: 123456,
    createdAt: '18-11-2023',
  },
  {
    type: 'Withdraw',
    status: 'Savings to Shares',
    amount: 123456,
    createdAt: '2025-04-09',
  },
  {
    type: 'Deposit',
    status: 'Mpesa to Savings',
    amount: 123456,
    createdAt: '2025-04-09',
  },
  {
    type: 'Withdraw',
    status: 'Savings - Mpesa',
    amount: 123456,
    createdAt: '18-11-2023',
  },
  {
    type: 'Deposit',
    status: 'Savings to Shares',
    amount: 123456,
    createdAt: '2025-04-09',
  },
];

const SavingsScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const savingsOverview = useSelector(
    (state: RootState) => state.overview.savings,
  );

  useFocusEffect(
    React.useCallback(() => {
      dispatch(fetchUserOverview());
    }, [dispatch]),
  );
  return (
    <View style={styles.container}>
      <ScreenHeader route="HomeMain" title="Savings Account" />

      <Balance balance={savingsOverview} accountNumber="12345678910" />

      <View style={styles.more}>
        <Text style={styles.transaction}>Savings Transactions</Text>
        <TouchableOpacity>
          <Text style={styles.moreBtn}>See all</Text>
        </TouchableOpacity>
      </View>

      <SavingsTransactionList transactions={allTransactions} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },

  icon: {
    marginLeft: 18,
    marginRight: 10,
  },

  title: {
    fontSize: 19,
    fontWeight: 500,
  },

  more: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 5,
  },

  transaction: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  moreBtn: {
    textDecorationLine: 'underline',
    color: '#000',
    fontSize: 13,
  },
});

export default SavingsScreen;
