import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {HomeStackParamList} from '../../navigation/type/navigationTypes';

const ActionButtons: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Save')}>
        <Icon name="plus" size={18} color={'white'} style={styles.icon} />
        <Text style={styles.iconText}>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Withdraw')}>
        <Icon name="minus" size={18} color={'white'} style={styles.icon} />
        <Text style={styles.iconText}>Withdraw</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Icon name="send" size={18} color={'white'} style={styles.icon} />
        <Text style={styles.iconText}>Transfer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
  },

  button: {
    alignItems: 'center',
  },

  label: {
    marginTop: 6,
    fontSize: 12,
  },

  icon: {
    marginBottom: 7,
    borderRadius: 50,
    padding: 14,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },

  iconText: {
    fontSize: 12,
    fontWeight: 400,
    color: '#fff',
  },
});

export default ActionButtons;
