import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

const TouchableComponents = () => {
  const [count, setCount] = useState(0);
  const [highlightCount, setHighlightCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Touchable Components</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count + 1)}>
        <Text style={styles.btnText}>Touchable Opacity</Text>
      </TouchableOpacity>
      <TouchableHighlight
        underlayColor={'red'}
        style={styles.button}
        onPress={() => setHighlightCount(highlightCount + 1)}>
        <Text style={styles.btnText}>Touchable Highlight</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textDecorationLine: 'underline',
    color: 'white',
  },

  button: {
    backgroundColor: '#096dbe',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },

  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TouchableComponents;
