import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SharesActions from './SharesActions';

interface Props {
  shareAmount: number;
  noOfSharesBought: number;
  accountNumber: string;
}

const SharesSummaryCard: React.FC<Props> = ({
  accountNumber,
  shareAmount,
  noOfSharesBought,
}) => (
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
    <View style={styles.more}>
      <View>
        <Text style={styles.label}>Shares</Text>
        <Text style={styles.shares}>{noOfSharesBought} Shares</Text>
      </View>
      <View>
        <Text style={styles.label}>Shares Worth</Text>
        <Text style={styles.amount}>
          <Text style={{fontSize: 12}}>Kshs </Text>
          {shareAmount}
        </Text>
      </View>
    </View>
    <SharesActions />
  </LinearGradient>
);

const styles = StyleSheet.create({
  card: {
    width: '98%',
    borderRadius: 16,
    paddingVertical: 25,
    paddingHorizontal: 25,
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 15,
  },

  more: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  intro: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },

  account: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 10,
  },

  label: {
    fontSize: 23,
    fontWeight: '400',
    color: '#fff',
  },

  shares: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },

  amount: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
});

export default SharesSummaryCard;
