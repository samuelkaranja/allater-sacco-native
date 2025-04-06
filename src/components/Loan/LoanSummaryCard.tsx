import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface LoanSummaryCardProps {
  amountDue: number;
  limit: number;
}

const LoanSummaryCard: React.FC<LoanSummaryCardProps> = ({
  amountDue,
  limit,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Loan Amount Due</Text>
      <Text style={styles.amount}>Ksh {amountDue.toFixed(2)}</Text>
      <View style={styles.limit}>
        <View>
          <Text style={styles.title}>Limit</Text>
          <Text style={styles.amount}>Ksh {limit.toFixed(2)}</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Coming Soon!</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#666',
    padding: 18,
    borderRadius: 10,
    margin: 10,
    elevation: 3,
  },

  title: {
    fontWeight: 'bold',
    color: '#fff',
  },

  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },

  limit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },

  badge: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginTop: 10,
  },

  badgeText: {
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default LoanSummaryCard;
