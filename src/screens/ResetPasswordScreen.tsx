import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RootStackParamList} from '../navigation/type/navigationTypes';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/store';
import {
  resetPassword,
  clearPasswordError,
  clearPasswordMessage,
} from '../store/features/auth/passwordSlice';
import Toast from 'react-native-toast-message';

type ResetPasswordScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'ResetPassword'
>;

interface Props {
  navigation: ResetPasswordScreenNavigationProps;
}

const ResetPasswordScreen: React.FC<Props> = ({navigation}) => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const {loading, error, message} = useSelector(
    (state: RootState) => state.password,
  );

  const handleReset = () => {
    if (!code.trim() || !newPassword.trim()) {
      return Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please fill all fields',
        position: 'top', // or 'bottom'
        visibilityTime: 7000, // duration in ms
        autoHide: true,
      });
    }

    dispatch(resetPassword({token: code, newpassword: newPassword})).then(
      (res: any) => {
        if (!res.error) {
          navigation.navigate('Login');
        }
      },
    );
  };

  useEffect(() => {
    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error,
        position: 'top', // or 'bottom'
        visibilityTime: 7000, // duration in ms
        autoHide: true,
      });
      dispatch(clearPasswordError());
    }

    if (message) {
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: message,
        position: 'top', // or 'bottom'
        visibilityTime: 7000, // duration in ms
        autoHide: true,
      });
      dispatch(clearPasswordMessage());
    }
  }, [error, message]);

  return (
    <View style={{padding: 20}}>
      <View style={styles.screenHeader}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}>
          <FontAwesome
            name="angle-left"
            size={28}
            color="#000"
            style={styles.rowIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Reset Password</Text>
      </View>
      <Text style={styles.introText}>Enter the code sent to your email</Text>
      <TextInput value={code} onChangeText={setCode} style={styles.input} />

      <Text style={styles.introText}>Enter your new password</Text>
      <TextInput
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.resetBtn} onPress={() => handleReset()}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={{color: '#fff'}}>Reset Password</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  screenHeader: {
    paddingBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
  },

  backButton: {},

  title: {
    fontSize: 17,
    fontWeight: '600',
  },

  rowIcon: {
    width: 30,
    marginRight: 15,
    textAlign: 'center',
  },

  introText: {
    marginBottom: 15,
    fontSize: 15,
    fontWeight: '500',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    color: '#000',
  },

  resetBtn: {
    backgroundColor: '#12994a',
    paddingVertical: 12,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default ResetPasswordScreen;
