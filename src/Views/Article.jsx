import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import ArticleHeader from "../Components/ArticleHeader";
import ForwardingButton from "../Components/ForwardingButton/ForwardingButton";
import { useCategory } from "../App";
import { useArticles } from "../ContextProviders/ArticlesProvider";
import { useRoute } from "@react-navigation/native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    //     backgroundColor: "#FFD3FA",
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 100,
  },
});

const Article = () => {
  const route = useRoute();
  const { index, customContent, nextArticleTitle } = route.params;

  const { currentCategory } = useCategory();
  const { articles } = useArticles();

  const nextArticleName = articles[currentCategory][index + 1]['name'];

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader
          dotCount={articles[currentCategory].length}
          filledDotIndex={index}
        />
      </ScrollView>
      <ForwardingButton
        nextArticleTitle={nextArticleTitle}
        nextArticleName={nextArticleName}
      />
    </View>
  );
};

export default Article;
