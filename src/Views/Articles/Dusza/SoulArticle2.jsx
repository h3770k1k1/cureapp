import ForwardingButton from "../../../Components/ForwardingButton";
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

const SoulArticle2 = ({ navigation }) => {
  const article = soulArticleTexts[1];
  const handleForward = () => {
    navigation.navigate("SoulArticle3");
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader dotCount={6} filledDotIndex={article.ArticleIndex} />
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
      </ScrollView>
      <ForwardingButton
        text={article.ForwardingButton}
        backgroundColor="#CDF6FF"
        onPress={handleForward}
      />
    </View>
  );
};

export default SoulArticle2;
