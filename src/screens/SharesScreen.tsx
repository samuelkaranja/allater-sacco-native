import {DrawerNavigationProp} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {BottomTabParamList} from '../navigation/type/navigationTypes';
import SharesSummaryCard from '../components/Shares/SharesSummaryCard';
import ScreenHeader from '../components/ScreenHeader/ScreenHeader';
import SharesTransactionList from '../components/Shares/SharesTransactionList';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/store';
import {fetchSharesSummary} from '../store/features/shares/sharesSlice';

type SharesScreenNavigationProps = DrawerNavigationProp<
  BottomTabParamList,
  'Shares'
>;

interface Props {
  navigation: SharesScreenNavigationProps;
}

const SharesScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {shares, loading, error} = useSelector(
    (state: RootState) => state.shares,
  );

  useEffect(() => {
    dispatch(fetchSharesSummary());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#005A5B" />
        <Text style={{marginTop: 10}}>Loading Shares...</Text>
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

  const recentTransactions = Array.isArray(shares?.recentTransactions)
    ? shares.recentTransactions
    : [];

  return (
    <View style={styles.container}>
      <ScreenHeader route="HomeMain" title="Shares Account" />

      <SharesSummaryCard
        accountNumber={'12345678'}
        shareAmount={shares?.shareAmount ?? 0}
        noOfSharesBought={shares?.noOfSharesBought ?? 0}
      />

      <View style={styles.more}>
        <Text style={styles.history}>Shares Transctions</Text>
        <TouchableOpacity>
          <Text style={styles.moreBtn}>See all</Text>
        </TouchableOpacity>
      </View>

      {recentTransactions.length === 0 ? (
        <Text style={{textAlign: 'center', color: 'black'}}>
          No transactions found
        </Text>
      ) : (
        <SharesTransactionList transactions={recentTransactions} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },

  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
