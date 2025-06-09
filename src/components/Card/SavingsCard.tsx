import React from 'react';
import {Text, View, Dimensions, StyleSheet, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {HomeStackParamList} from '../../navigation/type/navigationTypes';

const {width} = Dimensions.get('window');

type SavingsCardProps = {
  title: string;
  balance: number;
  account: string;
};

const SavingsCard: React.FC<SavingsCardProps> = ({title, account, balance}) => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
  return (
    <View style={styles.cardContainer}>
      <LinearGradient
        colors={['rgba(12, 12, 12, 0.1)', 'rgba(5, 5, 5, 0.05)']}
        style={styles.glassCard}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.number}>Acc: {account}</Text>

        <View style={{marginTop: 20}}>
          <Text style={styles.label}>Current Balance</Text>
          <Text style={styles.balance}>Kshs {balance.toFixed(2)}</Text>
        </View>

        <Pressable
          style={styles.infoBtn}
          onPress={() => navigation.navigate('Savings')}>
          <Text style={styles.visa}>Details</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: width * 0.75,
    height: 200,
    marginRight: 20,
  },
  glassCard: {
    flex: 1,
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#12994a',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#fff',
  },
  number: {
    fontSize: 14,
    color: '#eee',
    marginTop: 4,
  },
  label: {
    fontSize: 12,
    color: '#ccc',
  },
  balance: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  infoBtn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  visa: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default SavingsCard;
