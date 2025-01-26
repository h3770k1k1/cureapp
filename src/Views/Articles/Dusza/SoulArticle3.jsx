import ForwardingButton from "../../../Components/ForwardingButton/ForwardingButton";
import React from "react";
import { soulArticleTexts } from "../../Texts/SoulArticleText";
import ArticleHeader from "../../../Components/ArticleHeader";
import ArticleTitle from "../../../Components/ArticleTitle";
import SmallText from "../../../Components/SmallText";
import BoldText from "../../../Components/BoldText";
import MediumText from "../../../Components/MediumText";
import DropDown from "../../../Components/DropDown";
import { ScrollView, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";


const SoulArticle3 = ({ navigation }) => {
  const article = soulArticleTexts[2];

  return (
    <>
      <ArticleTitle text={article.ArticleTitle} />
      <SmallText text={article.SmallText[0]} />
      <BoldText text={article.BoldText} />
      <SmallText text={article.SmallText[1]} />
      <MediumText text={article.MediumText} />
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
      <DropDown
        titleText={article.DropDownTitle[3]}
        smallText={article.DropDownSmallText[3]}
        hasTopBorder={false}
      />
    </>
  );
};
export default SoulArticle3;
