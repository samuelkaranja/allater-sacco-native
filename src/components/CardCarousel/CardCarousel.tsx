import React from 'react';
import {
  View,
  FlatList,
  Pressable,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');

type CardType = {
  id: string;
  title: string;
  balance: number;
  last4Digits: string;
  route: string;
};

const cards: CardType[] = [
  {
    id: '1',
    title: 'Savings',
    balance: 368.0,
    last4Digits: '4246',
    route: 'SavingsScreen',
  },
  {
    id: '2',
    title: 'Shares',
    balance: 125.5,
    last4Digits: '3381',
    route: 'SharesScreen',
  },
  {
    id: '3',
    title: 'Loans',
    balance: 750.75,
    last4Digits: '7123',
    route: 'LoansScreen',
  },
];

const CardCarousel: React.FC = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={cards}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToAlignment="start"
      decelerationRate="fast"
      pagingEnabled
      renderItem={({item}) => (
        <Pressable
          onPress={() => navigation.navigate(item.route as never)}
          style={styles.cardContainer}>
          <LinearGradient
            colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.05)']}
            style={styles.glassCard}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.number}>•••• {item.last4Digits}</Text>
            <View style={{marginTop: 20}}>
              <Text style={styles.label}>Current Balance</Text>
              <Text style={styles.balance}>${item.balance.toFixed(2)}</Text>
            </View>
            <Text style={styles.visa}>VISA</Text>
          </LinearGradient>
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: width * 0.75,
    height: 200,
    marginHorizontal: 10,
    marginVertical: 20,
    color: '#000',
  },
  glassCard: {
    flex: 1,
    borderRadius: 20,
    padding: 20,
    backgroundColor: 'rgba(12, 243, 174, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 1,
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowRadius: 10,
    // backdropFilter: 'blur(10px)', // works only on web; use custom blur on native
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
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
    fontSize: 22,
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

export default CardCarousel;
