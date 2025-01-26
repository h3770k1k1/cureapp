import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import ArticleHeader from "../../../Components/ArticleHeader";
import SmallText from "../../../Components/SmallText";
import BoldText from "../../../Components/BoldText";
import DotLineHeader from "../../../Components/DotLineHeader";
import ArticleTitle from "../../../Components/ArticleTitle";
import ForwardingButton from "../../../Components/ForwardingButton/ForwardingButton";
import DottedArrows from "../../../Components/Icons/DottedArrows";
import { bodyArticleTexts } from "../../Texts/BodyArticleText";


const BodyArticle3 = ({ navigation }) => {
  const article = bodyArticleTexts[2];

  return (
    <>
      <ArticleTitle text={article.ArticleTitle} />
      <SmallText text={article.SmallText[0]} />
      <BoldText text={article.BoldText} />
      <SmallText text={article.SmallText[1]} />
      <Text>
        <DottedArrows style={{ transform: [{ scale: 1.1 }] }} />
      </Text>
    </>
  );
};

export default BodyArticle3;
