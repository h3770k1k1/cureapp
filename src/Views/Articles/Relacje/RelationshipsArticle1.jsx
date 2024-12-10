import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ArticleHeader from "../../../Components/ArticleHeader";
import SmallText from "../../../Components/SmallText";
import MediumText from "../../../Components/MediumText";
import ArticleTitle from "../../../Components/ArticleTitle";
import ForwardingButton from "../../../Components/ForwardingButton";
import DropDown from "../../../Components/DropDown";
import { relationshipsArticleTexts } from "../../Texts/RelationshipsArticleText";
import SeparatingDots from "../../../Components/Icons/SeparatingDots";
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

const RelationshipsArticle1 = ({ navigation }) => {
  const article = relationshipsArticleTexts[0];

  const handleForward = () => {
    navigation.navigate("RelationshipsArticle2");
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader
          dotCount={relationshipsArticleTexts.length}
          filledDotIndex={article.ArticleIndex}
        />
        <ArticleTitle text={article.ArticleTitle} />
        <SmallText text={article.SmallText} />
        {Array.from({ length: 13 }, (_, index) => (
          <React.Fragment key={index}>
            <MediumText text={article.MediumText[index]} />
            <SeparatingDots />
          </React.Fragment>
        ))}
      </ScrollView>
       <ForwardingButton
              text={article.ForwardingButton}
              backgroundColor="#FFF7CC"
              currentArticle="RelationshipsArticle1"
              navigation={navigation}
            />
    </View>
  );
};

export default RelationshipsArticle1;
