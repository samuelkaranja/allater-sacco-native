import React, {useState} from 'react';
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

type NextOfKinScreenNavigationProps = CompositeNavigationProp<
  StackNavigationProp<HomeStackParamList, 'Kin'>,
  BottomTabNavigationProp<BottomTabParamList>
>;

interface Props {
  navigation: NextOfKinScreenNavigationProps;
}

const NextOfKinScreen: React.FC<Props> = ({navigation}) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAdd = () => setIsFormVisible(true);
  const handleClose = () => setIsFormVisible(false);

  const handleSubmit = (data: NextOfKinData) => {
    console.log('Submitted Next of Kin:', data);
    setIsFormVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
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
        <Text style={styles.title}>Next Of Kin</Text>
        <Text>Edit</Text>
      </View>

      <View style={styles.wrapper}>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => setIsFormVisible(true)}>
          <Text style={styles.btnText}>Add Next of Kin</Text>
        </TouchableOpacity>
      </View>

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

  header: {
    paddingTop: 25,
    paddingBottom: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {},

  title: {
    fontSize: 18,
    fontWeight: '600',
  },

  rowIcon: {
    width: 30,
    marginRight: 15,
    textAlign: 'center',
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
