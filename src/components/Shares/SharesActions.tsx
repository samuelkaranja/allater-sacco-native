import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {HomeStackParamList} from '../../navigation/type/navigationTypes';

const SharesActions: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('BuyShares')}>
        <Icon name="plus" size={18} color={'white'} style={styles.icon} />
        <Text style={styles.iconText}>Buy Shares</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Icon name="minus" size={18} color={'white'} style={styles.icon} />
        <Text style={styles.iconText}>Sell Shares</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Icon name="exchange" size={18} color={'white'} style={styles.icon} />
        <Text style={styles.iconText}>Transfer Shares</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },

  button: {
    alignItems: 'center',
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

export default SharesActions;
