import React from 'react';
import { Text, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    textAlign: 'justify',
    marginTop:15,
    fontWeight: 'medium',
    lineHeight: 25,
  },
});

const BoldText = () => {
  return <Text style={[styles.text]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>;
};


export default BoldText;
