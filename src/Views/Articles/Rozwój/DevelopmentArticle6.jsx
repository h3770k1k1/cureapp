import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../../../components/ArticleHeader";
import SmallText from "../../../components/SmallText";
import BoldText from "../../../components/BoldText";
import MediumText from "../../../components/MediumText";
import ArticleTitle from "../../../components/ArticleTitle";
import ForwardingButton from "../../../components/ForwardingButton";
import { developmentArticleTexts } from "./DevelopmentArticleText";
import DropDown from "../../../components/DropDown";

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

const DevelopmentArticle6 = ({ navigation }) => {
  const article = developmentArticleTexts[5];

  const handleForward = () => {
    navigation.navigate("EmotionsArticle1");
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader dotCount={6} filledDotIndex={article.ArticleIndex} />
        <ArticleTitle text={article.ArticleTitle} />
<BoldText text={article.BoldText[0]}/>
<SmallText text={article.SmallText[0]}/>
  <DropDown
          titleText={article.DropDownTitle}
          smallText={article.DropDownSmallText}
          hasTopBorder={true}
        />
<BoldText text={article.BoldText[1]}/>
<SmallText text={article.SmallText[1]}/>
      </ScrollView>
      <ForwardingButton
        text={article.ForwardingButton}
        backgroundColor="#D3F2D7"
        onPress={handleForward}
      />
    </View>
  );
};

export default DevelopmentArticle6;
