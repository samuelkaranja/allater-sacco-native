import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
} from 'react-native';

const ResetPasswordScreen: React.FC = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  return (
    <View style={{padding: 20}}>
      <Text style={{marginBottom: 10}}>Enter the code sent to your email</Text>
      <TextInput
        placeholder="Reset Code"
        value={code}
        onChangeText={setCode}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 15,
          borderRadius: 5,
        }}
      />

      <Text style={{marginBottom: 10}}>Enter your new password</Text>
      <TextInput
        placeholder="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 20,
          borderRadius: 5,
        }}
      />

      <Button title="Reset Password" />

      {/* {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : (
        <Button title="Reset Password" onPress={handleReset} />
      )} */}
    </View>
  );
};

export default ResetPasswordScreen;
