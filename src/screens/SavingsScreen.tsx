import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HomeStackParamList} from '../navigation/type/navigationTypes';
import Header from '../components/Header/Header';
import BalanceCard from '../components/Savings/BalanceCard';
import ActionButtons from '../components/Savings/ActionButtons';
import Icon from 'react-native-vector-icons/FontAwesome';
import TransactionFilterTabs from '../components/Savings/TransactionFilterTabs';
import useTransactionFilter from '../hooks/useTransactionFilter';
import {SavingsTransaction} from '../components/Savings/types';
import TransactionList from '../components/Savings/TransactionList';

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
  const [selectedTab, setSelectedTab] = useState('All');
  const filteredTransactions = useTransactionFilter(
    allTransactions,
    selectedTab,
  );
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.head}>
        <Icon name="bank" size={22} color={'black'} style={styles.icon} />
        <Text style={styles.title}>Savings Account</Text>
      </View>

      <BalanceCard />

      <ActionButtons />

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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
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
