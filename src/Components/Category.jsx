import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SmallSection from "./SmallSection/SmallSection";
import { mentalTexts } from "../Views/Texts/mentalTexts";
import { useCategory } from "../App";
import { useArticles } from "../ContextProviders/ArticlesProvider";

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

const Section = ({ header, text }) => (
  <View style={styles.section}>
    <Text style={styles.header}>{header}</Text>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const Category = () => {
  const { currentCategory, currentColor, onCategoryChange } = useCategory();
  const { articles } = useArticles();
  console.log("ARTICLES are ");
  console.log(articles[currentCategory]);

  const navigation = useNavigation();

  const categoryText = mentalTexts[currentCategory] || null;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {categoryText ? (
          <>
            {categoryText.Header.map((header, idx) => (
              <Section
                key={idx}
                header={header || "Default Header"}
                text={categoryText.Text[idx] || "Default Text"}
              />
            ))}
          </>
        ) : (
          <Text style={styles.text}>Brak treści dla tego identyfikatora.</Text>
        )}

        <View style={styles.smallSectionsContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {articles[currentCategory].map((article, index) => {
              return (
                <SmallSection
                  key={index}
                  header={categoryText.SectionTitle[index]}
                  description={categoryText.SectionText[index] || ""}
                  backgroundColor={currentColor}
                  navigation={navigation}
                  articleName={article["name"]}
                />
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Category;
