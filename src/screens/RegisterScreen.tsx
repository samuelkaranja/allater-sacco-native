import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useForm, Controller} from 'react-hook-form';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  nextStep,
  prevStep,
  resetForm,
} from '../store/features/auth/registerSlice';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/type/navigationTypes';
import axios from 'axios';
import Toast from 'react-native-toast-message';

type FormData = {
  fullname: string;
  phonenumber: string;
  idnumber: string;
  email: string;
  password: string;
  confirmpassword: string;
};

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      fullname: '',
      phonenumber: '',
      idnumber: '',
      email: '',
      password: '',
      confirmpassword: '',
    },
  });

  const handleNext = (data: FormData) => {
    console.log('Step 1 Data:', data);
    setStep(2);
    dispatch(nextStep());
  };

  const handlePrev = () => {
    setStep(1);
    dispatch(prevStep());
  };

  const handleFinalSubmit = async (data: FormData) => {
    const payload = {
      fullname: data.fullname,
      phonenumber: data.phonenumber,
      idnumber: data.idnumber,
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post(
        'https://allater-sacco-backend.onrender.com/auth/signup',
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const result = await response.data;
      console.log('Response:', result);
      dispatch(resetForm());
      navigation.navigate('Login');

      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Account created successfully 🎉',
        position: 'top', // or 'bottom'
        visibilityTime: 7000, // duration in ms
        autoHide: true,
      });
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || 'Something went wrong';
        console.error('Signup failed:', message);

        Toast.show({
          type: 'error',
          text1: 'Signup Failed',
          text2: message.toString(),
          position: 'top', // or 'bottom'
          visibilityTime: 7000, // duration in ms
          autoHide: true,
        });
      } else {
        console.error('Unexpected error:', error);
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'An unexpected error occurred. Please try again.',
          position: 'top', // or 'bottom'
          visibilityTime: 7000, // duration in ms
          autoHide: true,
        });
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logoImage}
          />
        </View>

        {step === 1 && (
          <>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Personal details</Text>

            {/* Full Name */}
            <Controller
              control={control}
              name="fullname"
              rules={{required: 'Full name is required'}}
              render={({field: {onChange, onBlur, value}}) => (
                <View>
                  <Text style={styles.inputLabel}>
                    Full Names* (As they appear on your id)
                  </Text>
                  <View style={styles.inputContainer}>
                    <Icon
                      name="user"
                      size={20}
                      color="#777"
                      style={styles.icon}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="John Doe"
                      placeholderTextColor="#888"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </View>
                  {errors.fullname && (
                    <Text style={styles.errorText}>
                      {errors.fullname.message}
                    </Text>
                  )}
                </View>
              )}
            />

            {/* Phone Number */}
            <Controller
              control={control}
              name="phonenumber"
              rules={{required: 'Phone number is required'}}
              render={({field: {onChange, onBlur, value}}) => (
                <View>
                  <Text style={styles.inputLabel}>Phone Number*</Text>
                  <View style={styles.inputContainer}>
                    <Icon
                      name="phone"
                      size={20}
                      color="#777"
                      style={styles.icon}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="07xxxxxxxx"
                      placeholderTextColor="#888"
                      keyboardType="phone-pad"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </View>
                  {errors.phonenumber && (
                    <Text style={styles.errorText}>
                      {errors.phonenumber.message}
                    </Text>
                  )}
                </View>
              )}
            />

            {/* ID Number */}
            <Controller
              control={control}
              name="idnumber"
              rules={{required: 'ID number is required'}}
              render={({field: {onChange, onBlur, value}}) => (
                <View>
                  <Text style={styles.inputLabel}>ID Number*</Text>
                  <View style={styles.inputContainer}>
                    <Icon
                      name="id-card"
                      size={20}
                      color="#777"
                      style={styles.icon}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="55555555"
                      placeholderTextColor="#888"
                      keyboardType="numeric"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </View>
                  {errors.idnumber && (
                    <Text style={styles.errorText}>
                      {errors.idnumber.message}
                    </Text>
                  )}
                </View>
              )}
            />

            {/* Email Address */}
            <Controller
              control={control}
              name="email"
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <View>
                  <Text style={styles.inputLabel}>Email Address*</Text>
                  <View style={styles.inputContainer}>
                    <Icon
                      name="envelope"
                      size={20}
                      color="#777"
                      style={styles.icon}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="xyz@gmail.com"
                      placeholderTextColor="#888"
                      keyboardType="email-address"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </View>
                  {errors.email && (
                    <Text style={styles.errorText}>{errors.email.message}</Text>
                  )}
                </View>
              )}
            />

            {/* Next Button */}
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit(handleNext)}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>

            <Text>By creating an account, you agree to</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <Text style={styles.policy}>Privacy Policy</Text>
              </TouchableOpacity>
              <Text>&</Text>
              <TouchableOpacity>
                <Text style={styles.policy}>Terms of Use</Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        {step === 2 && (
          <>
            <Text style={styles.title}>Secure Your Account</Text>
            <Text style={styles.subtitle}>
              Let us create a password for your account
            </Text>

            {/* Password */}
            <Controller
              control={control}
              name="password"
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <View>
                  <Text style={styles.inputLabel}>Password*</Text>
                  <View style={styles.inputContainer}>
                    <Icon
                      name="lock"
                      size={20}
                      color="#777"
                      style={styles.icon}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="******"
                      placeholderTextColor="#888"
                      secureTextEntry
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </View>
                  {errors.password && (
                    <Text style={styles.errorText}>
                      {errors.password.message}
                    </Text>
                  )}
                </View>
              )}
            />

            {/* Confirm Password */}
            <Controller
              control={control}
              name="confirmpassword"
              rules={{
                required: 'Confirm password is required',
                validate: value =>
                  value === watch('password') || 'Passwords do not match',
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <View>
                  <Text style={styles.inputLabel}>Confirm Password*</Text>
                  <View style={styles.inputContainer}>
                    <Icon
                      name="lock"
                      size={20}
                      color="#777"
                      style={styles.icon}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="******"
                      placeholderTextColor="#888"
                      secureTextEntry
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </View>
                  {errors.confirmpassword && (
                    <Text style={styles.errorText}>
                      {errors.confirmpassword.message}
                    </Text>
                  )}
                </View>
              )}
            />

            {/* Submit & Back Buttons */}
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit(handleFinalSubmit)}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePrev}>
              <Text style={styles.linkText}>Back</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  logoImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 20,
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
  inputLabel: {
    color: '#000',
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '500',
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
    padding: 5,
  },
  button: {
    backgroundColor: '#12994a',
    paddingVertical: 12,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  policy: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  linkText: {
    color: '#008000',
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    marginLeft: 10,
    marginBottom: 5,
  },
});

export default RegisterScreen;
