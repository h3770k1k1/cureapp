import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../../../components/ArticleHeader";
import SmallText from "../../../components/SmallText";
import MediumText from "../../../components/MediumText";
import DotLineHeader from "../../../components/DotLineHeader";
import ArticleTitle from "../../../components/ArticleTitle";
import ForwardingButton from "../../../components/ForwardingButton";
import { bodyArticleTexts } from "./BodyArticleText";

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

const Article2 = ({ navigation }) => {
  const article = bodyArticleTexts[1];
  const handleForward = () => {
      navigation.navigate("Article3");
    };
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader dotCount={6} filledDotIndex={article.ArticleIndex} />
        <ArticleTitle text={article.ArticleTitle} />
        <SmallText text={article.SmallText} />
        <MediumText text={article.MediumText} />
        <DotLineHeader text={article.DotLineHeader} />
      </ScrollView>
      <ForwardingButton
        text={article.ForwardingButton}
        backgroundColor="#FFD3FA"
        onPress={handleForward}
      />
    </View>
  );
};

export default Article2;
