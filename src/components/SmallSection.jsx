import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 3) + "...";
  }
  return text;
};

const SmallSection = ({ header, description, backgroundColor, navigation, articleIndex }) => {
  const handlePress = () => {
    if (backgroundColor === "#FFD3FA") { // Kolor różowy
      const articleName = `Article${articleIndex + 1}`;
      navigation.navigate(articleName); // Przeniesienie na odpowiedni ekran
    } else {
      console.log("Przycisk działa, ale brak nawigacji dla tego koloru.");
    }
  };

  return (
    <View style={[styles.smallSection, { backgroundColor }]}>
      <Text style={styles.smallHeader}>{header}</Text>
      <Text style={styles.smallDescription}>{truncateText(description, 80)}</Text>
      <TouchableOpacity
        style={styles.moreButton}
        onPress={handlePress} // Dodana funkcja obsługi przycisku
      >
        <Text style={styles.moreButtonText}>Więcej</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  smallSection: {
    padding: 16,
    marginRight: 10,
    width: 280,
    height: 150,
  },
  smallHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  smallDescription: {
    fontSize: 14,
    color: "#666",
  },
  moreButton: {
    display: "flex",
    alignItems: "flex-end",
    position: "absolute",
    width: "100%",
    alignSelf: "center",
    marginTop: 120,
  },
  moreButtonText: {
    fontSize: 16,
    color: "#535353",
    textDecorationLine: "underline",
    textTransform: "uppercase",
  },
});

export default SmallSection;
