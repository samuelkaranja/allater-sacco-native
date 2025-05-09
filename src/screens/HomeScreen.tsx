import React, {useEffect} from 'react';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MainAccountCard from '../components/Home/MainAccountCard';
import SharesCard from '../components/Home/SharesCard';
import LoansCard from '../components/Home/LoansCard';
import TransactionItem from '../components/Home/TransactionItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import {HomeStackParamList} from '../navigation/type/navigationTypes';
import Header from '../components/Header/Header';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, AppDispatch} from '../store/store';
import {fetchUserOverview} from '../store/slices/overviewSlice';
import TransactionList from '../components/Home/TransactionList';

type HomeScreenNavigationProps = DrawerNavigationProp<
  HomeStackParamList,
  'HomeMain'
>;

interface Props {
  navigation: HomeScreenNavigationProps;
}

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const overview = useSelector((state: RootState) => state.overview);
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    dispatch(fetchUserOverview());
  }, [dispatch]);

  const renderHeader = () => {
    return (
      <View>
        <Header navigation={navigation} />
        <Text style={styles.welcomeText}>
          Welcome Back, {user?.fullname.trim().split(' ')[0] || ''}!
        </Text>
        <MainAccountCard balance={overview.savings} />
        <Text style={styles.sectionTitle}>Other Accounts</Text>
        <SharesCard shares={overview.shares} worth={overview.shares} />
        <LoansCard amountDue={overview.loan} loanLimit={overview.loan} />
        <Text style={styles.transaction}>Transaction History</Text>
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
        overview.transactions.length === 0 ? (
          <Text style={{textAlign: 'center'}}>No transactions found</Text>
        ) : (
          <TransactionList
            transactions={overview.transactions}
            pagination={{
              page: 1,
              pageSize: 10,
              total: overview.transactions.length,
              totalPages: Math.ceil(overview.transactions.length / 10),
            }}
          />
        )
      }
    />

    // <ScrollView style={styles.container}>
    //   {/* Top Bar with Hamburger Menu */}
    //   <Header navigation={navigation} />

    //   {/* Main Content */}

    //   <Text style={styles.welcomeText}>
    //     Welcome Back, {user?.fullname.trim().split(' ')[0] || ''}!
    //   </Text>

    //   <MainAccountCard balance={overview.savings} />

    //   <Text style={styles.sectionTitle}>Other Accounts</Text>

    //   <SharesCard shares={overview.shares} worth={overview.shares} />

    //   <LoansCard amountDue={overview.loan} loanLimit={overview.loan} />

    //   <Text style={styles.transaction}>Transaction History</Text>

    //   <View style={{marginBottom: 60}}>
    //     {overview.transactions.length === 0 ? (
    //       <Text>No transactions found</Text>
    //     ) : (
    //       <TransactionList
    //         transactions={overview.transactions}
    //         pagination={{
    //           page: overview.pagination,
    //           totalPages: 1,
    //           pageSize: 10,
    //           total: overview.transactions.length,
    //         }}
    //       />
    //     )}
    //   </View>

    //   <View style={{marginBottom: 60}}>
    //     {overview.transactions.length === 0 ? (
    //       <Text>No transactions found</Text>
    //     ) : (
    //       overview.transactions.map((tx, index) => (
    //         <TransactionItem
    //           key={index}
    //           type={tx.type}
    //           status={tx.status}
    //           amount={tx.amount}
    //           createdAt={new Date(tx.createdAt).toLocaleDateString()}
    //         />
    //       ))
    //     )}
    //   </View>
    // </ScrollView>
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
    fontSize: 22,
    fontWeight: 500,
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 25,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: 400,
    marginVertical: 10,
  },

  transaction: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 12,
  },
});

export default HomeScreen;
