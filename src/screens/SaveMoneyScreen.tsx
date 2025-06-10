import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
//import Header from '../components/Header/Header';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStackParamList} from '../navigation/type/navigationTypes';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../store/store';
import {fetchUserOverview} from '../store/slices/overviewSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScreenHeader from '../components/ScreenHeader/ScreenHeader';
import Toast from 'react-native-toast-message';

type SaveMoneyScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Savings'
>;

interface Props {
  navigation: SaveMoneyScreenNavigationProp;
}

const SaveMoneyScreen: React.FC<Props> = ({navigation}) => {
  const [amount, setAmount] = useState<string>('0');
  const dispatch = useDispatch<AppDispatch>();

  const handleKeyPress = (key: string) => {
    if (key === 'back') {
      setAmount(prev => prev.slice(0, -1));
    } else {
      setAmount(prev => prev + key);
    }
  };

  const handleSave = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please enter a valid amount.',
        position: 'top',
        visibilityTime: 10000,
        autoHide: true,
      });
      //Alert.alert('Validation', 'Please enter a valid amount.');
      return;
    }

    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        Alert.alert(
          'Unauthorized',
          'You must be logged in to perform this action.',
        );
        return;
      }

      const response = await fetch(
        'https://allater-sacco-backend.fly.dev/savings/deposit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({amount}),
        },
      );

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setAmount('0');

        // Wait 8 seconds to let backend update transaction status
        setTimeout(() => {
          dispatch(fetchUserOverview());
          navigation.navigate('HomeMain');
        }, 10000);
      } else {
        Alert.alert('Error', data.message || 'Failed to save amount');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader route="Savings" title="Save Money" />
      <View style={styles.card}>
        <Text style={styles.header}>Save Money To Your Account</Text>

        <View style={styles.amountBox}>
          <Text style={styles.amountText}>
            <Text style={{fontSize: 15}}>KES </Text>
            {Number(amount).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }) || '0'}
          </Text>
        </View>

        <TouchableOpacity style={styles.sendButton} onPress={handleSave}>
          <Text style={styles.sendButtonText}>Save</Text>
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
});

export default SaveMoneyScreen;
