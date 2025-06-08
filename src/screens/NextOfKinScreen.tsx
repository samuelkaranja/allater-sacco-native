import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  SafeAreaView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  BottomTabParamList,
  HomeStackParamList,
} from '../navigation/type/navigationTypes';
import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import NextOfKinForm, {
  NextOfKinData,
} from '../components/NextOfKinForm/NextOfKinForm';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/store';
import {
  addNextOfKin,
  fetchNextOfKin,
  resetNextOfKinState,
} from '../store/features/nextOfKin/nextOfKinSlice';
import ScreenHeader from '../components/ScreenHeader/ScreenHeader';

type NextOfKinScreenNavigationProps = CompositeNavigationProp<
  StackNavigationProp<HomeStackParamList, 'Kin'>,
  BottomTabNavigationProp<BottomTabParamList>
>;

interface Props {
  navigation: NextOfKinScreenNavigationProps;
}

const NextOfKinScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isFormVisible, setIsFormVisible] = useState(false);

  const nextOfKinData = useSelector((state: RootState) => state.nextOfKin.data);

  const isNextOfKinAvailable =
    !!nextOfKinData &&
    !!nextOfKinData.firstName &&
    !!nextOfKinData.lastName &&
    !!nextOfKinData.phoneNumber &&
    !!nextOfKinData.relationship;

  useEffect(() => {
    dispatch(fetchNextOfKin());
  }, [dispatch]);

  const handleAdd = () => setIsFormVisible(true);
  const handleClose = () => setIsFormVisible(false);

  const handleSubmit = async (data: NextOfKinData) => {
    await dispatch(addNextOfKin(data));
    dispatch(fetchNextOfKin());
    dispatch(resetNextOfKinState());
    setIsFormVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader route="Profile" title="Next Of Kin" />

      {/* Next of Kin Info */}
      <View style={{marginTop: 50}}>
        {/* Name */}
        <View style={styles.row}>
          <FontAwesome
            name="user"
            size={22}
            color="#ccc"
            style={styles.rowIcon}
          />
          <View style={styles.rowText}>
            <Text style={styles.rowLabel}>Name</Text>
            <Text style={styles.rowValue}>
              {isNextOfKinAvailable
                ? `${nextOfKinData.firstName} ${nextOfKinData.lastName}`
                : 'Not provided'}
            </Text>
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
            <Text style={styles.rowValue}>
              {isNextOfKinAvailable ? nextOfKinData.email : 'Not provided'}
            </Text>
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
            <Text style={styles.rowValue}>
              {isNextOfKinAvailable
                ? nextOfKinData.phoneNumber
                : 'Not provided'}
            </Text>
          </View>
        </View>

        {/* Relationship */}
        <View style={styles.row}>
          <FontAwesome
            name="user"
            size={20}
            color="#ccc"
            style={styles.rowIcon}
          />
          <View style={styles.rowText}>
            <Text style={styles.rowLabel}>Relationship</Text>
            <Text style={styles.rowValue}>
              {isNextOfKinAvailable
                ? nextOfKinData.relationship
                : 'Not provided'}
            </Text>
          </View>
        </View>
      </View>

      {/* Show button only if not available */}
      {!isNextOfKinAvailable && (
        <View style={styles.wrapper}>
          <TouchableOpacity style={styles.addBtn} onPress={handleAdd}>
            <Text style={styles.btnText}>Add Next of Kin</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Modal Form */}
      <NextOfKinForm
        visible={isFormVisible}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },

  rowIcon: {
    width: 30,
    marginRight: 15,
    textAlign: 'center',
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

  wrapper: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },

  addBtn: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },

  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NextOfKinScreen;
