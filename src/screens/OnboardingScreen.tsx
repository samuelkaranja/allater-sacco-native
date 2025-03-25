import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../navigation/AppNavigator';

type OnboardingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'OnBoarding'
>;

interface Props {
  navigation: OnboardingScreenNavigationProp;
}

const OnboardingScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.onboardingImage}
      />
      <TouchableOpacity
        style={styles.createBtn}
        onPress={() => navigation.navigate('CreateAccount')}>
        <Text style={styles.createText}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },

  onboardingImage: {
    width: 300,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
  },

  createBtn: {
    backgroundColor: 'lightgreen',
    width: '90%',
    padding: 15,
    borderRadius: 50,
    marginBottom: 20,
  },

  createText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  loginBtn: {},

  loginText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 20,
    fontWeight: 600,
    textDecorationLine: 'underline',
  },
});

export default OnboardingScreen;
