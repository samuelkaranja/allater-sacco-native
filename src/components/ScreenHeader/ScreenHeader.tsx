import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Props = {
  route: never;
  title: string;
};

const ScreenHeader: React.FC<Props> = ({route, title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.screenHeader}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate(route)}>
        <FontAwesome
          name="angle-left"
          size={28}
          color="#000"
          style={styles.rowIcon}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        onPress={() => console.log('Notifications Clicked')}
        style={styles.rowIcon}>
        <FontAwesome
          name="bell"
          size={20}
          color="#000"
          style={styles.rowIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screenHeader: {
    paddingTop: 25,
    paddingBottom: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {},

  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  rowIcon: {
    width: 30,
    marginRight: 15,
    textAlign: 'center',
  },
});

export default ScreenHeader;
