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
        <Icon
          name="plus-circle"
          size={20}
          color={'white'}
          style={styles.icon}
        />
        <Text style={styles.iconText}>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Withdraw')}>
        <Icon
          name="minus-circle"
          size={20}
          color={'white'}
          style={styles.icon}
        />
        <Text style={styles.iconText}>Withdraw</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Icon name="send" size={20} color={'white'} style={styles.icon} />
        <Text style={styles.iconText}>Transfer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#27ae60',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    borderRadius: 16,
    padding: 18,
  },

  button: {
    alignItems: 'center',
  },

  label: {
    marginTop: 6,
    fontSize: 12,
  },

  icon: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  iconText: {
    fontSize: 13,
    fontWeight: 500,
    color: '#fff',
  },
});

export default ActionButtons;
