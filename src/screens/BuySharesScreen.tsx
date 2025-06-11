import {DrawerNavigationProp} from '@react-navigation/drawer';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {HomeStackParamList} from '../navigation/type/navigationTypes';
import Toast from 'react-native-toast-message';
import {ActivityIndicator} from 'react-native';
import ScreenHeader from '../components/ScreenHeader/ScreenHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

type BuySharesScreenNavigationProps = DrawerNavigationProp<
  HomeStackParamList,
  'BuyShares'
>;

interface Props {
  navigation: BuySharesScreenNavigationProps;
}

const BuySharesScreen: React.FC<Props> = ({navigation}) => {
  const [amount, setAmount] = useState<string>('0');
  const [loading, setLoading] = useState<boolean>(false);

  //   const handleKeyPress = (key: string) => {
  //     if (key === 'back') {
  //       setAmount(prev => prev.slice(0, -1));
  //     } else {
  //       setAmount(prev => prev + key);
  //     }
  //   };

  const handleKeyPress = (key: string) => {
    if (loading) return; // prevent input while loading

    if (key === 'back') {
      setAmount(prev => prev.slice(0, -1));
    } else if (/^\d+$/.test(key)) {
      setAmount(prev => {
        // prevent leading zeroes
        const next = prev === '0' ? key : prev + key;
        return next;
      });
    }
  };

  const handleBuyShares = async () => {
    // Validate: Must be a whole number greater than 0
    if (!/^\d+$/.test(amount) || Number(amount) <= 0) {
      Toast.show({
        type: 'error',
        text1: 'Invalid Amount',
        text2: 'Please enter a valid number of shares (whole number above 0)',
        position: 'top',
        visibilityTime: 8000,
        autoHide: true,
      });
      return;
    }

    try {
      setLoading(true);

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

      console.log('Sending amount:', amount, typeof amount);

      const response = await axios.post(
        'https://allater-sacco-backend.fly.dev/shares/buy',
        {noOfShares: amount},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );

      Toast.show({
        type: 'success',
        text1: 'Successful',
        text2: response?.data.message,
        position: 'top',
        visibilityTime: 10000,
        autoHide: true,
      });

      console.log('Buy shares response:', response.data);
      setAmount('0');
      navigation.navigate('Shares');
    } catch (error: any) {
      console.error('Buy shares error:', error.response?.data || error.message);
      Toast.show({
        type: 'error',
        text1: 'Purchase Failed',
        text2:
          error.response?.data?.message ||
          'Something went wrong. Please try again.',
        position: 'top',
        visibilityTime: 10000,
        autoHide: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader route="Shares" title="Buy Shares" />

      <View style={styles.card}>
        <Text style={styles.header}>
          Enter the number of shares you want to buy
        </Text>
        <Text>1 Share = Kshs 1.00</Text>

        <View style={styles.amountBox}>
          <Text style={styles.amountText}>{Number(amount) || '0'}</Text>
        </View>

        <TouchableOpacity
          style={styles.sendButton}
          onPress={handleBuyShares}
          disabled={loading} // prevent multiple taps
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.sendButtonText}>Buy Shares</Text>
          )}
        </TouchableOpacity>

        {/* <View style={styles.keypad}>
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
        </View> */}

        <View style={styles.keypad}>
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '00', '0', 'back'].map(
            (key, idx) => (
              <TouchableOpacity
                key={idx}
                style={[
                  styles.key,
                  key === 'back' && styles.backKey,
                  loading && styles.disabledKey, // optional style when disabled
                ]}
                onPress={() => {
                  if (!loading) handleKeyPress(key); // ✅ prevent press if loading
                }}
                activeOpacity={loading ? 1 : 0.6} // ✅ prevent visual feedback if loading
              >
                <Text style={[styles.keyText, loading && {color: '#aaa'}]}>
                  {key === 'back' ? '⌫' : key}
                </Text>
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

  disabledKey: {
    backgroundColor: '#eee',
  },
});

export default BuySharesScreen;
