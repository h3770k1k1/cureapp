import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ArticleArrow from "./Icons/ArticleArrow";
import { useAppNavigation } from "../ContextProviders/AppNavigationProvider";
import { useArticles } from "../ContextProviders/ArticlesProvider";

const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dot: {
    borderRadius: 10,
    borderWidth: 2.5,
    width: 15,
    height: 15,
    borderColor: "#535353",
    margin: 1.5,
  },
  filledDot: {
    backgroundColor: "#535353",
  },
  dotsContainer: {
    display: "flex",
    flexDirection: "row",
  },
});

const ArticleHeader = () => {
  const { back, article, getCategoryIndex } = useAppNavigation();
  const { articles } = useArticles();
  const articlesWithinCategoryCount = articles.filter(
    (currentArticle) => currentArticle.category === article.category
  ).length;

  const dots = Array(articlesWithinCategoryCount).fill(0);

  return (
    <View style={styles.topContainer}>
      <Text onPress={back}>
        <ArticleArrow />
      </Text>
      <View style={styles.dotsContainer}>
        {dots.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === getCategoryIndex() ? styles.filledDot : null,
            ]}
          ></View>
        ))}
      </View>
    </View>
  );
};

export default ArticleHeader;
