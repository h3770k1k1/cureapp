import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import sectionMapping from "../Navigation/SectionMapping";
import { useCategory } from "../App";
import { mentalTexts } from "../Views/Texts/mentalTexts";
import categories from "../Navigation/categories";
import { useAppNavigation } from "../ContextProviders/AppNavigationProvider";

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
  const { article, color, navigateToCategory } = useAppNavigation();
  const categoriesNames = Object.keys(categories);

  const categoryHumanName = mentalTexts[article.category]["Area"];

  const letters = categoriesNames.map((name) =>
    mentalTexts[name]["Area"][0].toLowerCase()
  );

  return (
    <SafeAreaView style={styles.navbarContainer}>
      <StatusBar barStyle="dark-content" />
      <View style={[styles.navbar, color && { backgroundColor: color }]}>
        <Text style={styles.areaHeading}>
          <Text style={styles.text}>obszar: </Text>
          <Text style={styles.highlight}>{categoryHumanName || "CIAŁO"}</Text>
        </Text>
      </View>
      <View style={styles.circleContainer}>
        {categoriesNames.map((name, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigateToCategory(name)}
          >
            <View
              style={[
                styles.circle,
                { backgroundColor: categories[name]["color"] },
                name === article.category && styles.activeCircle,
              ]}
            >
              <Text
                style={[
                  styles.circleText,
                  name === article.category && styles.activeCircleText,
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
