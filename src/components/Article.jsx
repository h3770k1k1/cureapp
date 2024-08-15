import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ArticleHeader from "./ArticleHeader"; // Import the ArticleHeader component
import ForwardingButton from "./ForwardingButton"; // Import the ForwardingButton component

const Article = () => {
  return (
    <View style={styles.mainContainer}>
      <ArticleHeader />
      <Text style={styles.sectionHeader}>
        Lorem ipsum dolor sit amet, consectetur
      </Text>
      <ForwardingButton />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 40,
    width: 300,
  },
});

export default Article;
