import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButtons from './ActionButtons';

interface Props {
  balance: number;
  accountNumber: string;
}

const BalanceCard: React.FC<Props> = ({balance, accountNumber}) => {
  return (
    <LinearGradient
      colors={['#005A5B', '#1CB5E0']} // gradient background based on image
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.card}>
      <View style={styles.intro}>
        <Text style={styles.account}>
          <Text style={{fontWeight: '500'}}>Acc:</Text> {accountNumber}
        </Text>
      </View>
      <Text style={styles.label}>Savings balance</Text>
      <Text style={styles.balance}>
        <Text style={styles.currency}>Kes </Text>
        {balance.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Text>

      <ActionButtons />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 25,
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 15,
  },

  intro: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },

  icon: {
    marginRight: 8,
  },

  label: {
    fontSize: 14,
    fontWeight: 600,
    color: '#fff',
    textAlign: 'center',
  },

  balance: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center',
  },

  currency: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  account: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 10,
  },
});

export default BalanceCard;
