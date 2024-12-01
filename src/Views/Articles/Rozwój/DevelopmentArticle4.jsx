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

const DevelopmentArticle4 = ({ navigation }) => {
  const article = developmentArticleTexts[3];

  const handleForward = () => {
    navigation.navigate("DevelopmentArticle5");
  };

  return (
    <View style={styles.mainContainer}>
         <ScrollView contentContainerStyle={styles.scrollView}>
           <ArticleHeader dotCount={6} filledDotIndex={article.ArticleIndex} />
           <ArticleTitle text={article.ArticleTitle} />
<BoldText text={article.BoldText[0]}/>
<SmallText text={article.SmallText[0]}/>
<MediumText text={article.MediumText[0]}/>
<SmallText text={article.SmallText[1]}/>
<MediumText text={article.MediumText[1]}/>
<SmallText text={article.SmallText[2]}/>
<BoldText text={article.BoldText[1]}/>
         </ScrollView>
         <ForwardingButton
           text={article.ForwardingButton}
           backgroundColor="#FFF7CC"
           onPress={handleForward}
         />
       </View>
  );
};

export default DevelopmentArticle4;
