import {DrawerNavigationProp} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BottomTabParamList} from '../navigation/type/navigationTypes';
import Header from '../components/Header/Header';

type TransactScreenNavigationProps = DrawerNavigationProp<
  BottomTabParamList,
  'Transact'
>;

interface Props {
  navigation: TransactScreenNavigationProps;
}

const TransactScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Text style={{textAlign: 'center', fontSize: 20, marginTop: 20}}>
        Transact Screen
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

export default TransactScreen;
