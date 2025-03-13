import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const StylingDemo = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
          marginBottom: 15,
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          Inline Styling Example
        </Text>
      </View>
      <View
        style={[
          styles.combinedStyles,
          {borderWidth: 2, borderColor: 'purple'},
        ]}>
        <Text style={[styles.combinedText, {textDecorationLine: 'underline'}]}>
          Combined Text Style
        </Text>
        <Text style={[styles.combinedText, {color: 'red', fontWeight: 'bold'}]}>
          Combined Text Style with different color
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  combinedStyles: {
    backgroundColor: 'lightyellow',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },

  combinedText: {
    fontSize: 14,
  },
});

export default StylingDemo;
