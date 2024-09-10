import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    textAlign: 'justify',
    marginTop: 15,
    lineHeight: 20,
  },
});

const SmallText = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default SmallText;
