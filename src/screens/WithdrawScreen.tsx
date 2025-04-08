import {DrawerNavigationProp} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HomeStackParamList} from '../navigation/type/navigationTypes';
import Header from '../components/Header/Header';
import WithdrawForm from '../components/Withdraw/WithdrawForm';

type WithdrawScreenNavigationProps = DrawerNavigationProp<
  HomeStackParamList,
  'Withdraw'
>;

interface Props {
  navigation: WithdrawScreenNavigationProps;
}

const WithdrawScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <Text style={styles.title}>Withdraw To Mpesa</Text>

      <WithdrawForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#0D5C63',
    textAlign: 'center',
  },
});

export default WithdrawScreen;
