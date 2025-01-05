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
import sectionMapping from "../Navigation/SectionMapping";
import { useCategory } from "../App";

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

const Navbar = () => {
  const { currentCategory, currentColor, onCategoryChange } = useCategory();
  const categoryNames = ['body', 'mind', 'relationships', 'emotions', 'soul'];

  const [activeIndex, setActiveIndex] = useState(categoryNames.indexOf(currentCategory));
  const route = useRoute();
  const navigation = useNavigation();

  const categories = Object.keys(sectionMapping).filter(
    (key) => key !== "default"
  );



  const colors = categories.map((category) => sectionMapping[category].currentColor);
   const categoryToColorMapping = {
      body: "#FFD3FA",
      mind: "#FFE2CC",
      relationships: "#FFF7CC",
      emotions: "#D3F2D7",
      soul: "#CDF6FF",
    };

  const letters = categories.map((category) =>
    sectionMapping[category].activeArea[0].toLowerCase()
  );

  const categoryHumanName = sectionMapping[currentCategory].activeArea

//   useEffect(() => {
//     if (route.params?.currentColor) {
//       const color = route.params.currentColor;
//       const area = route.params.activeArea || "CIAŁO";
//       setActiveIndex(colors.indexOf(color));
//     }
//   }, [route.params]);

  const handleCategoryChange = (index) => {
    onCategoryChange(index);
//     const selectedSection = sections[index];
//     const { currentColor, activeArea } = sectionMapping[selectedSection];
    setActiveIndex(index);
//     navigation.setParams({ currentColor, activeArea });
  };

  return (
    <SafeAreaView style={styles.navbarContainer}>
      <StatusBar barStyle="dark-content" />
      <View
        style={[styles.navbar, currentColor && { backgroundColor: currentColor }]}
      >
        <Text style={styles.areaHeading}>
          <Text style={styles.text}>obszar: </Text>
          <Text style={styles.highlight}>{categoryHumanName || "CIAŁO"}</Text>
        </Text>
      </View>
      <View style={styles.circleContainer}>
        {categoryNames.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCategoryChange(index)}
          >
            <View
              style={[
                styles.circle,
                { backgroundColor: categoryToColorMapping[category] },
                activeIndex === index && styles.activeCircle,
              ]}
            >
              <Text
                style={[
                  styles.circleText,
                  activeIndex === index && styles.activeCircleText,
                ]}
              >
                {letters[index]}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Navbar;
