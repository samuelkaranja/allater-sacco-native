import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/store';
import {
  forgotPassword,
  clearPasswordError,
  clearPasswordMessage,
} from '../store/features/auth/passwordSlice';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/type/navigationTypes';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/FontAwesome';

type ForgotPasswordScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'ForgotPassword'
>;

interface Props {
  navigation: ForgotPasswordScreenNavigationProps;
}

const ForgotPasswordScreen: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const {loading, error, message} = useSelector(
    (state: RootState) => state.password,
  );

  const handleSubmit = () => {
    if (!email.trim())
      return Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please enter your email',
        position: 'top', // or 'bottom'
        visibilityTime: 7000, // duration in ms
        autoHide: true,
      });

    dispatch(forgotPassword(email)).then((res: any) => {
      if (!res.error) {
        navigation.navigate('ResetPassword');
      }
    });
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
    <View style={styles.container}>
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
        <Text style={styles.title}>Forgot Password</Text>
      </View>

      <View>
        <Text style={styles.introText}>
          Enter your email to receive a reset code
        </Text>
        <View style={styles.inputContainer}>
          <Icon name="envelope" size={18} color="#777" style={styles.icon} />
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="xyz@gmail.com"
            placeholderTextColor="#888"
            onChangeText={setEmail}
            autoCapitalize="none"
            value={email}
          />
        </View>

        <TouchableOpacity
          style={styles.resetBtn}
          onPress={() => handleSubmit()}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={{color: '#fff'}}>Send Reset Code</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  screenHeader: {
    paddingTop: 25,
    paddingBottom: 20,
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

  resetBtn: {
    backgroundColor: '#12994a',
    paddingVertical: 12,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 50,
    paddingHorizontal: 15,
    marginBottom: 10,
    width: '100%',
  },

  icon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
    padding: 5,
  },
});

export default ForgotPasswordScreen;
