import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {HomeStackParamList} from '../../navigation/type/navigationTypes';
import Icon from 'react-native-vector-icons/FontAwesome';

interface SharesCardProps {
  shares: number;
  worth: number;
}

const SharesCard: React.FC<SharesCardProps> = ({shares, worth}) => {
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();

  return (
    <Pressable onPress={() => navigation.navigate('Shares')}>
      <View style={styles.card}>
        <View>
          <Text style={styles.title}>📈 Shares</Text>
        </View>

        <View>
          <Text style={styles.text}>No. of shares: {shares}</Text>
          <Text style={styles.text}>
            Shares Worth: Ksh{' '}
            {worth.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
        </View>
        <View>
          <Icon name="angle-right" size={20} color={'white'} />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F4A825',
    paddingVertical: 25,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  text: {
    color: '#fff',
    fontSize: 15,
    paddingVertical: 1,
  },
});

export default SharesCard;
