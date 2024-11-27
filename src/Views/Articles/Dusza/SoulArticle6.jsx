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
import BoldText from "../../../components/BoldText";

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

const SoulArticle6 = ({ navigation }) => {
  const article = soulArticleTexts[5];
  const handleForward = () => {
       navigation.navigate("Article1");
     };
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader dotCount={6} filledDotIndex={article.ArticleIndex} />
        <ArticleTitle text={article.ArticleTitle} />
        <SmallText text={article.SmallText}/>
        <BoldText text={article.BoldText}/>
        <DropDown titleText={article.DropDownTitle[0]}smallText={article.DropDownSmallText[0]}hasTopBorder={true}/>
        <DropDown titleText={article.DropDownTitle[1]}smallText={article.DropDownSmallText[1]}hasTopBorder={false}/>
      </ScrollView>
      <ForwardingButton
        text={article.ForwardingButton}
        backgroundColor="#FFD3FA"
onPress={handleForward}
      />
    </View>
  );
};

export default SoulArticle6;
