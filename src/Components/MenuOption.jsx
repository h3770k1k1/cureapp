import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import ArrowOption from "./Icons/ArrowOption";
import { useAppNavigation } from "../ContextProviders/AppNavigationProvider";
import categories from "../Navigation/categories";

const styles = StyleSheet.create({
  option: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: 400,
    margin: "0 auto",
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#F0F0F0",
  },
  optionText: {
    fontSize: 18,
    width: 140,
    display: "flex",
    flexDirection: "row",
    lineHeight: 24,
  },
  lastWord: {
    fontSize: 18,
    fontWeight: "500",
  },
  inactive: {
    opacity: 0.5,
  },
});

const Option = ({ categoryName }) => {
  const { navigateToCategory } = useAppNavigation();
  const category = categories[categoryName];

  const words = category["description"].split(" ");
  const lastWord = words.pop();
  const remainingText = words.join(" ") + " ";

  const backgroundColor = categories[categoryName]["color"];

  return (
    <TouchableOpacity
      style={[styles.option]}
      onPress={() => {
        navigateToCategory(categoryName);
      }}
    >
      <Text style={styles.optionText}>
        {remainingText}
        <Text style={[styles.lastWord, { backgroundColor }]}>{lastWord}</Text>
      </Text>
      <ArrowOption />
    </TouchableOpacity>
  );
};

export default Option;
