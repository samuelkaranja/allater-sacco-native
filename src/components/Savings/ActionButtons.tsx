import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RootStackParamList} from '../../navigation/type/navigationTypes';

const ActionButtons: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Save')}>
        <Icon name="arrow-down" size={15} color={'white'} style={styles.icon} />
        <Text style={styles.iconText}>Deposit</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Withdraw')}>
        <Icon name="arrow-up" size={15} color={'white'} style={styles.icon} />
        <Text style={styles.iconText}>Withdraw</Text>
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

  icon: {
    borderRadius: 10,
    padding: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    marginBottom: 5,
  },

  iconText: {
    fontSize: 14,
    fontWeight: 600,
    color: '#fff',
  },
});

export default ActionButtons;
