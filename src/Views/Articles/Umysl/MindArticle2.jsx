import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../../../Components/ArticleHeader";
import SmallText from "../../../Components/SmallText";
import BoldText from "../../../Components/BoldText";
import MediumText from "../../../Components/MediumText";
import ArticleTitle from "../../../Components/ArticleTitle";
import ForwardingButton from "../../../Components/ForwardingButton";
import DropDown from "../../../Components/DropDown";
import { mindArticleTexts } from "./MindArticleText";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFE2CC",
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 100,
  },
});

const MindArticle2 = ({ navigation }) => {
  const article = mindArticleTexts[1];

  const handleForward = () => {
    navigation.navigate("MindArticle3");
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader dotCount={4} filledDotIndex={article.ArticleIndex} />
        <ArticleTitle text={article.ArticleTitle} />
        <SmallText text={article.SmallText} />
        <BoldText text={article.BoldText} />
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
        backgroundColor="#FFE2CC"
        onPress={handleForward}
      />
    </View>
  );
};

export default MindArticle2;
