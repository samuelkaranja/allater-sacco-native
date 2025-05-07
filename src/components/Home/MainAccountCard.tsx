import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {HomeStackParamList} from '../../navigation/type/navigationTypes';

interface MainAccountCardProps {
  balance: number;
}

const MainAccountCard: React.FC<MainAccountCardProps> = ({balance}) => {
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.main}>Main Account</Text>
      <Pressable
        style={styles.card}
        onPress={() => navigation.navigate('Savings')}>
        <View></View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.title}>💰 Savings Account Balance</Text>
          <Text style={styles.balance}>
            <Text style={styles.floatingText}>Ksh</Text>{' '}
            {balance.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
        </View>

        <View>
          <Icon name="angle-right" size={20} color={'white'} />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  main: {
    fontSize: 14,
    fontWeight: 400,
    paddingBottom: 4,
  },

  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#12994a',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  floatingText: {
    fontSize: 18,
  },

  balance: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 400,
    marginTop: 5,
  },
});

export default MainAccountCard;
