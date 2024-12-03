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

const MindArticle4 = ({ navigation }) => {
  const article = mindArticleTexts[3];

  const handleForward = () => {
    navigation.navigate("DevelopmentArticle1");
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader dotCount={4} filledDotIndex={article.ArticleIndex} />
        <ArticleTitle text={article.ArticleTitle} />
<SmallText text={article.SmallText[0]}/>
<BoldText text={article.BoldText}/>
<SmallText text={article.SmallText[1]}/>
<DropDown
          titleText={article.DropDownTitle}
          smallText={article.DropDownSmallText}
          hasTopBorder={true}
        />
      <SmallText text={article.SmallText[2]}/>
      </ScrollView>
      <ForwardingButton
        text={article.ForwardingButton}
        backgroundColor="#FFF7CC"
        onPress={handleForward}
      />
    </View>
  );
};

export default MindArticle4;
