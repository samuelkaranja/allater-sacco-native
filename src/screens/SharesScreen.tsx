import {DrawerNavigationProp} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {HomeStackParamList} from '../navigation/type/navigationTypes';
import SharesSummaryCard from '../components/Shares/SharesSummaryCard';
import ScreenHeader from '../components/ScreenHeader/ScreenHeader';
import SharesTransactionList from '../components/Shares/SharesTransactionList';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/store';
import {fetchSharesSummary} from '../store/features/shares/sharesSlice';

type LoansScreenNavigationProps = DrawerNavigationProp<
  HomeStackParamList,
  'Shares'
>;

interface Props {
  navigation: LoansScreenNavigationProps;
}

const SharesScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const sharesOverview = useSelector((state: RootState) => state.shares.shares);

  useEffect(() => {
    dispatch(fetchSharesSummary());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <ScreenHeader route="HomeMain" title="Shares Account" />

      <SharesSummaryCard
        accountNumber={'12345678'}
        shareAmount={sharesOverview?.shareAmount ?? 0}
        noOfSharesBought={sharesOverview?.noOfSharesBought ?? 0}
      />

      <View style={styles.more}>
        <Text style={styles.history}>Shares Transctions</Text>
        <TouchableOpacity>
          <Text style={styles.moreBtn}>See all</Text>
        </TouchableOpacity>
      </View>

      {sharesOverview?.recentTransactions.length === 0 ? (
        <Text style={{textAlign: 'center', color: 'black'}}>
          No transactions found
        </Text>
      ) : (
        <SharesTransactionList
          transactions={sharesOverview?.recentTransactions ?? []}
        />
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
