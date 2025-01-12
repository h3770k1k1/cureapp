import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../../../Components/ArticleHeader";
import SmallText from "../../../Components/SmallText";
import MediumText from "../../../Components/MediumText";
import DotLineHeader from "../../../Components/DotLineHeader";
import ArticleTitle from "../../../Components/ArticleTitle";
import ForwardingButton from "../../../Components/ForwardingButton/ForwardingButton";
import { bodyArticleTexts } from "../../Texts/BodyArticleText";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFD3FA",
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 100,
  },
});

const BodyArticle2 = ({ navigation }) => {
  const article = bodyArticleTexts[1];

  return (
    <>
      <ArticleTitle text={article.ArticleTitle} />
      <SmallText text={article.SmallText} />
      <MediumText text={article.MediumText} />
      <DotLineHeader text={article.DotLineHeader} />
    </>
  );
};

export default BodyArticle2;
