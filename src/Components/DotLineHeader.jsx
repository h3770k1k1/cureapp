import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 5,
  },
  dots: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "bold",
    marginHorizontal: 10,
    textTransform: "uppercase",
  },
});

const DotLineHeader = ({ text }) => {
  const totalLength = 40;
  const dotsBefore = 4;
  const textLength = text.length;

  const dotsAfterCount = totalLength - textLength - dotsBefore;
  const dotsBeforeText = ".".repeat(dotsBefore);
  const dotsAfterText = ".".repeat(dotsAfterCount > 0 ? dotsAfterCount : 0);

  return (
    <View style={styles.container}>
      <Text style={styles.dots}>{dotsBeforeText}</Text>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.dots}>{dotsAfterText}</Text>
    </View>
  );
};

export default DotLineHeader;
