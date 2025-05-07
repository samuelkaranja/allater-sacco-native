import {DrawerNavigationProp} from '@react-navigation/drawer';
import React from 'react';
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
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';

type HomeScreenNavigationProps = DrawerNavigationProp<
  HomeStackParamList,
  'HomeMain'
>;

interface Props {
  navigation: HomeScreenNavigationProps;
}

// Dummy transaction data
const transactions: {
  type: 'Deposit' | 'Withdraw';
  transfer: string;
  amount: number;
  date: string;
}[] = [
  {
    type: 'Deposit',
    transfer: 'Mpesa to Savings',
    amount: 123456,
    date: 'Today',
  },
  {
    type: 'Withdraw',
    transfer: 'Savings - Mpesa 0700123456',
    amount: 123456,
    date: '18-11-2023',
  },
  {
    type: 'Deposit',
    transfer: 'Mpesa to Savings',
    amount: 123456,
    date: 'Today',
  },
  {
    type: 'Withdraw',
    transfer: 'Savings - Mpesa 0700123456',
    amount: 123456,
    date: '18-11-2023',
  },
  {
    type: 'Deposit',
    transfer: 'Mpesa to Savings',
    amount: 123456,
    date: 'Today',
  },
  {
    type: 'Withdraw',
    transfer: 'Savings - Mpesa 0700123456',
    amount: 123456,
    date: '18-11-2023',
  },
  {
    type: 'Deposit',
    transfer: 'Mpesa to Savings',
    amount: 123456,
    date: 'Today',
  },
  {
    type: 'Withdraw',
    transfer: 'Savings - Mpesa 0700123456',
    amount: 123456,
    date: '18-11-2023',
  },
  {
    type: 'Deposit',
    transfer: 'Mpesa to Savings',
    amount: 123456,
    date: 'Today',
  },
  {
    type: 'Withdraw',
    transfer: 'Savings - Mpesa 0700123456',
    amount: 123456,
    date: '18-11-2023',
  },
];

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <ScrollView style={styles.container}>
      {/* Top Bar with Hamburger Menu */}
      <Header navigation={navigation} />

      {/* Main Content */}

      {/* <View style={styles.banner}>
        <Image
          source={require('../../assets/images/Banner.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View> */}

      <Text style={styles.welcomeText}>
        Welcome Back, {user?.fullname.trim().split(' ')[0] || ''}!
      </Text>

      <MainAccountCard balance={0.0} />

      <Text style={styles.sectionTitle}>Other Accounts</Text>

      <SharesCard shares={0} worth={0.0} />

      <LoansCard amountDue={0} loanLimit={0} />

      <Text style={styles.transaction}>Transaction History</Text>

      <View style={{marginBottom: 60}}>
        {transactions.map((tx, index) => (
          <TransactionItem
            key={index}
            type={tx.type}
            transfer={tx.transfer}
            amount={tx.amount}
            date={tx.date}
          />
        ))}
      </View>
    </ScrollView>
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
