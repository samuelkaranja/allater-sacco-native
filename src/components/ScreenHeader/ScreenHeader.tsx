import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Props = {
  route?: string;
  title: string;
};

const ScreenHeader: React.FC<Props> = ({route, title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.screenHeader}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          if (route) {
            navigation.navigate(route as never);
          }
        }}>
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
          size={18}
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
    paddingBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {},

  title: {
    fontSize: 17,
    fontWeight: '600',
  },
  rowIcon: {
    width: 30,
    marginRight: 15,
    textAlign: 'center',
  },
});

export default ScreenHeader;
