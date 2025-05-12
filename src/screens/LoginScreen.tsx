import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RootStackParamList} from '../navigation/type/navigationTypes';
import {Controller, useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../store/features/auth/authSlice';
import Toast from 'react-native-toast-message';
import {AppDispatch, RootState} from '../store/store';

type LoginScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

interface Props {
  navigation: LoginScreenNavigationProps;
}

interface LoginFormInputs {
  phonenumber: string;
  password: string;
}

const LoginScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {loading} = useSelector((state: RootState) => state.auth);

  const [secureText, setSecureText] = useState(true);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    if (!data.phonenumber || !data.password) {
      Toast.show({
        type: 'error',
        text1: 'Validation Error',
        text2: 'Please fill in all fields.',
        position: 'top', // or 'bottom'
        visibilityTime: 7000, // duration in ms
        autoHide: true,
      });
      return;
    }

    dispatch(loginUser(data)).then((res: any) => {
      if (res.meta.requestStatus === 'fulfilled') {
        Toast.show({
          type: 'success',
          text1: 'Login Successful',
          text2: 'Welcome back!',
          position: 'top',
        });
        navigation.navigate('MainApp');
      } else {
        Toast.show({
          type: 'error',
          text1: 'Login Failed',
          text2: res.payload,
          position: 'top',
        });
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
        />
      </View>

      <Text style={styles.title}>Login Here</Text>
      <Text style={styles.subtitle}>Please Enter your Details Below</Text>

      {/* Phone Number Input */}
      <View style={styles.inputContainer}>
        <Icon name="phone" size={20} color="#777" style={styles.icon} />
        <Controller
          control={control}
          name="phonenumber"
          rules={{required: 'Phone number is required'}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="#888"
              keyboardType="phone-pad"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
      </View>
      {errors.phonenumber && (
        <Text style={styles.errorText}>{errors.phonenumber.message}</Text>
      )}

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#777" style={styles.icon} />
        <Controller
          control={control}
          name="password"
          rules={{required: 'Password is required'}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry={secureText}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
      </View>
      {errors.password && (
        <Text style={styles.errorText}>{errors.password.message}</Text>
      )}

      {/* Submit Button */}
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={handleSubmit(onSubmit)}
        disabled={loading}>
        <Text style={styles.buttonText}>
          {loading ? 'Logging in.....' : 'Login'}
        </Text>
      </TouchableOpacity>

      <View style={styles.linksContainer}>
        <TouchableOpacity>
          <Text style={styles.linkText}>Reset Password</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>Need Help?</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text
          style={styles.signupText}
          onPress={() => navigation.navigate('Register')}>
          Don't have an account?{' '}
          <Text style={styles.signupLink}>Create an Account Here</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  logoImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 30,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
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
  },

  loginBtn: {
    backgroundColor: '#12994a',
    paddingVertical: 12,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 40,
  },

  linkText: {
    color: '#008000',
    fontSize: 14,
    textDecorationLine: 'underline',
  },

  signupText: {
    marginTop: 40,
    fontSize: 14,
  },

  signupLink: {
    color: '#008000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  errorText: {
    color: 'red',
    textAlign: 'left',
    alignSelf: 'stretch',
    paddingLeft: 10,
    paddingBottom: 10,
  },
});

export default LoginScreen;
