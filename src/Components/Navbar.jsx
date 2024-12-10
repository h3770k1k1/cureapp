import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";


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
  activeCircle: {
    borderWidth: 3,
    borderColor: "#fff",
  },
  activeCircleText: {
    fontWeight: "bold",
  },
});

const Navbar = ({ onColorChange, activeArea, activeColor }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const route = useRoute();
  const navigation = useNavigation();

  const colors = ["#FFD3FA", "#FFE2CC", "#FFF7CC", "#D3F2D7", "#CDF6FF"];

  useEffect(() => {
    if (route.params?.activeColor) {
      const color = route.params.activeColor;
      const area = route.params.activeArea || "CIAŁO";
      onColorChange(color);
      setActiveIndex(colors.indexOf(color));
    }
  }, [route.params]);

  const handleCirclePress = (index) => {
    setActiveIndex(index);
    onColorChange(colors[index]);
  };

  return (
    <SafeAreaView style={styles.navbarContainer}>
      <StatusBar barStyle="dark-content" />
      <View
        style={[styles.navbar, activeColor && { backgroundColor: activeColor }]}
      >
        <Text style={styles.areaHeading}>
          <Text style={styles.text}>obszar: </Text>
          <Text style={styles.highlight}>{activeArea || "CIAŁO"}</Text>
        </Text>
      </View>
      <View style={styles.circleContainer}>
        {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCirclePress(index)}
          >
            <View
              style={[
                styles.circle,
                { backgroundColor: color },
                activeIndex === index && styles.activeCircle,
              ]}
            >
              <Text
                style={[
                  styles.circleText,
                  activeIndex === index && styles.activeCircleText,
                ]}
              >
                {["c", "u", "r", "e", "d"][index]}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Navbar;
