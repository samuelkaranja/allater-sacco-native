import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

const SECTION_DATA = [
  {
    title: 'Men',
    data: ['Men Tshirt', 'Men Shirt', 'Jeans'],
  },
  {
    title: 'Women',
    data: ['Women Tshirt', 'Women Shirt', 'Women Jeans'],
  },
  {
    title: 'Kids',
    data: ['Kids Tshirt', 'Kids Shirt ', 'Kids Jeans'],
  },
  {
    title: 'Watches',
    data: ['Watches 1', 'Watches 2', 'Watches 3'],
  },
];

const SectionListScreen: React.FC = () => {
  const handleRenderItem = ({item}: {item: string}) => (
    <View style={styles.item}>
      <Text>{item}</Text>
    </View>
  );

  const renderSectionHeader = ({
    section: {title},
  }: {
    section: {title: string};
  }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Section List Example</Text>
      <SectionList
        renderSectionHeader={renderSectionHeader}
        sections={SECTION_DATA}
        renderItem={handleRenderItem}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },

  sectionHeader: {
    backgroundColor: '#f0f0f0',
    padding: 5,
  },

  sectionHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SectionListScreen;
