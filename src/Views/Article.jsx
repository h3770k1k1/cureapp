import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import ArticleHeader from "../Components/ArticleHeader";
import ForwardingButton from "../Components/ForwardingButton/ForwardingButton";
import { useRoute } from "@react-navigation/native";
import articlesTexts from "../Views/Texts/articlesTexts";
import categories from "../Navigation/categories";
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 100,
  },
});

const Article = () => {
  const route = useRoute();
  const { article } = route.params;

  const nextArticleTitle =
    articlesTexts[article.category][article.name]["ForwardingButton"];

  const currentArticleColor = categories[article.category].color;

  return (
    <View
      style={[styles.mainContainer, { backgroundColor: currentArticleColor }]}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader />
        {React.createElement(article.component)}
      </ScrollView>
      <ForwardingButton nextArticleTitle={nextArticleTitle} />
    </View>
  );
};

export default Article;
