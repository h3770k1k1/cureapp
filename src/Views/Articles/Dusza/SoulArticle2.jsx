import ForwardingButton from "../../../Components/ForwardingButton/ForwardingButton";
import React from "react";
import { soulArticleTexts } from "../../Texts/SoulArticleText";
import ArticleHeader from "../../../Components/ArticleHeader";
import ArticleTitle from "../../../Components/ArticleTitle";
import SmallText from "../../../Components/SmallText";
import DropDown from "../../../Components/DropDown";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import LinkButton from "../../../Components/LinkButton";
import LetterDropDown from "../../../Components/LetterDropDown";
import BoldText from "../../../Components/BoldText";

const styles = StyleSheet.create({
  quote: {
    paddingTop: 10,
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 25,
  },
  linkButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    alignItems: "flex-start",
  },
});

const SoulArticle2 = ({ navigation }) => {
  const article = soulArticleTexts[1];

  return (
    <>
      <ArticleTitle text={article.ArticleTitle} />
      <SmallText text={article.SmallText[0]} />
      <BoldText text={article.BoldText}></BoldText>
      <SmallText text={article.SmallText[1]} />
      <DropDown
        titleText={article.DropDownTitle[0]}
        smallText={article.DropDownSmallText}
        hasTopBorder={true}
      />
      <LetterDropDown
        titleText={article.DropDownTitle[1]}
        sideLetter={article.SideLetter}
      />
      <View style={styles.linkButtonsContainer}>
        <LinkButton text={article.LinkButton[0]} />
        <LinkButton text={article.LinkButton[1]} />
      </View>
    </>
  );
};

export default SoulArticle2;
