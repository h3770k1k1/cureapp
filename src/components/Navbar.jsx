import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

const Color = {
  PINK: "#FFD3FA",
  ORANGE: "#FFE2CC",
  YELLOW: "#FFF7CC",
  GREEN: "#D3F2D7",
  BLUE: "#CDF6FF",
};

const Navbar = ({ onColorChange, activeArea, activeColor }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const colors = [
    Color.PINK,
    Color.ORANGE,
    Color.YELLOW,
    Color.GREEN,
    Color.BLUE,
  ];

  const handleCirclePress = (index) => {
    setActiveIndex(index); // Zmieniamy aktywny indeks po kliknięciu
    onColorChange(colors[index]); // Zmieniamy kolor na podstawie wybranego indeksu
  };

  return (
    <SafeAreaView style={styles.navbarContainer}>
      <StatusBar barStyle="dark-content" />
      <View
        style={[
          styles.navbar,
          activeColor && { backgroundColor: activeColor }, // Jeśli activeColor jest ustawiony, zmieniamy tło
        ]}
      >
        <Text style={styles.areaHeading}>
          <Text style={styles.text}>obszar: </Text>
          <Text style={styles.highlight}>{activeArea || "CIAŁO"}</Text> {/* Jeśli brak obszaru, wyświetl "Ciało" */}
        </Text>
      </View>
      <View style={styles.circleContainer}>
        {["c", "u", "r", "e", "d"].map((letter, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCirclePress(index)} // Zmieniamy aktywny indeks przy kliknięciu
          >
            <View
              style={[
                styles.circle,
                styles[`circle${index}`],
                activeIndex === index && styles.activeCircle, // Aktywny okrąg zmienia styl
              ]}
            >
              <Text
                style={[
                  styles.circleText,
                  activeIndex === index && styles.activeCircleText, // Aktywny okrąg zmienia tekst
                ]}
              >
                {letter}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
  },
  navbar: {
    height: 120,
    width: "100%",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "300",
    color: "#535353",
  },
  highlight: {
    fontSize: 25,
    fontWeight: "600",
    color: "#535353",
    letterSpacing: 3,
  },
  areaHeading: {
    marginLeft: 25,
  },
  circleContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    width: "95%",
    marginTop: -25,
  },
  circle: {
    width: 45,
    height: 43,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  circleText: {
    fontSize: 19,
    fontWeight: "300",
    color: "#000",
  },
  circle0: {
    backgroundColor: Color.PINK,
  },
  circle1: {
    backgroundColor: Color.ORANGE,
  },
  circle2: {
    backgroundColor: Color.YELLOW,
  },
  circle3: {
    backgroundColor: Color.GREEN,
  },
  circle4: {
    backgroundColor: Color.BLUE,
  },
  activeCircle: {
    borderWidth: 3,
    borderColor: "#fff", // Zmieniamy obramowanie na białe, kiedy okrąg jest aktywny
  },
  activeCircleText: {
    fontWeight: "bold", // Zmieniamy tekst na pogrubiony dla aktywnego okręgu
  },
});

export default Navbar;