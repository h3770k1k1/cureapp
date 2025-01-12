import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import SmallSection from "./SmallSection/SmallSection";
import { mentalTexts } from "../Views/Texts/mentalTexts";
import { useCategory } from "../App";
import { useArticles } from "../ContextProviders/ArticlesProvider";
import { useAppNavigation } from "../ContextProviders/AppNavigationProvider";

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
  const { article, color, navigateToCategory } = useAppNavigation();

  const { articles } = useArticles();

  const categoryText = mentalTexts[article.category] || null;
  const articlesForCurrentCategory = articles.filter(
    (currentArticle) => currentArticle.category === article.category
  );

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
            {articlesForCurrentCategory.map((article, index) => {
              return (
                <SmallSection
                  key={index}
                  header={categoryText.SectionTitle[index]}
                  description={categoryText.SectionText[index] || ""}
                  backgroundColor={color}
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
