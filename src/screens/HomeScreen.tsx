import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParamList} from './RootNavigator';

const topics = [
  {
    id: 1,
    title: 'Flat List Demo',
    screen: 'FlatListDemo',
  },
  {
    id: 2,
    title: 'Section List Demo',
    screen: 'SectionListDemo',
  },
  {
    id: 3,
    title: 'Touchable Demo',
    screen: 'TouchableDemo',
  },
  {
    id: 4,
    title: 'Modal Demo',
    screen: 'ModalDemo',
  },
];

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={topics}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.topicButton}
            onPress={() =>
              navigation.navigate(item.screen as keyof RootStackParamList)
            }>
            <Text style={styles.topicText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },

  topicButton: {
    backgroundColor: '#e0e0e0',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },

  topicText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
