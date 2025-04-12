import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {HomeStackParamList} from '../../navigation/type/navigationTypes';

const ActionButtons: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Icon name="money" size={25} color={'black'} style={styles.icon} />
        <Text style={styles.iconText}>Withdraw</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Icon name="exchange" size={25} color={'black'} style={styles.icon} />
        <Text style={styles.iconText}>Transfer</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Icon
          name="credit-card"
          size={25}
          color={'black'}
          style={styles.icon}
        />
        <Text style={styles.iconText}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },

  button: {
    alignItems: 'center',
  },

  label: {
    marginTop: 6,
    fontSize: 12,
  },

  icon: {
    marginBottom: 5,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 13,
  },

  iconText: {
    fontSize: 13,
    color: '#333',
  },
});

export default ActionButtons;
