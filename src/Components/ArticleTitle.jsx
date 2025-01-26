import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  articleTitle: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 40,
    width: 300,
    marginBottom: 5,
  },
});

const ArticleTitle = ({ text }) => {
  return <Text style={styles.articleTitle}>{text}</Text>;
};

export default ArticleTitle;
