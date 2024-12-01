import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../../../components/ArticleHeader";
import SmallText from "../../../components/SmallText";
import BoldText from "../../../components/BoldText";
import ArticleTitle from "../../../components/ArticleTitle";
import ForwardingButton from "../../../components/ForwardingButton";
import { developmentArticleTexts } from "./DevelopmentArticleText";

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

const DevelopmentArticle2 = ({ navigation }) => {
  const article = developmentArticleTexts[1];

  const handleForward = () => {
    navigation.navigate("DevelopmentArticle3");
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader dotCount={6} filledDotIndex={article.ArticleIndex} />
        <ArticleTitle text={article.ArticleTitle} />
        <BoldText text={article.BoldText} />
        <SmallText text={article.SmallText} />
        <ForwardingButton
          text={article.ForwardingButton}
          backgroundColor="#FFF7CC"
          onPress={handleForward}
        />
      </ScrollView>
    </View>
  );
};

export default DevelopmentArticle2;
