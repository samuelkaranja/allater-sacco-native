import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const WithdrawForm = () => {
  const [withdrawTo, setWithdrawTo] = useState('Others');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleContinue = () => {
    // Handle submit logic
    console.log({withdrawTo, phoneNumber, amount, date});
  };

  return (
    <View style={styles.form}>
      {/* Withdraw To Dropdown */}
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Withdraw To</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={withdrawTo}
            onValueChange={itemValue => setWithdrawTo(itemValue)}>
            <Picker.Item label="Self" value="Self" />
            <Picker.Item label="Others" value="Others" />
          </Picker>
        </View>
      </View>

      {/* Phone Number */}
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Enter Safaricom Number"
          keyboardType="phone-pad"
        />
        <Text style={styles.helperText}>
          Please use a Safaricom Number only
        </Text>
      </View>

      {/* Amount */}
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Amount</Text>
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={setAmount}
          placeholder="10,000"
          keyboardType="numeric"
        />
        <Text style={styles.helperText}>Minimum withdrawal amount Ksh 100</Text>
      </View>

      {/* Schedule Date & Time */}
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Schedule Date & Time</Text>
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={styles.input}>
          <Text>{date.toDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="datetime"
            display={Platform.OS === 'ios' ? 'inline' : 'default'}
            onChange={(_, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) setDate(selectedDate);
            }}
          />
        )}
        <Text style={styles.helperText}>Select date and time above</Text>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WithdrawForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
  },

  inputWrapper: {
    marginBottom: 16,
  },

  label: {
    fontWeight: 'bold',
    marginBottom: 6,
    fontSize: 14,
  },

  input: {
    borderWidth: 1,
    borderColor: '#0D5C63',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },

  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#0D5C63',
    borderRadius: 8,
  },

  helperText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },

  button: {
    backgroundColor: '#00994D',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
