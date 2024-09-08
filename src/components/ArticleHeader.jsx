import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ArticleArrow from "./ArticleArrow";

const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dot: {
    borderRadius: 10,
    borderWidth: 2.5,
    width: 15,
    height: 15,
    borderColor: "#535353",
    margin: 1.5,
  },
  dotsContainer: {
    display: "flex",
    flexDirection: "row",
    width: "fitContent",
  },
});

const ArticleHeader = () => {
  return (
    <View style={styles.topContainer}>
      <Text>
        <ArticleArrow />
      </Text>
      <View style={styles.dotsContainer}>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
      </View>
    </View>
  );
};

export default ArticleHeader;
