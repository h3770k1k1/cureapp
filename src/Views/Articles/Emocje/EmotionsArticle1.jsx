import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../../../components/ArticleHeader";
import SmallText from "../../../components/SmallText";
import BoldText from "../../../components/BoldText";
import ArticleTitle from "../../../components/ArticleTitle";
import ForwardingButton from "../../../components/ForwardingButton";
import DropDown from "../../../components/DropDown";
import { emotionsArticleTexts } from "./EmotionsArticleText";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#D3F2D7",
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 100,
  },
});

const EmotionsArticle1 = ({ navigation }) => {
  const article = emotionsArticleTexts[0];

  const handleForward = () => {
    navigation.navigate("EmotionsArticle2");
  }

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader dotCount={4} filledDotIndex={article.ArticleIndex} />
        <ArticleTitle text={article.ArticleTitle} />
        <SmallText text={article.SmallText[0]} />
        <BoldText text={article.BoldText[0]} />
        <SmallText text={article.SmallText[1]} />
        <DropDown
          titleText={article.DropDownTitle[0]}
          smallText={article.DropDownSmallText[0]}
          hasTopBorder={true}
        />
        <DropDown
          titleText={article.DropDownTitle[1]}
          smallText={article.DropDownSmallText[1]}
          hasTopBorder={false}
        />
        <BoldText text={article.BoldText[1]} />
        <SmallText text={article.SmallText[2]} />
      </ScrollView>
      <ForwardingButton
        text={article.ForwardingButton}
        backgroundColor="#D3F2D7"
        onPress={handleForward}
      />
    </View>
  );
};

export default EmotionsArticle1;
