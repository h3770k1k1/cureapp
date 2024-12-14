import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import ArticleHeader from "../../../Components/ArticleHeader";
import SmallText from "../../../Components/SmallText";
import BoldText from "../../../Components/BoldText";
import DotLineHeader from "../../../Components/DotLineHeader";
import ArticleTitle from "../../../Components/ArticleTitle";
import ForwardingButton from "../../../Components/ForwardingButton/ForwardingButton";
import MediumText from "../../../Components/MediumText";
import { bodyArticleTexts } from "../../Texts/BodyArticleText";
import DropDown from "../../../Components/DropDown";

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

const BodyArticle5 = ({ navigation }) => {
  const article = bodyArticleTexts[4];
  const handleForward = () => {
    navigation.navigate("BodyArticle6");
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader
          dotCount={bodyArticleTexts.length}
          filledDotIndex={article.ArticleIndex}
        />
        <ArticleTitle text={article.ArticleTitle} />
        <SmallText text={article.SmallText[0]} />
        <BoldText text={article.BoldText} />
        <SmallText text={article.SmallText[1]} />
        <DropDown
          titleText={article.DropDownTitle}
          smallText={article.DropDownSmallText}
          hasTopBorder={true}
        />
        <MediumText text={article.MediumText} />
        <DotLineHeader text={article.DotLineHeader} />
      </ScrollView>
      <ForwardingButton
                                                text={article.ForwardingButton}
                                                currentArticle="BodyArticle5"
                                                navigation={navigation}
                                              />
    </View>
  );
};

export default BodyArticle5;
