import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const TextInputComponent = () => {
  const [value, setValue] = useState('');

  console.log(value);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Text Input Component</Text>
      <TextInput
        placeholder="Type something here..."
        value={value}
        style={styles.input}
        onChangeText={setValue}
      />
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

  input: {
    height: 50,
    borderColor: 'grey',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default TextInputComponent;
