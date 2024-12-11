import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import ArticleHeader from "../../../Components/ArticleHeader";
import SmallText from "../../../Components/SmallText";
import BoldText from "../../../Components/BoldText";
import DotLineHeader from "../../../Components/DotLineHeader";
import ArticleTitle from "../../../Components/ArticleTitle";
import ForwardingButton from "../../../Components/ForwardingButton";
import LetterDropdown from "../../../Components/LetterDropDown";
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

const BodyArticle4 = ({ navigation }) => {
  const article = bodyArticleTexts[3];
  const handleForward = () => {
    navigation.navigate("BodyArticle5");
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader
          dotCount={bodyArticleTexts.length}
          filledDotIndex={article.ArticleIndex}
        />
        <ArticleTitle text={article.ArticleTitle} />
        <SmallText text={article.SmallText} />
        <BoldText text={article.BoldText} />
        <LetterDropdown
          titleText={article.DropDownTitle[0]}
          smallText={article.DropDownSmallText[0]}
          linkText={article.DropDownLink[0]}
          sideLetter={article.SideLetter[0]}
          linkText2={article.DropDownLink[1]}
        />
        <LetterDropdown
          titleText={article.DropDownTitle[1]}
          smallText={article.DropDownSmallText[1]}
          linkText={article.DropDownLink[0]}
          sideLetter={article.SideLetter[1]}
          linkText2={article.DropDownLink[1]}
        />
        <LetterDropdown
          titleText={article.DropDownTitle[2]}
          sideLetter={article.SideLetter[2]}
        />
      </ScrollView>
       <ForwardingButton
                                                 text={article.ForwardingButton}
                                                 currentArticle="BodyArticle4"
                                                 navigation={navigation}
                                               />
    </View>
  );
};

export default BodyArticle4;
