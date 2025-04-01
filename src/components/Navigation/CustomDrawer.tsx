import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import {DrawerContentComponentProps} from '@react-navigation/drawer';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Text style={styles.closeText}>Close ✕</Text>
        </TouchableOpacity>
      </View>

      {/* Menu Sections */}
      <View style={styles.menu}>
        <Text style={styles.menuTitle}>Inbox | Settings | Help</Text>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#2D8D4E',
  },

  header: {
    padding: 15,
    alignItems: 'flex-end',
  },

  closeText: {
    color: '#fff',
    fontSize: 18,
  },

  menu: {
    paddingHorizontal: 20,
  },

  menuTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default CustomDrawer;
