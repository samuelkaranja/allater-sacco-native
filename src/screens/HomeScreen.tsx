import React, {useEffect} from 'react';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {HomeStackParamList} from '../navigation/type/navigationTypes';
import Header from '../components/Header/Header';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, AppDispatch} from '../store/store';
import {fetchUserOverview} from '../store/slices/overviewSlice';
import TransactionList from '../components/Transaction/TransactionList';
import CardCarousel from '../components/CardCarousel/CardCarousel';

type HomeScreenNavigationProps = DrawerNavigationProp<
  HomeStackParamList,
  'HomeMain'
>;

interface Props {
  navigation: HomeScreenNavigationProps;
}

const transactions = [
  {
    amount: 100.0,
    status: 'Top up',
    type: 'Deposit',
    createdAt: 'Today 1:53 PM',
  },
  {
    amount: -500.0,
    status: 'Transfer',
    type: 'Send',
    createdAt: 'Today 2:33 PM',
  },
  {
    amount: 50.0,
    status: 'Received',
    type: 'Deposit',
    createdAt: 'Today 3:32 PM',
  },
  {
    amount: 50.0,
    status: 'Received',
    type: 'Deposit',
    createdAt: 'Today 3:32 PM',
  },
  {
    amount: -500.0,
    status: 'Transfer',
    type: 'Send',
    createdAt: 'Today 2:33 PM',
  },
  {
    amount: 50.0,
    status: 'Received',
    type: 'Deposit',
    createdAt: 'Today 3:32 PM',
  },
  {
    amount: 50.0,
    status: 'Received',
    type: 'Deposit',
    createdAt: 'Today 3:32 PM',
  },
];

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    dispatch(fetchUserOverview());
  }, [dispatch]);

  const renderHeader = () => {
    return (
      <View>
        <Header navigation={navigation} />
        <Text style={styles.welcomeText}>
          Welcome Back, {user?.fullname.trim().split(' ')[0] || 'User'}!
        </Text>
        <CardCarousel />
        <Text style={styles.transaction}>Transactions</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={[]}
      ListHeaderComponent={renderHeader}
      //ListFooterComponent={renderFooter}
      renderItem={null}
      style={styles.container}
      ListEmptyComponent={
        transactions.length === 0 ? (
          <Text style={{textAlign: 'center'}}>No transactions found</Text>
        ) : (
          <TransactionList transactions={transactions} />
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },

  text: {
    fontSize: 16,
    marginTop: 20,
  },

  banner: {
    paddingBottom: 15,
  },

  image: {
    width: '100%',
    height: 73,
  },

  welcomeText: {
    fontSize: 18,
    fontWeight: 500,
    textAlign: 'left',
    paddingTop: 5,
    paddingBottom: 25,
    paddingLeft: 15,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: 400,
    marginVertical: 10,
  },

  transaction: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 12,
  },
});

export default HomeScreen;
