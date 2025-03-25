import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store/store';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  nextStep,
  prevStep,
  updatedField,
} from '../store/features/auth/registerSlice';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const {
    step,
    fullName,
    phoneNumber,
    idNumber,
    email,
    password,
    confirmPassword,
  } = useSelector((state: RootState) => state.register);

  const handleNext = () => dispatch(nextStep());
  const handlePrev = () => dispatch(prevStep());

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logoImage}
          />
        </View>

        {/* STEP 1: Personal Details */}
        {step === 1 && (
          <>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Personal details</Text>

            {/* Full Name Input */}
            <View>
              <Text style={styles.inputLabel}>
                Full Names* (As they appear on your id)
              </Text>
              <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="#777" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="John Doe"
                  placeholderTextColor="#888"
                  value={fullName}
                  onChangeText={text =>
                    dispatch(updatedField({field: 'fullName', value: text}))
                  }
                />
              </View>
            </View>

            {/* Phone Number Input */}
            <View>
              <Text style={styles.inputLabel}>Phone Number*</Text>
              <View style={styles.inputContainer}>
                <Icon name="phone" size={20} color="#777" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="07xxxxxxxx"
                  placeholderTextColor="#888"
                  keyboardType="phone-pad"
                  value={phoneNumber}
                  onChangeText={text =>
                    dispatch(updatedField({field: 'phoneNumber', value: text}))
                  }
                />
              </View>
            </View>

            {/* ID Number Input */}
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
                  value={idNumber}
                  onChangeText={text =>
                    dispatch(updatedField({field: 'idNumber', value: text}))
                  }
                />
              </View>
            </View>

            {/* Email Address Input */}
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
                  value={email}
                  onChangeText={text =>
                    dispatch(updatedField({field: 'email', value: text}))
                  }
                />
              </View>
            </View>

            {/* Next Button */}
            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>

            <Text>By creating and account, you agree to</Text>
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

        {/* STEP 2: Secure Account */}

        {step === 2 && (
          <>
            <Text style={styles.title}>Secure Your Account</Text>
            <Text style={styles.subtitle}>
              Let us create a password for your account
            </Text>

            {/* Password Input */}
            <View>
              <Text style={styles.inputLabel}>Password*</Text>
              <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#777" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="******"
                  placeholderTextColor="#888"
                  secureTextEntry={true}
                  value={password}
                  onChangeText={text =>
                    dispatch(updatedField({field: 'password', value: text}))
                  }
                />
              </View>
            </View>

            {/* Confirm Password Input */}
            <View>
              <Text style={styles.inputLabel}>Confirm Password*</Text>
              <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#777" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="******"
                  placeholderTextColor="#888"
                  secureTextEntry={true}
                  value={confirmPassword}
                  onChangeText={text =>
                    dispatch(
                      updatedField({field: 'confirmPassword', value: text}),
                    )
                  }
                />
              </View>
            </View>

            {/* Navigation Buttons */}
            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <Text style={styles.buttonText}>DONE</Text>
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
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'center',
  },

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
    marginBottom: 15,
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
    fontWeight: 500,
  },

  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
    padding: 5,
  },

  button: {
    backgroundColor: 'green',
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
});

export default RegisterScreen;
