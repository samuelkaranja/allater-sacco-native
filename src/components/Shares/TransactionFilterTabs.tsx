// components/TransactionFilterTabs.tsx
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

type Props = {
  selected: string;
  onSelect: (filter: string) => void;
};

const tabs = ['All', 'Today', 'This week', 'This Month'];

const TransactionFilterTabs: React.FC<Props> = ({selected, onSelect}) => {
  return (
    <View style={styles.container}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab}
          onPress={() => onSelect(tab)}
          style={[styles.tab, selected === tab && styles.activeTab]}>
          <Text style={[styles.tabText, selected === tab && styles.activeText]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
  },

  tab: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },

  activeTab: {
    backgroundColor: '#000',
  },

  tabText: {
    color: '#555',
  },

  activeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TransactionFilterTabs;
