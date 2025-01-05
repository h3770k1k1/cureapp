import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../Components/ArticleHeader";
import SmallText from "../Components/SmallText";
import MediumText from "../Components/MediumText";
import DotLineHeader from "../Components/DotLineHeader";
import ArticleTitle from "../Components/ArticleTitle";
import ForwardingButton from "../Components/ForwardingButton/ForwardingButton";
import { bodyArticleTexts } from "./Texts/BodyArticleText";

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

const Article = (navigation, articleContent) => {
//   const article = bodyArticleTexts[1];
  const handleForward = () => {
//     navigation.navigate("BodyArticle3");
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader
          dotCount={bodyArticleTexts.length}
          filledDotIndex={article.ArticleIndex}
        />
           {articleContent}
      </ScrollView>
      <ForwardingButton
        text={article.ForwardingButton}
//         currentArticle="BodyArticle2"
        navigation={navigation}
      />
    </View>
  );
};

export default Article;
