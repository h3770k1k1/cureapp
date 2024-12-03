import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../../../components/ArticleHeader";
import SmallText from "../../../components/SmallText";
import BoldText from "../../../components/BoldText";
import MediumText from "../../../components/MediumText";
import ArticleTitle from "../../../components/ArticleTitle";
import ForwardingButton from "../../../components/ForwardingButton";
import DropDown from "../../../components/DropDown";
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

const MindArticle3 = ({ navigation }) => {
  const article = mindArticleTexts[2];

  const handleForward = () => {
    navigation.navigate("MindArticle4");
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader dotCount={4} filledDotIndex={article.ArticleIndex} />
        <ArticleTitle text={article.ArticleTitle} />
        <BoldText text={article.BoldText[0]} />
         <SmallText text={article.SmallText[0]} />
         <MediumText text={article.MediumText}/>
         <SmallText text={article.SmallText[1]}/>
          <BoldText text={article.BoldText[1]} />
 <SmallText text={article.SmallText[2]}/>
      </ScrollView>
      <ForwardingButton
        text={article.ForwardingButton}
        backgroundColor="#FFE2CC"
        onPress={handleForward}
      />
    </View>
  );
};

export default MindArticle3;
