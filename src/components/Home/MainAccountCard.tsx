import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface MainAccountCardProps {
  balance: number;
}

const MainAccountCard: React.FC<MainAccountCardProps> = ({balance}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.main}>Main Account</Text>
      <View style={styles.card}>
        <Text style={styles.title}>💰 Savings Account Balance</Text>
        <Text style={styles.balance}>
          <Text style={styles.floatingText}>Ksh</Text>
          {balance.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Text>
      </View>
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#12994a',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  floatingText: {
    position: 'absolute',
    left: 0,
    top: 0,
    fontSize: 15,
  },

  balance: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 400,
    marginTop: 5,
  },
});

export default MainAccountCard;
