import ForwardingButton from "../../../Components/ForwardingButton/ForwardingButton";
import React from "react";
import { soulArticleTexts } from "../../Texts/SoulArticleText";
import ArticleHeader from "../../../Components/ArticleHeader";
import ArticleTitle from "../../../Components/ArticleTitle";
import SmallText from "../../../Components/SmallText";
import DropDown from "../../../Components/DropDown";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import LinkButton from "../../../Components/LinkButton";
import LetterDropDown from "../../../Components/LetterDropDown";
import BoldText from "../../../Components/BoldText";

const styles = StyleSheet.create({
  quote: {
    paddingTop: 10,
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 25,
  },
  linkButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    alignItems: "flex-start",
  },
});

const SoulArticle4 = ({ navigation }) => {
  const article = soulArticleTexts[3];

  return (
    <>
      <ArticleTitle text={article.ArticleTitle} />
      <SmallText text={article.SmallText[0]} />
      <DropDown
        titleText={article.DropDownTitle}
        smallText={article.DropDownSmallText}
        hasTopBorder={true}
      />
      <BoldText text={article.BoldText} />
      <SmallText text={article.SmallText[1]} />
    </>
  );
};

export default SoulArticle4;
