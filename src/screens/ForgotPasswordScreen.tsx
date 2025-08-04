import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const ForgotPasswordScreen: React.FC = () => {
  const [email, setEmail] = useState('');

  return (
    <View style={{padding: 20}}>
      <Text style={{marginBottom: 10}}>
        Enter your email to receive a reset code
      </Text>
      <TextInput
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 20,
          borderRadius: 5,
          color: '#000',
        }}
      />

      <Button title="Send Reset Code" />
      <TouchableOpacity style={styles.resetBtn}>
        <Text>Send Reset Code</Text>
      </TouchableOpacity>

      {/* {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : (
        <Button title="Send Reset Code" onPress={handleSendCode} />
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  resetBtn: {
    backgroundColor: '#12994a',
    paddingVertical: 12,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default ForgotPasswordScreen;
