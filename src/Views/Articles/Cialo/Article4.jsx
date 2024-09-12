import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import ArticleHeader from "../../../components/ArticleHeader";
import SmallText from "../../../components/SmallText";
import BoldText from "../../../components/BoldText";
import DotLineHeader from "../../../components/DotLineHeader";
import ArticleTitle from "../../../components/ArticleTitle";
import ForwardingButton from "../../../components/ForwardingButton";
import LetterDropdown from "../../../components/LetterDropDown";
import { articleTexts } from "./BodyArticleText";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFD3FA",
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 100,
  },
});

const Article4 = () => {
  const article = articleTexts[3];
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader dotCount={6} filledDotIndex={article.ArticleIndex} />
        <ArticleTitle text={article.ArticleTitle} />
        <SmallText text={article.SmallText} />
        <BoldText text={article.BoldText} />
        <LetterDropdown titleText={ article.DropDownTitle[0]} smallText={article.DropDownSmallText[0]} linkText={article.DropDownLink[0]} sideLetter={article.SideLetter[0]} linkText2={article.DropDownLink[1]}/>
      </ScrollView>
      <ForwardingButton
        text={article.ForwardingButton}
        backgroundColor="#FFD3FA"
      />
    </View>
  );
};

export default Article4;
