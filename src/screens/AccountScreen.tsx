import {DrawerNavigationProp} from '@react-navigation/drawer';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {BottomTabParamList} from '../navigation/type/navigationTypes';
import Header from '../components/Header/Header';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';

type AccountScreenNavigationProps = DrawerNavigationProp<
  BottomTabParamList,
  'Profile'
>;

interface Props {
  navigation: AccountScreenNavigationProps;
}

const AccountScreen: React.FC<Props> = ({navigation}) => {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <Text
        style={{
          fontSize: 20,
          fontWeight: '500',
          textAlign: 'center',
        }}>
        My Profile
      </Text>

      <View style={styles.profileContainer}>
        <View>
          <Image
            source={
              user?.profilePic
                ? {uri: user?.profilePic}
                : require('../../assets/images/profile.jpg')
            }
            style={styles.avatar}
          />
        </View>
        <View>
          <Text style={{textAlign: 'left', fontSize: 20, marginTop: 20}}>
            {user ? user.fullname : null}
          </Text>
          <Text style={{textAlign: 'left', fontSize: 13, marginTop: 2}}>
            {user ? user.email : null}
          </Text>
          <Text style={{textAlign: 'left', fontSize: 13, marginTop: 2}}>
            {user ? user.phonenumber : null}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 30,
    marginRight: 15,
    marginTop: 20,
  },
});

export default AccountScreen;
