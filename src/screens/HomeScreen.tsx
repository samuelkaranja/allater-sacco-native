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
];

const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {/* Top Bar with Hamburger Menu */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.iconButton}>
          <Icon name="bars" size={24} color="#000" />
        </TouchableOpacity>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.headerImage}
        />
        <TouchableOpacity
          onPress={() => console.log('Notifications Clicked')}
          style={styles.iconButton}>
          <Icon name="bell" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}

      <View style={styles.banner}>
        <Image
          source={require('../../assets/images/Banner.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <Text style={styles.welcomeText}>Welcome Back, Samuel.</Text>

      <MainAccountCard balance={123456.45} />

      <Text style={styles.sectionTitle}>Other Accounts</Text>

      <SharesCard shares={10} worth={123456.0} />

      <LoansCard amountDue={1000} loanLimit={20000} />

      <Text style={styles.sectionTitle}>Transaction History</Text>

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
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20,
  },

  iconButton: {
    padding: 10,
  },

  headerImage: {
    width: 50,
    height: 50,
    objectFit: 'cover',
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
    fontSize: 24,
    fontWeight: 500,
    paddingTop: 5,
    paddingBottom: 10,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: 500,
    marginVertical: 10,
  },
});

export default HomeScreen;
