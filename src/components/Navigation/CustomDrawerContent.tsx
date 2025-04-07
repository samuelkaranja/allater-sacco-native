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

  return (
    <DrawerContentScrollView {...props}>
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
    </DrawerContentScrollView>
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
