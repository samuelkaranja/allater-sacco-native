import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../navigation/AppNavigator';

type HomeScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface Props {
  navigation: HomeScreenNavigationProps;
}

// Dummy transaction data
const transactions = [
  {
    id: '1',
    type: 'Mpesa to Savings',
    amount: '+Kes 1,000.00',
    date: 'Today',
    color: 'green',
  },
  {
    id: '2',
    type: 'Savings to Shares',
    amount: '-Kes 1,000.00',
    date: 'Thur, 9th Nov 2023',
    color: 'red',
  },
  {
    id: '3',
    type: 'Mpesa to Savings',
    amount: '+Kes 1,000.00',
    date: 'Today',
    color: 'green',
  },
  {
    id: '4',
    type: 'Savings to Shares',
    amount: '-Kes 1,000.00',
    date: 'Thur, 9th Nov 2023',
    color: 'red',
  },
];

const HomeScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, Samuel</Text>

      {/* Savings Balance */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceText}>Your savings account balance</Text>

        <Text style={styles.amount}>Kshs 203,935.00</Text>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Now</Text>
        </TouchableOpacity>
      </View>

      {/* Shares and Loans */}
      <View style={styles.infoContainer}>
        <View style={styles.infoBoxYellow}>
          <Text style={styles.infoTitle}>Shares</Text>
          <Text style={styles.infoText}>1000 Shares</Text>
          <Text style={styles.infoText}>Kes 100,000</Text>
        </View>
        <View style={styles.infoBoxGray}>
          <Text style={styles.infoTitle}>Loans</Text>
          <Text style={styles.infoText}>Limit: Kes 0.00</Text>
          <Text style={styles.infoText}>Due: Kes 0.00</Text>
        </View>
      </View>

      {/* Transaction History */}
      <Text style={styles.sectionTitle}>Transaction History</Text>
      <FlatList
        data={transactions}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.transactionItem}>
            <View style={styles.transaction}>
              <Text style={[styles.transactionText, {color: 'green'}]}>
                {item.type}
              </Text>
              <Text style={[styles.amountText, {color: item.color}]}>
                {item.amount}
              </Text>
            </View>
            <Text style={styles.transactionDate}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  balanceCard: {
    backgroundColor: '#12994a',
    justifyContent: 'center',
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
  },

  balanceText: {
    color: '#fff',
    fontSize: 14,
  },

  amount: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
    marginVertical: 5,
  },

  saveButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingVertical: 7,
    borderRadius: 20,
    marginTop: 10,
    alignSelf: 'flex-end',
  },

  saveButtonText: {
    color: 'green',
    fontSize: 12,
    fontWeight: 500,
  },

  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  infoBoxYellow: {
    backgroundColor: '#FDCB58',
    padding: 15,
    borderRadius: 10,
    width: '48%',
  },

  infoBoxGray: {
    backgroundColor: '#A1A1A1',
    padding: 15,
    borderRadius: 10,
    width: '48%',
  },

  infoTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },

  infoText: {
    fontSize: 14,
    color: '#fff',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },

  transactionItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  transactionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  transactionDate: {
    fontSize: 12,
    color: 'gray',
  },
});

export default HomeScreen;
