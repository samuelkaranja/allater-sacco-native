import {DrawerNavigationProp} from '@react-navigation/drawer';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HomeStackParamList} from '../navigation/type/navigationTypes';
import Header from '../components/Header/Header';

type InvestingScreenNavigationProps = DrawerNavigationProp<
  HomeStackParamList,
  'Investing'
>;

interface Props {
  navigation: InvestingScreenNavigationProps;
}

const InvestingScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Text style={{textAlign: 'center', fontSize: 20, marginTop: 20}}>
        Investing Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});

export default InvestingScreen;
