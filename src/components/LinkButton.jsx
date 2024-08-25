import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const LinkButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 16,
    color: '#4F4F4F',
    fontWeight: 'medium',
    textDecorationLine: 'underline',
    textDecorationColor: '#4F4F4F',
     textTransform: 'uppercase',
     marginTop:10,
  },
});

export default LinkButton;
