import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../../../Components/ArticleHeader";
import SmallText from "../../../Components/SmallText";
import BoldText from "../../../Components/BoldText";
import MediumText from "../../../Components/MediumText";
import ArticleTitle from "../../../Components/ArticleTitle";
import ForwardingButton from "../../../Components/ForwardingButton/ForwardingButton";
import { relationshipsArticleTexts } from "../../Texts/RelationshipsArticleText";
import DropDown from "../../../Components/DropDown";
import Carousel from "../../../Components/Carousel";
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFF7CC",
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 100,
  },
});

const RelationshipsArticle4 = ({ navigation }) => {
  const article = relationshipsArticleTexts[3];

  return (
    <>
      <ArticleTitle text={article.ArticleTitle} />
      <BoldText text={article.BoldText[0]} />
      <SmallText text={article.SmallText[0]} />
      <MediumText text={article.MediumText[0]} />
      <SmallText text={article.SmallText[1]} />
      <MediumText text={article.MediumText[1]} />
      <SmallText text={article.SmallText[2]} />
      <BoldText text={article.BoldText[1]} />
      <Carousel text={article.CarouselText} name={article.CarouselName} />
    </>
  );
};

export default RelationshipsArticle4;
