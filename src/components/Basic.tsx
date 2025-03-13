import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';

const Basic = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <View>
      {/* View Component */}
      <View style={styles.boxContainer}>
        <View style={styles.redBox} />
        <View style={styles.blueBox} />
        <View style={styles.greenBox} />
      </View>
      {/* View Component */}

      {/* Text Component */}

      <Text style={styles.myText}>My Name is Samuel</Text>
      <Text style={styles.nestedText}>
        Text components can be <Text style={styles.bold}>nested</Text>
      </Text>
      {/* Text Component */}
      {/* Image Component */}
      <Image
        style={styles.myImage}
        source={{uri: 'https://picsum.photos/200/300'}}
      />

      <Image
        style={styles.myImage}
        source={require('../../assets/chess.jpg')}
      />

      <Image
        style={styles.myImage}
        source={require('../../assets/chess.jpg')}
      />

      {/* Image Component */}

      {/* Button Component */}
      <Text style={styles.myText}>Count: {count}</Text>
      <Button
        color={'purple'}
        disabled={false}
        title="Click Me"
        onPress={() => setCount(count + 1)}
      />
      {/* Button Component */}
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  redBox: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },

  blueBox: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },

  greenBox: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },

  myText: {
    color: 'white',
    fontSize: 30,
  },

  nestedText: {
    fontSize: 18,
    color: 'white',
  },

  bold: {
    fontWeight: 'bold',
  },

  myImage: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export default Basic;
