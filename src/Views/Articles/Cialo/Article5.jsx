import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import ArticleHeader from "../../../components/ArticleHeader";
import SmallText from "../../../components/SmallText";
import BoldText from "../../../components/BoldText";
import DotLineHeader from "../../../components/DotLineHeader";
import ArticleTitle from "../../../components/ArticleTitle";
import ForwardingButton from "../../../components/ForwardingButton";
import MediumText from "../../../components/MediumText";
import { articleTexts } from "./BodyArticleText";
import DropDown from "../../../components/DropDown";

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

const Article5 = () => {
  const article = BodyArticleTexts[4];
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader dotCount={6} filledDotIndex={article.ArticleIndex} />
        <ArticleTitle text={article.ArticleTitle} />
        <SmallText text={article.SmallText[0]} />
        <BoldText text={article.BoldText} />
        <SmallText text={article.SmallText[1]} />
          <DropDown
                  titleText={article.DropDownTitle}
                  smallText={article.DropDownSmallText}
                  hasTopBorder={true}
                />
        <MediumText text={article.MediumText} />
        <DotLineHeader text={article.DotLineHeader} />
      </ScrollView>
      <ForwardingButton
        text={article.ForwardingButton}
        backgroundColor="#FFD3FA"
      />
    </View>
  );
};

export default Article5;
