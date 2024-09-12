import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../../../components/ArticleHeader";
import SmallText from "../../../components/SmallText";
import BoldText from "../../../components/BoldText";
import ArticleTitle from "../../../components/ArticleTitle";
import ForwardingButton from "../../../components/ForwardingButton";
import DropDown from "../../../components/DropDown";
import { articleTexts } from "./BodyArticleText";

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

const Article6 = () => {
  const article = articleTexts[5];

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader dotCount={6} filledDotIndex={article.ArticleIndex} />
        <ArticleTitle text={article.ArticleTitle} />
        <SmallText text={article.SmallText[0]} />
        <BoldText text={article.BoldText} />
        <SmallText text={article.SmallText[1]} />

        {/* First Dropdown with borderTopWidth */}
        <DropDown
          titleText={article.DropDownTitle[0]}
          smallText={article.DropDownSmallText[0]}
          linkText={article.DropDownLink[0]}
          hasTopBorder={true}
        />

        {/* Other Dropdowns without borderTopWidth */}
        <DropDown
          titleText={article.DropDownTitle[1]}
          smallText={article.DropDownSmallText[1]}
          linkText={article.DropDownLink[1]}
          hasTopBorder={false}
        />
        <DropDown
          titleText={article.DropDownTitle[2]}
          smallText={article.DropDownSmallText[2]}
          linkText={article.DropDownLink[2]}
          hasTopBorder={false}
        />
      </ScrollView>
      <ForwardingButton
        text={article.ForwardingButton}
        backgroundColor="#FFE2CC"
      />
    </View>
  );
};

export default Article6;
