import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../../../Components/ArticleHeader";
import SmallText from "../../../Components/SmallText";
import BoldText from "../../../Components/BoldText";
import ArticleTitle from "../../../Components/ArticleTitle";
import ForwardingButton from "../../../Components/ForwardingButton/ForwardingButton";
import { relationshipsArticleTexts } from "../../Texts/RelationshipsArticleText";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFF7CC",
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 100,
  },
});

const RelationshipsArticle2 = ({ navigation }) => {
  const article = relationshipsArticleTexts[1];

  return (
    <>
      <ArticleTitle text={article.ArticleTitle} />
      <BoldText text={article.BoldText} />
      <SmallText text={article.SmallText} />
      <ForwardingButton
        text={article.ForwardingButton}
        currentArticle="relationshipsArticle2"
        navigation={navigation}
      />
    </>
  );
};

export default RelationshipsArticle2;
