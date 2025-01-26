import React from "react";
import { StyleSheet } from "react-native";
import SmallText from "../../../Components/SmallText";
import MediumText from "../../../Components/MediumText";
import DotLineHeader from "../../../Components/DotLineHeader";
import ArticleTitle from "../../../Components/ArticleTitle";
import { bodyArticleTexts } from "../../Texts/BodyArticleText";


const BodyArticle1 = () => {
  const article = bodyArticleTexts[0];

  return (
    <>
      <ArticleTitle text={article.ArticleTitle} />
      <SmallText text={article.SmallText} />
      <MediumText text={article.MediumText[0]} />
      <DotLineHeader text={article.DotLineHeader[0]} />
      <MediumText text={article.MediumText[1]} />
      <DotLineHeader text={article.DotLineHeader[1]} />
      <MediumText text={article.MediumText[2]} />
      <DotLineHeader text={article.DotLineHeader[2]} />
      <MediumText text={article.MediumText[3]} />
      <DotLineHeader text={article.DotLineHeader[3]} />
    </>
  );
};

export default BodyArticle1;
