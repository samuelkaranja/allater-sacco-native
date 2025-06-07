import React, {useEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {StyleSheet, Text, View} from 'react-native';
import {HomeStackParamList} from '../navigation/type/navigationTypes';
import Header from '../components/Header/Header';
import Balance from '../components/Savings/Balance';
import ActionButtons from '../components/Savings/ActionButtons';
import TransactionFilterTabs from '../components/Savings/TransactionFilterTabs';
import useTransactionFilter from '../hooks/useTransactionFilter';
import {SavingsTransaction} from '../components/Savings/types';
import TransactionList from '../components/Savings/TransactionList';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/store';
import {fetchUserOverview} from '../store/slices/overviewSlice';
import {useFocusEffect} from '@react-navigation/native';
import ScreenHeader from '../components/ScreenHeader/ScreenHeader';

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
    description: 'Mpesa to Savings',
    amount: '+Ksh 123,456.00',
    isCredit: true,
    date: '2025-04-09',
  },
  {
    type: 'Withdraw',
    description: 'Savings - Mpesa 0700123456',
    amount: '-Ksh 123,456.00',
    isCredit: false,
    date: '18-11-2023',
  },
  {
    type: 'Transfer',
    description: 'Savings to Shares',
    amount: '+Ksh 123,456.00',
    isCredit: true,
    date: '2025-04-09',
  },
  {
    type: 'Deposit',
    description: 'Mpesa to Savings',
    amount: '+Ksh 123,456.00',
    isCredit: true,
    date: '2025-04-09',
  },
  {
    type: 'Withdraw',
    description: 'Savings - Mpesa 0700123456',
    amount: '-Ksh 123,456.00',
    isCredit: false,
    date: '18-11-2023',
  },
  {
    type: 'Transfer',
    description: 'Savings to Shares',
    amount: '+Ksh 123,456.00',
    isCredit: true,
    date: '2025-04-09',
  },
  {
    type: 'Deposit',
    description: 'Mpesa to Savings',
    amount: '+Ksh 123,456.00',
    isCredit: true,
    date: '2025-04-09',
  },
  {
    type: 'Withdraw',
    description: 'Savings - Mpesa 0700123456',
    amount: '-Ksh 123,456.00',
    isCredit: false,
    date: '18-11-2023',
  },
  {
    type: 'Transfer',
    description: 'Savings to Shares',
    amount: '+Ksh 123,456.00',
    isCredit: true,
    date: '2025-04-09',
  },
  {
    type: 'Deposit',
    description: 'Mpesa to Savings',
    amount: '+Ksh 123,456.00',
    isCredit: true,
    date: '2025-04-09',
  },
  {
    type: 'Withdraw',
    description: 'Savings - Mpesa 0700123456',
    amount: '-Ksh 123,456.00',
    isCredit: false,
    date: '18-11-2023',
  },
  {
    type: 'Transfer',
    description: 'Savings to Shares',
    amount: '+Ksh 123,456.00',
    isCredit: true,
    date: '2025-04-09',
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

  // useEffect(() => {
  //   dispatch(fetchUserOverview());
  // }, [dispatch]);

  const [selectedTab, setSelectedTab] = useState('All');
  const filteredTransactions = useTransactionFilter(
    allTransactions,
    selectedTab,
  );
  return (
    <View style={styles.container}>
      <ScreenHeader route="HomeMain" title="Savings Account" />
      {/* <Header navigation={navigation} /> */}
      <View></View>
      {/* <View style={styles.head}>
        <Text style={styles.title}>Savings Account</Text>
      </View> */}

      <Balance balance={24562} accountNumber="12345678910" />

      {/* <ActionButtons /> */}

      <TransactionFilterTabs selected={selectedTab} onSelect={setSelectedTab} />

      <TransactionList transactions={filteredTransactions} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },

  head: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // marginLeft: 15,
    // marginBottom: 10,
  },

  icon: {
    marginLeft: 18,
    marginRight: 10,
  },

  title: {
    fontSize: 19,
    fontWeight: 500,
  },
});

export default SavingsScreen;
