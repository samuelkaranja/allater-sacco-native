import React from 'react';
import {Text, View, Dimensions, StyleSheet, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {HomeStackParamList} from '../../navigation/type/navigationTypes';

const {width} = Dimensions.get('window');

type SharesCardProps = {
  title: string;
  balance: number;
  account: string;
};

const SharesCard: React.FC<SharesCardProps> = ({title, balance, account}) => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
  return (
    <View style={styles.cardContainer}>
      <LinearGradient
        colors={['rgba(12, 12, 12, 0.1)', 'rgba(5, 5, 5, 0.05)']}
        style={styles.glassCard}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.number}>{account}</Text>

        <View style={styles.sharesInfo}>
          <View>
            <Text style={styles.label}>No of shares</Text>
            <Text style={styles.balance}>{balance.toFixed(2)} Shares</Text>
          </View>

          <View style={{marginTop: 5}}>
            <Text style={styles.label}>Shares Worth</Text>
            <Text style={styles.balance}>Kshs {balance.toFixed(2)}</Text>
          </View>
        </View>

        <Pressable
          style={styles.infoBtn}
          onPress={() => navigation.navigate('Shares')}>
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
  sharesInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
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
  },
  visa: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

export default SharesCard;
