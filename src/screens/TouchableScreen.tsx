import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
  View,
} from 'react-native';

const TouchableScreen: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Touchable Screen</Text>

      <TouchableWithoutFeedback onPress={() => setCount(count + 1)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Touchable without feedback</Text>
        </View>
      </TouchableWithoutFeedback>

      <Pressable
        onPress={() => setCount(count + 1)}
        style={({pressed}) => [
          styles.btn,
          {
            backgroundColor: pressed ? 'lightgreen' : '#b4620b',
          },
        ]}>
        {({pressed}) => (
          <Text
            style={[styles.pressableText, {color: pressed ? 'red' : 'white'}]}>
            {pressed ? 'Pressed Now' : 'Pressable'}
          </Text>
        )}
      </Pressable>
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

  btn: {
    padding: 10,
    backgroundColor: '#4ca008',
    borderRadius: 5,
    marginBottom: 10,
    minWidth: 250,
    alignItems: 'center',
  },

  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },

  pressableText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default TouchableScreen;
