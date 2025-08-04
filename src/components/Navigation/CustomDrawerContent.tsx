import React, {useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {logout} from '../../store/features/auth/authSlice';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import LinearGradient from 'react-native-linear-gradient';

const InboxScreen = () => {
  return (
    <View>
      <Text>Inbox Screen</Text>
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
};

const HelpScreen = () => {
  return (
    <View>
      <Text>Help Screen</Text>
    </View>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

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
    <LinearGradient
      colors={['#005A5B', '#1CB5E0']} // adjust colors as needed
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={{flex: 1}}>
      <DrawerContentScrollView {...props} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.header}>
          <Text></Text>
          <TouchableOpacity
            onPress={() => props.navigation.closeDrawer()}
            style={styles.closeBtn}>
            <Text style={styles.title}>Close</Text>
            <Ionicons name="close" size={17} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.tabRow}>
          <TouchableOpacity onPress={InboxScreen}>
            <Text style={styles.tab}>Inbox</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={SettingsScreen}>
            <Text style={styles.tab}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={HelpScreen}>
            <Text style={styles.tab}>Help</Text>
          </TouchableOpacity>
        </View>

        <DrawerItemList {...props} />

        <View>
          <Pressable
            onPress={() =>
              props.navigation.navigate('Home', {
                screen: 'Home',
                params: {
                  screen: 'Contact',
                },
              })
            }
            style={({pressed}) => [styles.button, pressed && styles.pressed]}>
            <View style={styles.tabContainer}>
              <Icon name="address-card" size={17} color={'white'} />
              <Text style={styles.tab}>Contact</Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() =>
              props.navigation.navigate('Home', {
                screen: 'Home',
                params: {
                  screen: 'Investing',
                },
              })
            }
            style={({pressed}) => [styles.button, pressed && styles.pressed]}>
            <View style={styles.tabContainer}>
              <Icon name="money" size={17} color={'white'} />
              <Text style={styles.tab}>Investing</Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() =>
              props.navigation.navigate('Home', {
                screen: 'Home',
                params: {
                  screen: 'Locate',
                },
              })
            }
            style={({pressed}) => [styles.button, pressed && styles.pressed]}>
            <View style={styles.tabContainer}>
              <Icon name="location-arrow" size={23} color={'white'} />
              <Text style={styles.tab}>Locate</Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() =>
              props.navigation.navigate('Home', {
                screen: 'Home',
                params: {
                  screen: 'About',
                },
              })
            }
            style={({pressed}) => [styles.button, pressed && styles.pressed]}>
            <View style={styles.tabContainer}>
              <Icon name="users" size={17} color={'white'} />
              <Text style={styles.tab}>About</Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() =>
              props.navigation.navigate('Home', {
                screen: 'Home',
                params: {
                  screen: 'Faq',
                },
              })
            }
            style={({pressed}) => [styles.button, pressed && styles.pressed]}>
            <View style={styles.tabContainer}>
              <Icon name="question-circle" size={23} color={'white'} />
              <Text style={styles.tab}>FAQs</Text>
            </View>
          </Pressable>
        </View>

        {/* Logout Button */}
        <Pressable
          onPress={handleLogout}
          style={({pressed}) => [styles.button, pressed && styles.pressed]}>
          <View style={styles.tabContainer}>
            <Icon name="sign-out" size={20} color="white" />
            <Text style={styles.tab}>Logout</Text>
          </View>
        </Pressable>
      </DrawerContentScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },

  closeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },

  title: {
    fontSize: 13,
    color: 'white',
    fontWeight: 'bold',
  },

  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 30,
  },

  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  tab: {
    color: 'white',
    fontSize: 16,
  },

  button: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 50,
    marginTop: 8,
  },

  pressed: {
    backgroundColor: '#0b6b35',
  },
});

export default CustomDrawerContent;
