import {DrawerNavigationProp} from '@react-navigation/drawer';
import React from 'react';
import {
  Image,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {HomeStackParamList} from '../navigation/type/navigationTypes';
import SharesSummaryCard from '../components/Shares/SharesSummaryCard';
import SharesActions from '../components/Shares/SharesActions';
import TransactionFilterTabs from '../components/Shares/TransactionFilterTabs';
import {Transaction} from '../components/Shares/types';
import TransactionList from '../components/Shares/TransactionList';

type LoansScreenNavigationProps = DrawerNavigationProp<
  HomeStackParamList,
  'Shares'
>;

interface Props {
  navigation: LoansScreenNavigationProps;
}

const filteredTransactions: Transaction[] = [
  {
    type: 'Buy',
    account: 'Savings - Shares',
    amount: '+Ksh 123,456.00',
    date: '2025-04-06',
  },
  {
    type: 'Sell',
    account: 'Shares - Savings',
    amount: '-Ksh 123,456.00',
    date: '2025-04-01',
  },
  {
    type: 'Transfer',
    account: 'Savings to Shares',
    amount: '+Ksh 123,456.00',
    date: '2025-03-28',
  },
  {
    type: 'Transfer',
    account: 'Savings to Shares',
    amount: '+Ksh 123,456.00',
    date: '2025-03-02',
  },
  {
    type: 'Buy',
    account: 'Savings - Shares',
    amount: '+Ksh 123,456.00',
    date: '2025-04-06',
  },
  {
    type: 'Sell',
    account: 'Shares - Savings',
    amount: '-Ksh 123,456.00',
    date: '2025-04-01',
  },
  {
    type: 'Transfer',
    account: 'Savings to Shares',
    amount: '+Ksh 123,456.00',
    date: '2025-03-28',
  },
  {
    type: 'Transfer',
    account: 'Savings to Shares',
    amount: '+Ksh 123,456.00',
    date: '2025-03-02',
  },
  {
    type: 'Buy',
    account: 'Savings - Shares',
    amount: '+Ksh 123,456.00',
    date: '2025-04-06',
  },
  {
    type: 'Sell',
    account: 'Shares - Savings',
    amount: '-Ksh 123,456.00',
    date: '2025-04-01',
  },
  {
    type: 'Transfer',
    account: 'Savings to Shares',
    amount: '+Ksh 123,456.00',
    date: '2025-03-28',
  },
  {
    type: 'Transfer',
    account: 'Savings to Shares',
    amount: '+Ksh 123,456.00',
    date: '2025-03-02',
  },
];

const SharesScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
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
      <SharesSummaryCard />

      <SharesActions />

      <TransactionFilterTabs
        selected="All"
        onSelect={filter => console.log('Selected filter:', filter)}
      />

      <TransactionList transactions={filteredTransactions} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
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
});

export default SharesScreen;
