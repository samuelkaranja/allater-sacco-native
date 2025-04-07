import {DrawerNavigationProp} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HomeStackParamList} from '../navigation/type/navigationTypes';
import Header from '../components/Header/Header';

type ContactScreenNavigationProps = DrawerNavigationProp<
  HomeStackParamList,
  'Contact'
>;

interface Props {
  navigation: ContactScreenNavigationProps;
}

const ContactScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Text style={{textAlign: 'center', fontSize: 20, marginTop: 20}}>
        Contact Us Screen
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

export default ContactScreen;
