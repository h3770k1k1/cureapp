import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../../../Components/ArticleHeader";
import SmallText from "../../../Components/SmallText";
import BoldText from "../../../Components/BoldText";
import MediumText from "../../../Components/MediumText";
import ArticleTitle from "../../../Components/ArticleTitle";
import ForwardingButton from "../../../Components/ForwardingButton";
import DropDown from "../../../Components/DropDown";
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

const EmotionsArticle4 = ({ navigation }) => {
  const article = emotionsArticleTexts[3];

  const handleForward = () => {
    navigation.navigate("SoulArticle1");
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader dotCount={4} filledDotIndex={article.ArticleIndex} />
        <ArticleTitle text={article.ArticleTitle} />
        <BoldText text={article.BoldText} />
        <SmallText text={article.SmallText} />
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
        <DropDown
          titleText={article.DropDownTitle[2]}
          smallText={article.DropDownSmallText[2]}
          hasTopBorder={false}
        />
      </ScrollView>
      <ForwardingButton
        text={article.ForwardingButton}
        backgroundColor="#CDF6FF"
        onPress={handleForward}
      />
    </View>
  );
};

export default EmotionsArticle4;
