import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Hook nawigacji
import SmallSection from "./SmallSection";
import { MentalTexts } from "../Views/MentalTexts"; // Zakładam, że `MentalTexts` jest poprawnie zaimportowane

const Section = ({ header, text }) => (
  <View style={styles.section}>
    <Text style={styles.header}>{header}</Text>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const AreaSubpage = ({ activeColor }) => {
  const navigation = useNavigation(); // Hook nawigacji

  // Znalezienie odpowiedniego tekstu na podstawie koloru
  const index = MentalTexts.findIndex(item => item.Color === activeColor);
  const text = index !== -1 ? MentalTexts[index] : null;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {text ? (
          <>
            {/* Główne sekcje */}
            {text.Header.map((header, idx) => (
              <Section
                key={idx}
                header={header || "Default Header"}
                text={text.Text[idx] || "Default Text"}
              />
            ))}
          </>
        ) : (
          <Text style={styles.text}>No content available for this color.</Text>
        )}

        {/* Małe sekcje */}
        <View style={styles.smallSectionsContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {text &&
              text.SectionTitle.map((title, idx) => (
                <SmallSection
                  key={idx}
                  header={title}
                  description={text.SectionText[idx] || ""}
                  backgroundColor={activeColor}
                  navigation={navigation} // Przekazanie nawigacji
                  articleIndex={idx} // Indeks artykułu
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
