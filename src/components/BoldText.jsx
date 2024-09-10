import React from 'react';
import { Text, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    textAlign: 'match-parent',
    marginTop:15,
    fontWeight: 'bold',
    lineHeight: 25,
  },
});

const BoldText = ({text}) => {
  return <Text style={[styles.text]}>{text} </Text>;
};


export default BoldText;
