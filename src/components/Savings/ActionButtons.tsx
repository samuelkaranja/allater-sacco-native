import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {HomeStackParamList} from '../../navigation/type/navigationTypes';

const ActionButtons: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();
  const [modalVisible, setModalVisible] = useState(false);
  const [amount, setAmount] = useState('');

  const handleSave = () => {};

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Icon
          name="plus-circle"
          size={20}
          color={'white'}
          style={styles.icon}
        />
        <Text style={styles.iconText}>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Icon
          name="minus-circle"
          size={20}
          color={'white'}
          style={styles.icon}
        />
        <Text style={styles.iconText}>Withdraw</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Icon name="send" size={20} color={'white'} style={styles.icon} />
        <Text style={styles.iconText}>Transfer</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>How much do you want to save?</Text>
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
  container: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#27ae60',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    borderRadius: 16,
    padding: 18,
  },

  button: {
    alignItems: 'center',
  },

  label: {
    marginTop: 6,
    fontSize: 12,
  },

  icon: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  iconText: {
    fontSize: 13,
    fontWeight: 500,
    color: '#fff',
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
    fontSize: 16,
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
    color: '#000',
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

export default ActionButtons;
