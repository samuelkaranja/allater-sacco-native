import React, {useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {HomeStackParamList} from '../navigation/type/navigationTypes';
import Balance from '../components/Savings/Balance';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/store';
import ScreenHeader from '../components/ScreenHeader/ScreenHeader';
import SavingsTransactionList from '../components/Savings/SavingsTransactionList';
import {fetchSavingsSummary} from '../store/features/savings/savingsSlice';

type SavingsScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Savings'
>;

interface Props {
  navigation: SavingsScreenNavigationProp;
}

const SavingsScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const savingsDetails = useSelector((state: RootState) => state.savings);

  useEffect(() => {
    dispatch(fetchSavingsSummary());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <ScreenHeader route="HomeMain" title="Savings Account" />

      <Balance balance={savingsDetails.balance} accountNumber="12345678910" />

      <View style={styles.more}>
        <Text style={styles.transaction}>Savings Transactions</Text>
        <TouchableOpacity>
          <Text style={styles.moreBtn}>See all</Text>
        </TouchableOpacity>
      </View>

      {savingsDetails?.recentTransactions.length === 0 ? (
        <Text style={{textAlign: 'center', color: 'black'}}>
          No transactions found
        </Text>
      ) : (
        <SavingsTransactionList
          transactions={savingsDetails.recentTransactions}
        />
      )}
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
