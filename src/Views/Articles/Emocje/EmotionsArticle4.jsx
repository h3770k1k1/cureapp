import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../../../Components/ArticleHeader";
import SmallText from "../../../Components/SmallText";
import BoldText from "../../../Components/BoldText";
import MediumText from "../../../Components/MediumText";
import ArticleTitle from "../../../Components/ArticleTitle";
import ForwardingButton from "../../../Components/ForwardingButton/ForwardingButton";
import DropDown from "../../../Components/DropDown";
import { emotionsArticleTexts } from "../../Texts/EmotionsArticleText";

const EmotionsArticle4 = ({ navigation }) => {
  const article = emotionsArticleTexts[3];

  return (
    <>
      <ArticleTitle text={article.ArticleTitle} />
      <BoldText text={article.BoldText} />
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

export default EmotionsArticle4;
