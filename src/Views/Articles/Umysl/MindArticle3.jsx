import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../../../Components/ArticleHeader";
import SmallText from "../../../Components/SmallText";
import BoldText from "../../../Components/BoldText";
import MediumText from "../../../Components/MediumText";
import ArticleTitle from "../../../Components/ArticleTitle";
import ForwardingButton from "../../../Components/ForwardingButton";
import DropDown from "../../../Components/DropDown";
import { mindArticleTexts } from "../../Texts/MindArticleText";

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

const MindArticle3 = ({ navigation }) => {
  const article = mindArticleTexts[2];

  const handleForward = () => {
    navigation.navigate("MindArticle4");
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader
          dotCount={mindArticleTexts.length}
          filledDotIndex={article.ArticleIndex}
        />
        <ArticleTitle text={article.ArticleTitle} />
        <BoldText text={article.BoldText[0]} />
        <SmallText text={article.SmallText[0]} />
        <MediumText text={article.MediumText} />
        <SmallText text={article.SmallText[1]} />
        <BoldText text={article.BoldText[1]} />
        <SmallText text={article.SmallText[2]} />
      </ScrollView>
      <ForwardingButton
             text={article.ForwardingButton}
             currentArticle="MindArticle3"
             navigation={navigation}
           />
    </View>
  );
};

export default MindArticle3;
