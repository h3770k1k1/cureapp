import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../../../Components/ArticleHeader";
import SmallText from "../../../Components/SmallText";
import MediumText from "../../../Components/MediumText";
import ArticleTitle from "../../../Components/ArticleTitle";
import ForwardingButton from "../../../Components/ForwardingButton/ForwardingButton";
import DropDown from "../../../Components/DropDown";
import { relationshipsArticleTexts } from "../../Texts/RelationshipsArticleText";
import SeparatingDots from "../../../Components/Icons/SeparatingDots";


const RelationshipsArticle1 = ({ navigation }) => {
  const article = relationshipsArticleTexts[0];

  return (
    <>
      <ArticleTitle text={article.ArticleTitle} />
      <SmallText text={article.SmallText} />
      {Array.from({ length: 13 }, (_, index) => (
        <React.Fragment key={index}>
          <MediumText text={article.MediumText[index]} />
          <SeparatingDots />
        </React.Fragment>
      ))}
    </>
  );
};

export default RelationshipsArticle1;
