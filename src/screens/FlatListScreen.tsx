import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const FLAT_DATA = Array.from({length: 50}, (_, index) => ({
  id: index.toString(),
  title: `Item ${index + 1}`,
}));

const FlatListScreen: React.FC = () => {
  const handleRenderItem = ({item}: {item: {id: string; title: string}}) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Flatlist Example</Text>
      <FlatList
        ListHeaderComponent={
          <Text style={styles.flatListHeader}>FlatList Header</Text>
        }
        ListFooterComponent={
          <Text style={styles.flatListFooter}>FlatList Footer</Text>
        }
        keyExtractor={item => item.id}
        data={FLAT_DATA}
        renderItem={handleRenderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  flatListHeader: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  flatListFooter: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default FlatListScreen;
