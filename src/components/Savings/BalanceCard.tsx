import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store/store';
import {fetchUserOverview} from '../../store/slices/overviewSlice';

const BalanceCard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const overview = useSelector((state: RootState) => state.overview);

  useEffect(() => {
    dispatch(fetchUserOverview());
  }, [dispatch]);

  console.log('BalanceCard', overview);

  const [modalVisible, setModalVisible] = useState(false);
  const [amount, setAmount] = useState('');

  const handleSave = async () => {
    if (!amount) {
      Alert.alert('Validation', 'Please enter an amount.');
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
      // Replace with your API endpoint
      const response = await fetch(
        'https://allater-sacco-backend.fly.dev/savings/deposit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({amount: amount}),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setAmount('');
        setModalVisible(false);
      } else {
        Alert.alert('Error', data.message || 'Failed to save amount');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.label}>Current Balance</Text>
      <Text style={styles.amount}>
        <Text style={{fontSize: 15}}>Ksh</Text>{' '}
        {overview.savings.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Text>
      <View style={styles.section}>
        <Text style={styles.account}>Acc: 1234 5678 9012</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>SAVE NOW</Text>
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Enter Amount to Save</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Enter amount"
              value={amount}
              onChangeText={setAmount}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                paddingTop: 20,
              }}>
              <TouchableOpacity
                style={styles.modalCancelButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalButton} onPress={handleSave}>
                <Text style={styles.modalButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#27ae60',
    borderRadius: 12,
    padding: 20,
    margin: 16,
  },

  label: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },

  amount: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  account: {
    color: '#fff',
    fontWeight: 500,
    marginTop: 8,
  },

  button: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginTop: 10,
  },

  buttonText: {
    color: '#27ae60',
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    paddingVertical: 50,
    paddingHorizontal: 25,
    borderRadius: 12,
    width: '90%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 12,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
  modalButton: {
    backgroundColor: '#27ae60',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 10,
  },
  modalCancelButton: {
    backgroundColor: 'orangered',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 10,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cancelText: {
    color: '#fff',
  },
});

export default BalanceCard;
