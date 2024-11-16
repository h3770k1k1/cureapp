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

const Navbar = ({ onColorChange, activeArea }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const colors = [
    Color.PINK,
    Color.ORANGE,
    Color.YELLOW,
    Color.GREEN,
    Color.BLUE,
  ];

  const handleCirclePress = (index) => {
    setActiveIndex(index);
    onColorChange(colors[index]);
  };

  return (
    <SafeAreaView style={styles.navbarContainer}>
      <StatusBar barStyle="dark-content" />
      <View
        style={[
          styles.navbar,
          activeIndex !== null && { backgroundColor: colors[activeIndex] },
        ]}
      >
        <Text style={styles.areaHeading}>
          <Text style={styles.text}>obszar: </Text>
          <Text style={styles.highlight}>{activeArea || "DEFAULT"}</Text>
        </Text>
      </View>
      <View style={styles.circleContainer}>
        {["c", "u", "r", "e", "d"].map((letter, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCirclePress(index)}
          >
            <View
              style={[
                styles.circle,
                styles[`circle${index}`],
                activeIndex === index && styles.activeCircle,
              ]}
            >
              <Text
                style={[
                  styles.circleText,
                  activeIndex === index && styles.activeCircleText,
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
    borderColor: "#fff",
  },
  activeCircleText: {
    fontWeight: "bold",
  },
});

export default Navbar;
