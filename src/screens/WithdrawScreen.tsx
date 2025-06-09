import {DrawerNavigationProp} from '@react-navigation/drawer';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {HomeStackParamList} from '../navigation/type/navigationTypes';
import Header from '../components/Header/Header';
import WithdrawForm from '../components/Withdraw/WithdrawForm';
import ScreenHeader from '../components/ScreenHeader/ScreenHeader';

type WithdrawScreenNavigationProps = DrawerNavigationProp<
  HomeStackParamList,
  'Withdraw'
>;

interface Props {
  navigation: WithdrawScreenNavigationProps;
}

const WithdrawScreen: React.FC<Props> = ({navigation}) => {
  const [amount, setAmount] = useState<string>('0');

  return (
    <SafeAreaView style={styles.container}>
      {/* <Header navigation={navigation} /> */}

      <ScreenHeader route="Savings" title="Withdraw" />

      <View style={styles.card}>
        <Text style={styles.header}>
          Withdraw Money From Your Savings Account
        </Text>

        <View style={styles.amountBox}>
          <Text style={styles.amountText}>
            <Text style={{fontSize: 15}}>KES </Text>
            {Number(amount).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }) || '0'}
          </Text>
        </View>

        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Withdraw</Text>
        </TouchableOpacity>

        <View style={styles.keypad}>
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '00', '0', 'back'].map(
            (key, idx) => (
              <TouchableOpacity
                key={idx}
                style={[styles.key, key === 'back' && styles.backKey]}>
                <Text style={styles.keyText}>{key === 'back' ? '⌫' : key}</Text>
              </TouchableOpacity>
            ),
          )}
        </View>
      </View>

      {/* <Text style={styles.title}>Withdraw To Mpesa</Text>

      <WithdrawForm /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    // backgroundColor: '#fff',
  },

  card: {
    width: '100%',
    paddingTop: 50,
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignItems: 'center',
  },

  header: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },

  amountBox: {
    backgroundColor: '#F1F2F6',
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 50,
    marginTop: 20,
    marginBottom: 40,
  },

  amountText: {
    fontSize: 28,
    fontWeight: '600',
  },

  sendButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 10,
    width: '90%',
    borderRadius: 12,
    marginBottom: 30,
  },

  sendButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },

  keypad: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  key: {
    width: '30%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 6,
    borderRadius: 10,
  },

  keyText: {
    fontSize: 24,
    color: '#333',
  },

  backKey: {
    backgroundColor: '#F1F2F6',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#0D5C63',
    textAlign: 'center',
  },
});

export default WithdrawScreen;
