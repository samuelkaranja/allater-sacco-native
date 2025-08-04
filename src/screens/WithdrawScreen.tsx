import {DrawerNavigationProp} from '@react-navigation/drawer';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {RootStackParamList} from '../navigation/type/navigationTypes';
import ScreenHeader from '../components/ScreenHeader/ScreenHeader';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/store';
import {fetchSavingsSummary} from '../store/features/savings/savingsSlice';

type WithdrawScreenNavigationProps = DrawerNavigationProp<
  RootStackParamList,
  'Withdraw'
>;

interface Props {
  navigation: WithdrawScreenNavigationProps;
}

const WithdrawScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();

  const [amount, setAmount] = useState<string>('0');
  const [loading, setLoading] = useState<boolean>(false);

  const balance = useSelector((state: RootState) => state.savings.balance);

  useEffect(() => {
    dispatch(fetchSavingsSummary());
  }, [dispatch]);

  const handleKeyPress = (key: string) => {
    if (key === 'back') {
      setAmount(prev => prev.slice(0, -1));
    } else {
      setAmount(prev => prev + key);
    }
  };

  const handleWithdraw = async () => {
    const numericAmount = parseFloat(amount);

    if (!amount || numericAmount <= 0) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please enter a valid amount.',
        position: 'top',
        visibilityTime: 4000,
        autoHide: true,
      });
      return;
    }

    if (numericAmount < 30) {
      Toast.show({
        type: 'error',
        text1: 'Insufficient Amount',
        text2: 'You must withdraw at least KES 30 and above.',
        position: 'top',
        visibilityTime: 10000,
        autoHide: true,
      });
      return;
    }

    if (numericAmount > balance) {
      Toast.show({
        type: 'error',
        text1: 'Insufficient Funds',
        text2: 'You do not have enough savings to complete this withdrawal.',
        position: 'top',
        visibilityTime: 8000,
        autoHide: true,
      });
      return;
    }

    try {
      setLoading(true); // Start loading
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        Toast.show({
          type: 'error',
          text1: 'Unauthorized',
          text2: 'You must be logged in to perform this action.',
          position: 'top',
          visibilityTime: 20000,
          autoHide: true,
        });

        return;
      }

      const response = await axios.post(
        'https://allater-sacco-backend.fly.dev/savings/withdraw',
        {amount: numericAmount}, // Send amount
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );

      // Handle success
      Toast.show({
        type: 'success',
        text1: 'Withdrawal Successful',
        text2: `You have withdrawn KES ${numericAmount.toLocaleString(
          undefined,
          {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          },
        )}`,
        position: 'top',
        visibilityTime: 9000,
        autoHide: true,
      });
      console.log(response);
      // Reset amount input
      setAmount('0');

      // Optionally navigate back or refresh savings screen
      //navigation.navigate('Savings');
    } catch (error: any) {
      console.error('Withdrawal error:', error.response?.data || error.message);
      Toast.show({
        type: 'error',
        text1: 'Withdrawal Failed',
        text2:
          error.response?.data?.message ||
          'Something went wrong. Please try again.',
        position: 'top',
        visibilityTime: 10000,
        autoHide: true,
      });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Withdraw" />

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

        <TouchableOpacity
          style={styles.sendButton}
          onPress={handleWithdraw}
          disabled={loading} // prevent multiple taps
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.sendButtonText}>Withdraw</Text>
          )}
        </TouchableOpacity>

        <View style={styles.keypad}>
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '00', '0', 'back'].map(
            (key, idx) => (
              <TouchableOpacity
                key={idx}
                style={[styles.key, key === 'back' && styles.backKey]}
                onPress={() => handleKeyPress(key)}>
                <Text style={styles.keyText}>{key === 'back' ? '⌫' : key}</Text>
              </TouchableOpacity>
            ),
          )}
        </View>
      </View>
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
