import React from 'react';
import {Pressable, Text, View, Dimensions, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

type LoansCardProps = {
  title: string;
  balance: number;
  account: string;
  route: string;
};

const LoansCard: React.FC<LoansCardProps> = ({
  title,
  account,
  balance,
  route,
}) => {
  const navigation = useNavigation();
  return (
    // <Pressable
    //   onPress={() => navigation.navigate(route as never)}
    //   style={styles.cardContainer}>
    <View style={styles.cardContainer}>
      <LinearGradient
        colors={['rgba(12, 12, 12, 0.1)', 'rgba(5, 5, 5, 0.05)']}
        style={styles.glassCard}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.number}>{account}</Text>

        <View style={{marginTop: 20}}>
          <Text style={styles.label}>Amount Due</Text>
          <Text style={styles.balance}>Kshs {balance.toFixed(2)}</Text>
        </View>

        <View style={{marginTop: 5}}>
          <Text style={styles.label}>Loan Limit</Text>
          <Text style={styles.balance}>Kshs {balance.toFixed(2)}</Text>
        </View>

        <Text style={styles.visa}>VISA</Text>
      </LinearGradient>
    </View>
    // </Pressable>
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
  visa: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default LoansCard;
