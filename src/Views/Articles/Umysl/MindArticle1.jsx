import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../../../Components/ArticleHeader";
import SmallText from "../../../Components/SmallText";
import BoldText from "../../../Components/BoldText";
import MediumText from "../../../Components/MediumText";
import ArticleTitle from "../../../Components/ArticleTitle";
import ForwardingButton from "../../../Components/ForwardingButton";
import DropDown from "../../../Components/DropDown";
import DropDownCarousel from "../../../Components/DropDownCarousel";
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

const MindArticle1 = ({ navigation }) => {
  const article = mindArticleTexts[0];

  const handleForward = () => {
    navigation.navigate("MindArticle2");
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader dotCount={4} filledDotIndex={article.ArticleIndex} />
        <ArticleTitle text={article.ArticleTitle} />
          <SmallText text={article.SmallText} />
        <BoldText text={article.BoldText} />
        <DropDownCarousel
          titleText={article.DropDownTitle[1]}
          smallText={article.DropDownSmallText[1]}
          hasTopBorder={true}
          boldText1={article.CarouselBoldText[0]}
          boldText2={article.CarouselBoldText[1]}
          boldText3={article.CarouselBoldText[2]}
          carouselText1={article.CarouselText[0]}
          carouselText2={article.CarouselText[1]}
          carouselText3={article.CarouselText[2]}
        />
        <DropDown
          titleText={article.DropDownTitle[0]}
          smallText={article.DropDownSmallText[0]}
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

export default MindArticle1;
