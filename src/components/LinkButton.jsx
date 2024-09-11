import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 16,
    color: '#4F4F4F',
    fontWeight: '500',
    textDecorationLine: 'underline',
    textDecorationColor: '#4F4F4F',
    textTransform: 'uppercase',
    marginTop: 10,
  },
});

const LinkButton = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default LinkButton;
