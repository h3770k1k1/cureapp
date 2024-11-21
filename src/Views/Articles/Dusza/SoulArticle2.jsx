import ForwardingButton from "../../../components/ForwardingButton";
import React from "react";
import { soulArticleTexts } from "./SoulArticleText";
import ArticleHeader from "../../../components/ArticleHeader";
import ArticleTitle from "../../../components/ArticleTitle";
import SmallText from "../../../components/SmallText";
import DropDown from "../../../components/DropDown";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import LinkButton from "../../../components/LinkButton";
import LetterDropDown from "../../../components/LetterDropDown";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#CDF6FF",
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 100,
  },
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

const SoulArticle2 = () => {
  const article = soulArticleTexts[1];
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader dotCount={6} filledDotIndex={article.ArticleIndex} />
        <ArticleTitle text={article.ArticleTitle} />
        <SmallText text={article.SmallText[0]} />
        <Text style={styles.quote}>{article.QuoteText}</Text>
        <SmallText text={article.SmallText[1]} />
        <DropDown
          titleText={article.DropDownTitle[0]}
          smallText={article.DropDownSmallText}
          hasTopBorder={true}
        />
        <LetterDropDown titleText={article.DropDownTitle[1]} sideLetter={article.SideLetter}/>
        <View style={styles.linkButtonsContainer}><LinkButton text={article.LinkButton[0]}/><LinkButton text={article.LinkButton[1]}/></View>
      </ScrollView>
      <ForwardingButton
        text={article.ForwardingButton}
        backgroundColor="#CDF6FF"

      />
    </View>
  );
};

export default SoulArticle2;
