import ForwardingButton from "../../../components/ForwardingButton";
import React from "react";
import { soulArticleTexts } from "./SoulArticleText";
import ArticleHeader from "../../../components/ArticleHeader";
import ArticleTitle from "../../../components/ArticleTitle";
import SmallText from "../../../components/SmallText";
import DropDown from "../../../components/DropDown";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import LinkButton from "../../../components/LinkButton";
import LetterDropDown from "../../../components/LetterDropDown";
import BoldText from "../../../components/BoldText";

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
        <ArticleHeader dotCount={6} filledDotIndex={article.ArticleIndex} />
        <ArticleTitle text={article.ArticleTitle} />
<SmallText text={article.SmallText[0]}/>
<DropDown titleText={article.DropDownTitle}smallText={article.DropDownSmallText}  hasTopBorder={true}/>
     <BoldText text={article.BoldText}/>
     <SmallText text={article.SmallText[1]}/>
      </ScrollView>
      <ForwardingButton
        text={article.ForwardingButton}
        backgroundColor="#CDF6FF"
onPress={handleForward}
      />
    </View>
  );
};

export default SoulArticle4;
