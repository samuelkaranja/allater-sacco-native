import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/AppNavigator';

interface LoansCardProps {
  amountDue: number;
  loanLimit: number;
}

const LoansCard: React.FC<LoansCardProps> = ({amountDue, loanLimit}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate('Account')}>
      <View>
        <Text style={styles.title}>💳 Loans</Text>
      </View>

      <View>
        <Text style={styles.text}>
          Amount Due: Ksh {amountDue.toLocaleString()}
        </Text>
        <Text style={styles.text}>
          Loan Limit: Ksh {loanLimit.toLocaleString()}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3D3D3D',
    padding: 20,
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
    fontSize: 14,
  },
});

export default LoansCard;
