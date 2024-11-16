import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import SmallSection from "./SmallSection";
import {MentalTexts} from "../Views/MentalTexts"

const Section = ({ header, text }) => (
  <View style={styles.section}>
    <Text style={styles.header}>{header}</Text>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const AreaSubpage = ({ activeColor }) => {
  const index = MentalTexts.findIndex(item => item.Color === activeColor);

  const text = index !== -1 ? MentalTexts[index] : null;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {text ? (
          <>
            <Section
              header={text.Header[0]}
              text={text.Text[0]}
            />
            <Section
              header={text.Header[1] || "Default Header"}
              text={text.Text[1] || "Default Text"}
            />
            <Section
              header={text.Header[2] || "Default Header"}
              text={text.Text[2] || "Default Text"}
            />
          </>
        ) : (
          <Text style={styles.text}>No content available for this color.</Text>
        )}

        <View style={styles.smallSectionsContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            {text &&
              text.SectionTitle.map((title, idx) => (
                <SmallSection
                  key={idx}
                  header={title}
                  description={text.SectionText[idx] || ""}
                  backgroundColor={activeColor}
                />
              ))}
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
