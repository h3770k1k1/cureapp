import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../../../Components/ArticleHeader";
import SmallText from "../../../Components/SmallText";
import BoldText from "../../../Components/BoldText";
import ArticleTitle from "../../../Components/ArticleTitle";
import ForwardingButton from "../../../Components/ForwardingButton";
import DropDown from "../../../Components/DropDown";
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

const BodyArticle6 = ({ navigation }) => {
  const article = bodyArticleTexts[5];
  const handleForward = () => {
    navigation.navigate("MindArticle1");
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
                                                 currentArticle="BodyArticle6"
                                                 navigation={navigation}
                                               />
    </View>
  );
};

export default BodyArticle6;
