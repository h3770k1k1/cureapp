import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import CarouselArrow from "./Icons/CarouselArrow";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 130,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#535353",
  },
  inner: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "70%",
    height: "80%",
    marginHorizontal: 20,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "italic",
    textTransform: "uppercase",
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    justifyContent:"baseline",
    lineHeight: 30,
  },
  rotatedArrow: {
    transform: [{ rotate: "180deg" }],
  },
});

const Carousel = ({ text = [], name = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = text.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  const currentText = text[currentIndex];
  const currentName = name[currentIndex] || "";

  return (
    <View style={styles.container}>
      <CarouselArrow onPress={handlePrevious} />
      <View style={styles.inner}>
        <Text style={styles.text}>{currentText}</Text>
        <Text style={styles.name}>{currentName}</Text>
      </View>
      <CarouselArrow onPress={handleNext} style={styles.rotatedArrow} />
    </View>
  );
};

export default Carousel;
