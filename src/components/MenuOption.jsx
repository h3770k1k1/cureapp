import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ArrowOption from "./ArrowOption";
import { useNavigation } from "@react-navigation/native";
import { MentalTexts } from "../Views/MentalTexts";

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
  gradientText: {
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  gradientWord: {
    fontSize: 18,
    fontWeight: "500",
  },
  inactive: {
    opacity: 0.5,
  },
});

const colors = [
  "#FFD3FA",
  "#FFE2CC",
  "#FFF7CC",
  "#D3F2D7",
  "#CDF6FF",
  "#FFFFFF",
];

const Option = ({ text, index }) => {
  const navigation = useNavigation();
  const words = text.split(" ");
  const lastWord = words.pop();
  const remainingText = words.join(" ") + " ";

  const lastWordStyle =
    index < colors.length ? { backgroundColor: colors[index] } : {};

  // Funkcja do obsługi kliknięcia przycisku
  const handlePress = () => {
    if (index === colors.length - 1) {

      return;
    }
    const color = MentalTexts[index]?.Color || "#FFFFFF";
    const area = MentalTexts[index]?.Area || "";
    navigation.navigate("Mental", { activeColor: color, activeArea: area });
  };

  return (
    <TouchableOpacity
      style={[styles.option, index === colors.length && styles.inactive]} // Dodajemy klasę 'inactive' dla ostatniego przycisku
      onPress={handlePress}
      disabled={index === colors.length} // Wyłączamy kliknięcie dla ostatniego przycisku
    >
      <Text style={styles.optionText}>
        {remainingText}
        {index === colors.length ? (
          <LinearGradient
            colors={colors[0]}
            style={styles.gradientText}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.gradientWord}>{lastWord}</Text>
          </LinearGradient>
        ) : (
          <Text style={[styles.lastWord, lastWordStyle]}>{lastWord}</Text>
        )}
      </Text>
      <ArrowOption />
    </TouchableOpacity>
  );
};

export default Option;
