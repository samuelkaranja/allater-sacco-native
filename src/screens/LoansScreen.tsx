// screens/LoanScreen.tsx
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import LoanSummaryCard from '../components/Loan/LoanSummaryCard';
import LoanActionButton from '../components/Loan/LoanActionButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import {HomeStackParamList} from '../navigation/type/navigationTypes';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import ScreenHeader from '../components/ScreenHeader/ScreenHeader';

type LoanScreenNavigationProps = DrawerNavigationProp<
  HomeStackParamList,
  'Loan'
>;

interface Props {
  navigation: LoanScreenNavigationProps;
}

const LoanScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScreenHeader route="HomeMain" title="Loans Account" />

      <Text style={styles.intro}>Loans</Text>
      {/* Loan Summary Card */}
      <LoanSummaryCard amountDue={0} limit={0} />

      {/* Loan Action Buttons */}
      <View style={styles.actionContainer}>
        <LoanActionButton title="Request Loan" onPress={() => {}} />
        <LoanActionButton title="Pay Loan" onPress={() => {}} />
        <LoanActionButton title="Check Limit" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20,
  },

  iconButton: {
    padding: 10,
  },

  headerImage: {
    width: 50,
    height: 50,
    objectFit: 'cover',
  },

  intro: {
    paddingLeft: 10,
    paddingBottom: 8,
    fontSize: 19,
    fontWeight: 500,
  },

  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default LoanScreen;
