import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../../../Components/ArticleHeader";
import SmallText from "../../../Components/SmallText";
import BoldText from "../../../Components/BoldText";
import MediumText from "../../../Components/MediumText";
import ArticleTitle from "../../../Components/ArticleTitle";
import ForwardingButton from "../../../Components/ForwardingButton/ForwardingButton";
import DropDown from "../../../Components/DropDown";
import { emotionsArticleTexts } from "../../Texts/EmotionsArticleText";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#D3F2D7",
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 100,
  },
});

const EmotionsArticle3 = ({ navigation }) => {
  const article = emotionsArticleTexts[2];

  const handleForward = () => {
    navigation.navigate("EmotionsArticle4");
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader
          dotCount={emotionsArticleTexts.length}
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
      </ScrollView>
      <ForwardingButton
                          text={article.ForwardingButton}
                          currentArticle="EmotionsArticle3"
                          navigation={navigation}
                        />
    </View>
  );
};

export default EmotionsArticle3;
