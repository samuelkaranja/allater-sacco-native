import React from 'react';
import {Text, View, Dimensions, StyleSheet, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');

type LoansCardProps = {
  title: string;
  balance: number;
  account: string;
};

const LoansCard: React.FC<LoansCardProps> = ({title, account, balance}) => {
  return (
    <View style={styles.cardContainer}>
      <LinearGradient
        colors={['rgba(145, 145, 145, 0.1)', 'rgba(145, 145, 145, 0.1)']}
        style={styles.glassCard}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.number}>Acc: {account}</Text>

        <View style={styles.loanInfo}>
          <View>
            <Text style={styles.label}>Amount Due</Text>
            <Text style={styles.balance}>Kshs {balance.toFixed(2)}</Text>
          </View>

          {/* <View style={{marginTop: 5}}>
            <Text style={styles.label}>Loan Limit</Text>
            <Text style={styles.balance}>Kshs {balance.toFixed(2)}</Text>
          </View> */}
        </View>

        <Pressable style={styles.infoBtn}>
          <Text style={styles.visa}>Coming Soon</Text>
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
    backgroundColor: '#d3d3d3',
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
  loanInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
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
    bottom: 18,
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

export default LoansCard;
