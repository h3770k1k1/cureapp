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


const EmotionsArticle2 = (index) => {
  const article = emotionsArticleTexts[1];

  return (
    <>
      <ArticleTitle text={article.ArticleTitle} />
      <BoldText text={article.BoldText} />
      <MediumText text={article.MediumText[0]} />
      <SmallText text={article.SmallText[0]} />
      <MediumText text={article.MediumText[1]} />
      <SmallText text={article.SmallText[1]} />
      <MediumText text={article.MediumText[2]} />
      <SmallText text={article.SmallText[2]} />
      <MediumText text={article.MediumText[3]} />
      <SmallText text={article.SmallText[3]} />
      <MediumText text={article.MediumText[4]} />
      <SmallText text={article.SmallText[4]} />
      <MediumText text={article.MediumText[5]} />
      <SmallText text={article.SmallText[5]} />
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
    </>
  );
};

export default EmotionsArticle2;
