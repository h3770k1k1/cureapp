import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import SmallSection from "./SmallSection";

const Section = ({ header, text }) => (
  <View style={styles.section}>
    <Text style={styles.header}>{header}</Text>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const AreaSubpage = ({ activeColor }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Section
          header="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident"
        />
        <Section
          header="Header 2"
          text="This is some text for the second section."
        />
        <Section
          header="Header 3"
          text="This is some text for the third section."
        />

        <View style={styles.smallSectionsContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SmallSection
              header="Section 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
              backgroundColor={activeColor}
            />
            <SmallSection
              header="Section 2"
              description="Short description for section 2."
              backgroundColor={activeColor}
            />
            <SmallSection
              header="Section 3"
              description="Short description for section 3."
              backgroundColor={activeColor}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 5,
  },
  section: {
    backgroundColor: "white",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
  smallSectionsContainer: {
    padding: 16,
    height: 250,
  },
});

export default AreaSubpage;
