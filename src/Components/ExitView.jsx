import React from "react";
import { View, StyleSheet } from "react-native";
import ExitDots from "./Icons/ExitDots";
import Option from "./MenuOption";

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

const ExitView = () => {
  const options = [
    "zaopiekować się swoim ciałem",
    "nauczyć się dbać o umysł",
    "pogłębić swoje relacje",
    "poznać bardziej swoje emocje",
    "odkryć swoją duchowość",
    "monitoruj swój rozwój",
  ];

  const categoryToColorMapping = {
    body: "#FFD3FA",
    mind: "#FFE2CC",
    relationships: "#FFF7CC",
    emotions: "#D3F2D7",
    soul: "#CDF6FF",
  };

  // Generate colors dynamically from mapping
  const colors = [
    ...Object.values(categoryToColorMapping), // Extract colors
    "#FFFFFF", // White for the last option
  ];

  return (
    <View style={styles.exitView}>
      <View style={styles.header}>
        <ExitDots />
      </View>
      <View style={styles.options}>
        {options.map((text, index) => (
          <Option key={index} text={text} index={index} color={colors[index]} />
        ))}
      </View>
    </View>
  );
};

export default ExitView;
