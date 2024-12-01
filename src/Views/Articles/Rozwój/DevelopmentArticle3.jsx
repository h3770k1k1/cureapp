import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../../../components/ArticleHeader";
import SmallText from "../../../components/SmallText";
import BoldText from "../../../components/BoldText";
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

const DevelopmentArticle3 = ({ navigation }) => {
  const article = developmentArticleTexts[2]; // Ensure index [2] is valid

  const handleForward = () => {
    navigation.navigate("DevelopmentArticle4");
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader dotCount={6} filledDotIndex={article.ArticleIndex} />
        <ArticleTitle text={article.ArticleTitle} />
       <SmallText text={article.SmallText}/>
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
        {/* Forwarding Button */}
        <ForwardingButton
          text={article.ForwardingButton}
          backgroundColor="#FFF7CC"
          onPress={handleForward}
        />
      </ScrollView>
    </View>
  );
};

export default DevelopmentArticle3;
