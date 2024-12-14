import ForwardingButton from "../../../Components/ForwardingButton/ForwardingButton";
import React from "react";
import { soulArticleTexts } from "../../Texts/SoulArticleText";
import ArticleHeader from "../../../Components/ArticleHeader";
import ArticleTitle from "../../../Components/ArticleTitle";
import SmallText from "../../../Components/SmallText";
import DropDown from "../../../Components/DropDown";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import LinkButton from "../../../Components/LinkButton";
import LetterDropDown from "../../../Components/LetterDropDown";
import BoldText from "../../../Components/BoldText";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#CDF6FF",
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 100,
  },
  quote: {
    paddingTop: 10,
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 25,
  },
  linkButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    alignItems: "flex-start",
  },
});

const SoulArticle4 = ({ navigation }) => {
  const article = soulArticleTexts[3];
  const handleForward = () => {
    navigation.navigate("SoulArticle5");
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader
          dotCount={soulArticleTexts.length}
          filledDotIndex={article.ArticleIndex}
        />
        <ArticleTitle text={article.ArticleTitle} />
        <SmallText text={article.SmallText[0]} />
        <DropDown
          titleText={article.DropDownTitle}
          smallText={article.DropDownSmallText}
          hasTopBorder={true}
        />
        <BoldText text={article.BoldText} />
        <SmallText text={article.SmallText[1]} />
      </ScrollView>
     <ForwardingButton
                                   text={article.ForwardingButton}
                                   currentArticle="SoulArticle4"
                                   navigation={navigation}
                                 />
    </View>
  );
};

export default SoulArticle4;
