import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ModalScreen: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Modal Demo</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>Show Modal</Text>
      </TouchableOpacity>
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
    marginTop: 20,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ModalScreen;
