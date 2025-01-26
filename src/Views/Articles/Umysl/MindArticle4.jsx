import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../../../Components/ArticleHeader";
import SmallText from "../../../Components/SmallText";
import BoldText from "../../../Components/BoldText";
import ArticleTitle from "../../../Components/ArticleTitle";
import ForwardingButton from "../../../Components/ForwardingButton/ForwardingButton";
import DropDown from "../../../Components/DropDown";
import { mindArticleTexts } from "../../Texts/MindArticleText";


const MindArticle4 = ({ navigation }) => {
  const article = mindArticleTexts[3];

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
      <SmallText text={article.SmallText[2]} />
    </>
  );
};

export default MindArticle4;
