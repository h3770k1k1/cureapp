import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../../../Components/ArticleHeader";
import SmallText from "../../../Components/SmallText";
import MediumText from "../../../Components/MediumText";
import DotLineHeader from "../../../Components/DotLineHeader";
import ArticleTitle from "../../../Components/ArticleTitle";
import ForwardingButton from "../../../Components/ForwardingButton";
import { bodyArticleTexts } from "../../Texts/BodyArticleText";

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

const BodyArticle1 = ({ navigation }) => {
  const article = bodyArticleTexts[0];

  const handleForward = () => {
    navigation.navigate("BodyArticle2");
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader dotCount={bodyArticleTexts.length} filledDotIndex={article.ArticleIndex} />
        <ArticleTitle text={article.ArticleTitle} />
        <SmallText text={article.SmallText} />
        <MediumText text={article.MediumText[0]} />
        <DotLineHeader text={article.DotLineHeader[0]} />
        <MediumText text={article.MediumText[1]} />
        <DotLineHeader text={article.DotLineHeader[1]} />
        <MediumText text={article.MediumText[2]} />
        <DotLineHeader text={article.DotLineHeader[2]} />
        <MediumText text={article.MediumText[3]} />
        <DotLineHeader text={article.DotLineHeader[3]} />
      </ScrollView>
      <ForwardingButton
        text={article.ForwardingButton}
        backgroundColor="#FFD3FA"
        onPress={handleForward}
      />
    </View>
  );
};

export default BodyArticle1;
