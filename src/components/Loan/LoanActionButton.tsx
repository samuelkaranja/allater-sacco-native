import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface LoanActionButtonProps {
  title: string;
  onPress: () => void;
}

const LoanActionButton: React.FC<LoanActionButtonProps> = ({
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#EAEAEA',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    margin: 5,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});

export default LoanActionButton;
