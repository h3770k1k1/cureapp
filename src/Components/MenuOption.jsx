import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ArrowOption from "./Icons/ArrowOption";
import sectionMapping from "../Navigation/SectionMapping";

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

const Option = ({ text, index }) => {
  const navigation = useNavigation();
  const words = text.split(" ");
  const lastWord = words.pop();
  const remainingText = words.join(" ") + " ";

  const sections = Object.keys(sectionMapping).filter((key) => key !== "default");
  const currentSection = sections[index];
  const backgroundColor = currentSection
    ? sectionMapping[currentSection].activeColor
    : "#FFFFFF";

  const handlePress = () => {
    if (!currentSection) return;
    const { activeColor, activeArea } = sectionMapping[currentSection];
    navigation.navigate("Mental", { activeColor, activeArea });
  };

  return (
    <TouchableOpacity
      style={[styles.option, index >= sections.length && styles.inactive]}
      onPress={handlePress}
      disabled={index >= sections.length}
    >
      <Text style={styles.optionText}>
        {remainingText}
        <Text
          style={[styles.lastWord, { backgroundColor }]}
        >
          {lastWord}
        </Text>
      </Text>
      <ArrowOption />
    </TouchableOpacity>
  );
};

export default Option;
