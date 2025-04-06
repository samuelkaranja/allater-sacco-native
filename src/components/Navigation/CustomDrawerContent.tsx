import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DrawerContentComponentProps} from '@react-navigation/drawer';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.title}>Allater Sacco</Text>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Ionicons name="close" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.tabRow}>
        <Text style={styles.tab}>Inbox</Text>
        <Text style={styles.tab}>Settings</Text>
        <Text style={styles.tab}>Help</Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'green',
  },

  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },

  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: 'green',
  },

  tab: {
    color: 'white',
    fontSize: 16,
  },
});

export default CustomDrawerContent;
