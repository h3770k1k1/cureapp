import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../../../Components/ArticleHeader";
import SmallText from "../../../Components/SmallText";
import BoldText from "../../../Components/BoldText";
import MediumText from "../../../Components/MediumText";
import ArticleTitle from "../../../Components/ArticleTitle";
import ForwardingButton from "../../../Components/ForwardingButton";
import { relationshipsArticleTexts } from "./RelationshipsArticleText";
import DropDown from "../../../Components/DropDown";
import Carousel from "../../../Components/Carousel"
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

const RelationshipsArticle4 = ({ navigation }) => {
  const article = relationshipsArticleTexts[3];

  const handleForward = () => {
    navigation.navigate("RelationshipsArticle5");
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader dotCount={6} filledDotIndex={article.ArticleIndex} />
        <ArticleTitle text={article.ArticleTitle} />
        <BoldText text={article.BoldText[0]} />
        <SmallText text={article.SmallText[0]} />
        <MediumText text={article.MediumText[0]} />
        <SmallText text={article.SmallText[1]} />
        <MediumText text={article.MediumText[1]} />
        <SmallText text={article.SmallText[2]} />
        <BoldText text={article.BoldText[1]} />
       <Carousel
         text={article.CarouselText}
         name={article.CarouselName}
       />
      </ScrollView>
      <ForwardingButton
        text={article.ForwardingButton}
        backgroundColor="#FFF7CC"
        onPress={handleForward}
      />
    </View>
  );
};

export default RelationshipsArticle4;
