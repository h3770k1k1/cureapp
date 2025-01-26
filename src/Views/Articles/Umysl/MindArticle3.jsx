import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../../../Components/ArticleHeader";
import SmallText from "../../../Components/SmallText";
import BoldText from "../../../Components/BoldText";
import MediumText from "../../../Components/MediumText";
import ArticleTitle from "../../../Components/ArticleTitle";
import ForwardingButton from "../../../Components/ForwardingButton/ForwardingButton";
import DropDown from "../../../Components/DropDown";
import { mindArticleTexts } from "../../Texts/MindArticleText";

const MindArticle3 = ({ navigation }) => {
  const article = mindArticleTexts[2];

  return (
    <>
      <ArticleTitle text={article.ArticleTitle} />
      <BoldText text={article.BoldText[0]} />
      <SmallText text={article.SmallText[0]} />
      <MediumText text={article.MediumText} />
      <SmallText text={article.SmallText[1]} />
      <BoldText text={article.BoldText[1]} />
      <SmallText text={article.SmallText[2]} />
    </>
  );
};

export default MindArticle3;
