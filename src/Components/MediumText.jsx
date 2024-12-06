import React from "react";
import { Text, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "match-parent",
    marginTop: 15,
    fontWeight: "medium",
    lineHeight: 25,
  },
});

const MediumText = ({ text }) => {
  return <Text style={[styles.text]}>{text} </Text>;
};

export default MediumText;
