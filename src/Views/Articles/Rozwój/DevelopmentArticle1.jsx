import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../../../components/ArticleHeader";
import SmallText from "../../../components/SmallText";
import MediumText from "../../../components/MediumText";
import ArticleTitle from "../../../components/ArticleTitle";
import ForwardingButton from "../../../components/ForwardingButton";
import DropDown from "../../../components/DropDown";
import { developmentArticleTexts } from "./DevelopmentArticleText";
import SeparatingDots from "../../../components/SeparatingDots";
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

const DevelopmentArticle1 = ({ navigation }) => {
  const article = developmentArticleTexts[0];

  const handleForward = () => {
    navigation.navigate("DevelopmentArticle2");
  }

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader dotCount={6} filledDotIndex={article.ArticleIndex} />
        <ArticleTitle text={article.ArticleTitle} />
        <SmallText text={article.SmallText} />
         {Array.from({ length: 13 }, (_, index) => (
                  <React.Fragment key={index}>
                    <MediumText text={article.MediumText[index]} />
                    <SeparatingDots />
                  </React.Fragment>
                ))}
      </ScrollView>
      <ForwardingButton
        text={article.ForwardingButton}
        backgroundColor="#FFF7CC"
        onPress={handleForward}
      />
    </View>
  );
};

export default DevelopmentArticle1;
