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


const EmotionsArticle3 = ({ navigation }) => {
  const article = emotionsArticleTexts[2];

  return (
    <>
      <ArticleTitle text={article.ArticleTitle} />
      <SmallText text={article.SmallText[0]} />
      <BoldText text={article.BoldText} />
      <SmallText text={article.SmallText[1]} />
      <DropDown
        titleText={article.DropDownTitle}
        smallText={article.DropDownSmallText}
        hasTopBorder={true}
      />
    </>
  );
};

export default EmotionsArticle3;
