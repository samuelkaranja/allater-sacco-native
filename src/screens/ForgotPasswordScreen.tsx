import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/store';
import {
  forgotPassword,
  clearPasswordError,
  clearPasswordMessage,
} from '../store/features/auth/passwordSlice';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/type/navigationTypes';
//import ScreenHeader from '../components/ScreenHeader/ScreenHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
    if (!email.trim()) return Alert.alert('Error', 'Please enter your email');

    dispatch(forgotPassword(email)).then((res: any) => {
      if (!res.error) {
        navigation.navigate('ResetPassword');
      }
    });
  };

  useEffect(() => {
    if (error) {
      Alert.alert('Error', error);
      dispatch(clearPasswordError());
    }

    if (message) {
      Alert.alert('Success', message);
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
        <TextInput
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.resetBtn}
          onPress={() => handleSubmit()}>
          {loading ? (
            <ActivityIndicator size="large" color="#007bff" />
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

  resetBtn: {
    backgroundColor: '#12994a',
    paddingVertical: 12,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    color: '#000',
  },
});

export default ForgotPasswordScreen;
