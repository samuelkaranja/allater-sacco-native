import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RootState} from '../store/store';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  BottomTabParamList,
  HomeStackParamList,
} from '../navigation/type/navigationTypes';
import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

type ProfileInfoScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<HomeStackParamList, 'Member'>,
  BottomTabNavigationProp<BottomTabParamList>
>;

interface Props {
  navigation: ProfileInfoScreenNavigationProp;
}

const ProfileInfo: React.FC<Props> = ({navigation}) => {
  const profile = useSelector((state: RootState) => state.auth.user);

  const formattedJoinedDate = profile?.createdAt
    ? new Date(profile.createdAt).toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      })
    : '—';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Profile')}>
          <FontAwesome
            name="angle-left"
            size={28}
            color="#000"
            style={styles.rowIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>My Profile</Text>
        <Text>Edit</Text>
      </View>
      <Text style={styles.details}>Account Details</Text>

      {/* Email */}
      <View style={styles.row}>
        <FontAwesome
          name="user"
          size={22}
          color="#ccc"
          style={styles.rowIcon}
        />
        <View style={styles.rowText}>
          <Text style={styles.rowLabel}>Name</Text>
          <Text style={styles.rowValue}>{profile?.fullname || '—'}</Text>
        </View>
      </View>

      {/* Email */}
      <View style={styles.row}>
        <FontAwesome
          name="envelope"
          size={22}
          color="#ccc"
          style={styles.rowIcon}
        />
        <View style={styles.rowText}>
          <Text style={styles.rowLabel}>Email</Text>
          <Text style={styles.rowValue}>{profile?.email || '—'}</Text>
        </View>
      </View>

      {/* Mobile */}
      <View style={styles.row}>
        <FontAwesome
          name="phone"
          size={20}
          color="#ccc"
          style={styles.rowIcon}
        />
        <View style={styles.rowText}>
          <Text style={styles.rowLabel}>Mobile</Text>
          <Text style={styles.rowValue}>{profile?.phonenumber || '—'}</Text>
        </View>
      </View>

      {/* Mobile */}
      <View style={styles.row}>
        <FontAwesome
          name="credit-card"
          size={20}
          color="#ccc"
          style={styles.rowIcon}
        />
        <View style={styles.rowText}>
          <Text style={styles.rowLabel}>ID Number</Text>
          <Text style={styles.rowValue}>{profile?.idnumber || '—'}</Text>
        </View>
      </View>

      {/* Joined */}
      <View style={styles.row}>
        <FontAwesome
          name="calendar"
          size={20}
          color="#ccc"
          style={styles.rowIcon}
        />
        <View style={styles.rowText}>
          <Text style={styles.rowLabel}>Joined</Text>
          <Text style={styles.rowValue}>{formattedJoinedDate}</Text>
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

  header: {
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

  details: {
    paddingLeft: 15,
    paddingBottom: 20,
    fontSize: 18,
    fontWeight: '500',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },

  rowIcon: {
    width: 30,
    marginRight: 15,
    textAlign: 'center',
  },

  rowText: {
    flex: 1,
  },

  rowLabel: {
    fontSize: 14,
    color: '#888',
    paddingBottom: 4,
  },

  rowValue: {
    fontSize: 16,
    color: '#333',
  },
});

export default ProfileInfo;
