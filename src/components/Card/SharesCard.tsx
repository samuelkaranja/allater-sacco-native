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
        colors={['#005A5B', '#1CB5E0']} // gradient background based on image
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.glassCard}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.number}>Acc: {account}</Text>

        <View style={styles.sharesInfo}>
          <View>
            <Text style={styles.label}>No of shares</Text>
            <Text style={styles.balance}>{balance} Shares</Text>
          </View>

          {/* <View style={{marginTop: 5}}>
            <Text style={styles.label}>Shares Worth</Text>
            <Text style={styles.balance}>Kshs {balance.toFixed(2)}</Text>
          </View> */}
        </View>

        {/* <Pressable
          style={styles.infoBtn}
          onPress={() => navigation.navigate('Shares')}>
          <Text style={styles.infoBtnText}>Details</Text>
        </Pressable> */}
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
    bottom: 18,
    right: 20,
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },

  infoBtnText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default SharesCard;
