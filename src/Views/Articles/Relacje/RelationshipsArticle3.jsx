import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../../../Components/ArticleHeader";
import SmallText from "../../../Components/SmallText";
import BoldText from "../../../Components/BoldText";
import ArticleTitle from "../../../Components/ArticleTitle";
import ForwardingButton from "../../../Components/ForwardingButton/ForwardingButton";
import { relationshipsArticleTexts } from "../../Texts/RelationshipsArticleText";
import DropDown from "../../../Components/DropDown";

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

const RelationshipsArticle3 = ({ navigation }) => {
  const article = relationshipsArticleTexts[2]; // Ensure index [2] is valid

  return (
    <>
      <ArticleTitle text={article.ArticleTitle} />
      <SmallText text={article.SmallText} />
      <DropDown
        titleText={article.DropDownTitle[0]}
        smallText={article.DropDownSmallText[0]}
        hasTopBorder={true}
      />
      <DropDown
        titleText={article.DropDownTitle[1]}
        smallText={article.DropDownSmallText[1]}
        hasTopBorder={false}
      />
      <DropDown
        titleText={article.DropDownTitle[2]}
        smallText={article.DropDownSmallText[2]}
        hasTopBorder={false}
      />
    </>
  );
};

export default RelationshipsArticle3;
