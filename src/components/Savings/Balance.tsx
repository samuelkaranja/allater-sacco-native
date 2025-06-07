import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButtons from './ActionButtons';

interface Props {
  balance: number;
  accountNumber: string;
}

const BalanceCard: React.FC<Props> = ({balance, accountNumber}) => {
  return (
    <View style={styles.card}>
      <View style={styles.intro}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name="credit-card"
            size={17}
            color={'white'}
            style={styles.icon}
          />
          <Text style={styles.label}>Savings balance</Text>
        </View>

        <Text style={styles.account}>
          <Text style={{fontWeight: '500'}}>Acc:</Text> {accountNumber}
        </Text>
      </View>

      <Text style={styles.balance}>
        <Text style={styles.currency}>Kes </Text>
        {balance.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Text>

      <ActionButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#27ae60',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 25,
    //padding: 35,
    //alignItems: 'center',
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
    fontSize: 15,
    fontWeight: 600,
    color: '#fff',
  },

  balance: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#fff',
    textAlign: 'center',
  },

  currency: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  account: {
    fontSize: 15,
    color: '#fff',
  },
});

export default BalanceCard;
