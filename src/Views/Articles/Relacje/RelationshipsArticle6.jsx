import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../../../Components/ArticleHeader";
import SmallText from "../../../Components/SmallText";
import BoldText from "../../../Components/BoldText";
import MediumText from "../../../Components/MediumText";
import ArticleTitle from "../../../Components/ArticleTitle";
import ForwardingButton from "../../../Components/ForwardingButton/ForwardingButton";
import { relationshipsArticleTexts } from "../../Texts/RelationshipsArticleText";
import DropDown from "../../../Components/DropDown";


const RelationshipsArticle6 = ({ navigation }) => {
  const article = relationshipsArticleTexts[5];

  return (
    <>
      <ArticleTitle text={article.ArticleTitle} />
      <BoldText text={article.BoldText[0]} />
      <SmallText text={article.SmallText[0]} />
      <DropDown
        titleText={article.DropDownTitle}
        smallText={article.DropDownSmallText}
        hasTopBorder={true}
      />
      <BoldText text={article.BoldText[1]} />
      <SmallText text={article.SmallText[1]} />
    </>
  );
};

export default RelationshipsArticle6;
