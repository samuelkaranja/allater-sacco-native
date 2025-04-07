import React from 'react';
import {Image, TouchableOpacity, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation?.openDrawer()}
        style={styles.iconButton}>
        <Icon name="bars" size={18} color="#12994a" />
      </TouchableOpacity>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={styles.headerImage}
      />
      <TouchableOpacity
        onPress={() => console.log('Notifications Clicked')}
        style={styles.iconButton}>
        <Icon name="bell" size={18} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20,
  },

  iconButton: {
    padding: 10,
  },

  headerImage: {
    width: 50,
    height: 50,
    objectFit: 'cover',
  },
});

export default Header;
