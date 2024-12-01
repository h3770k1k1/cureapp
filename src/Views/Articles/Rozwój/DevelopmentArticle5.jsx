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

const DevelopmentArticle5 = ({ navigation }) => {
  const article = developmentArticleTexts[4];

  const handleForward = () => {
    navigation.navigate("DevelopmentArticle6");
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader dotCount={6} filledDotIndex={article.ArticleIndex} />
        <ArticleTitle text={article.ArticleTitle} />
<SmallText text={article.SmallText[0]}/>
<BoldText text={article.BoldText[0]}/>
<BoldText text={article.BoldText[1]}/>
<SmallText text={article.SmallText[1]}/>
<BoldText text={article.BoldText[2]}/>
<SmallText text={article.SmallText[2]}/>
<BoldText text={article.BoldText[3]}/>
<SmallText text={article.SmallText[3]}/>
<BoldText text={article.BoldText[4]}/>
<SmallText text={article.SmallText[4]}/>
<BoldText text={article.BoldText[5]}/>
<SmallText text={article.SmallText[5]}/>
<BoldText text={article.BoldText[6]}/>
<SmallText text={article.SmallText[6]}/>
      </ScrollView>
      <ForwardingButton
        text={article.ForwardingButton}
        backgroundColor="#FFF7CC"
        onPress={handleForward}
      />
    </View>
  );
};

export default DevelopmentArticle5;
