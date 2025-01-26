import React from "react";
import { View, StyleSheet } from "react-native";
import ExitDots from "./Icons/ExitDots";
import CategoryOption from "./MenuOption";
import categories from "../Navigation/categories";

const styles = StyleSheet.create({
  exitView: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    marginTop: 10,
    height: 130,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  options: {
    display: "flex",
    flexDirection: "column",
    width: "85%",
  },
});

const HomeCategories = () => {
  const categoriesNames = Object.keys(categories);
  return (
    <View style={styles.exitView}>
      <View style={styles.header}>
        <ExitDots />
      </View>
      <View style={styles.options}>
        {categoriesNames.map((name, index) => (
          <CategoryOption key={index} categoryName={name} />
        ))}
      </View>
    </View>
  );
};

export default HomeCategories;
