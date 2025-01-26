import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../../../Components/ArticleHeader";
import SmallText from "../../../Components/SmallText";
import BoldText from "../../../Components/BoldText";
import ArticleTitle from "../../../Components/ArticleTitle";
import ForwardingButton from "../../../Components/ForwardingButton/ForwardingButton";
import DropDown from "../../../Components/DropDown";
import { emotionsArticleTexts } from "../../Texts/EmotionsArticleText";


const EmotionsArticle1 = ({ navigation }) => {
  const article = emotionsArticleTexts[0];

  return (
    <>
      <ArticleTitle text={article.ArticleTitle} />
      <SmallText text={article.SmallText[0]} />
      <BoldText text={article.BoldText[0]} />
      <SmallText text={article.SmallText[1]} />
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
      <BoldText text={article.BoldText[1]} />
      <SmallText text={article.SmallText[2]} />
    </>
  );
};

export default EmotionsArticle1;
