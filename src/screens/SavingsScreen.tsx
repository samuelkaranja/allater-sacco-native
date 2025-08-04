import React, {useEffect, useCallback} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {BottomTabParamList} from '../navigation/type/navigationTypes';
import Balance from '../components/Savings/Balance';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/store';
import ScreenHeader from '../components/ScreenHeader/ScreenHeader';
import SavingsTransactionList from '../components/Savings/SavingsTransactionList';
import {fetchSavingsSummary} from '../store/features/savings/savingsSlice';
import {useFocusEffect} from '@react-navigation/native';

type SavingsScreenNavigationProp = StackNavigationProp<
  BottomTabParamList,
  'Savings'
>;

interface Props {
  navigation: SavingsScreenNavigationProp;
}

const SavingsScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const savingsDetails = useSelector((state: RootState) => state.savings);
  const profile = useSelector((state: RootState) => state.auth.user);

  const {loading, error, balance, recentTransactions} = savingsDetails;

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchSavingsSummary());
    }, [dispatch]),
  );

  // useEffect(() => {
  //   dispatch(fetchSavingsSummary());
  // }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#005A5B" />
        <Text style={{marginTop: 10}}>Loading Savings...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={{color: 'red', fontSize: 16}}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScreenHeader title="Savings Account" />

      <Balance
        balance={savingsDetails.balance}
        accountNumber={profile?.accountID || 'N/A'}
      />

      <View style={styles.more}>
        <Text style={styles.transaction}>Savings Transactions</Text>
        <TouchableOpacity>
          <Text style={styles.moreBtn}>See all</Text>
        </TouchableOpacity>
      </View>

      {recentTransactions.length === 0 ? (
        <Text style={{textAlign: 'center', color: 'black'}}>
          No transactions found
        </Text>
      ) : (
        <SavingsTransactionList transactions={recentTransactions} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },

  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
