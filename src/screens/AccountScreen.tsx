import {DrawerNavigationProp} from '@react-navigation/drawer';
import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {BottomTabParamList} from '../navigation/type/navigationTypes';
import Header from '../components/Header/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, AppDispatch} from '../store/store';
import {logout} from '../store/features/auth/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

type AccountScreenNavigationProps = DrawerNavigationProp<
  BottomTabParamList,
  'Profile'
>;

interface Props {
  navigation: AccountScreenNavigationProps;
}

const AccountScreen: React.FC<Props> = ({navigation}) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    dispatch(logout());
    navigation.reset({
      index: 0,
      routes: [{name: 'Login' as never}],
    });
    Toast.show({
      type: 'success',
      text1: 'Logout Successful',
      text2: 'You have logged out successfully.',
      position: 'top',
      visibilityTime: 3000,
      autoHide: true,
    });
  };

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <Header navigation={navigation} />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 23,
          fontWeight: '500',
        }}>
        Profile
      </Text>
      {/* User Information */}
      <View style={styles.header}>
        <Text style={styles.name}>{user ? user.fullname : null}</Text>
        <Text style={{marginTop: 10}}>{user?.role}</Text>
      </View>

      {/* Menu Options */}
      <View style={styles.menuList}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Home', {screen: 'Member'})}>
          <View style={styles.menuIconLabel}>
            <Ionicons name="person-outline" size={20} color="#555" />
            <Text style={styles.menuText}>Personal Details</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Home', {screen: 'Kin'})}>
          <View style={styles.menuIconLabel}>
            <Ionicons name="people-outline" size={20} color="#555" />
            <Text style={styles.menuText}>Next of kin</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#ccc" />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={20} color="#fff" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },

  header: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 100,
  },

  name: {
    fontSize: 18,
    fontWeight: '600',
  },

  menuList: {
    marginBottom: 20,
  },

  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 18,
    backgroundColor: '#ffffff',
    borderRadius: 0,
    marginVertical: 8,
    // iOS soft shadow
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.04,
    shadowRadius: 8,
    // Android soft shadow
    elevation: 1.5,
  },

  menuIconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuText: {
    fontSize: 14,
    marginLeft: 12,
  },

  logoutButton: {
    backgroundColor: '#2ecc71', // Green color
    paddingVertical: 14,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoutText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
    fontWeight: '600',
  },
});

export default AccountScreen;
