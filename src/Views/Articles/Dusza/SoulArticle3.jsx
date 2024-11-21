import ForwardingButton from "../../../components/ForwardingButton";
import React from "react";
import { soulArticleTexts } from "./SoulArticleText";
import ArticleHeader from "../../../components/ArticleHeader";
import ArticleTitle from "../../../components/ArticleTitle";
import SmallText from "../../../components/SmallText";
import BoldText from "../../../components/BoldText";
import MediumText from "../../../components/MediumText";
import DropDown from "../../../components/DropDown";
import { ScrollView, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
});


const SoulArticle3 = ({ navigation }) => {
 const article = soulArticleTexts[2];

return (
<View style={styles.mainContainer}>
<ScrollView contentContainerStyle={styles.scrollView}>
 <ArticleHeader dotCount={6} filledDotIndex={article.ArticleIndex} />
 <ArticleTitle text={article.ArticleTitle} />
 <SmallText text={article.SmallText[0]} />
 <BoldText text={article.BoldText}/>
  <SmallText text={article.SmallText[1]} />
  <MediumText text={article.MediumText}/>
    <DropDown
            titleText={article.DropDownTitle[0]}
            smallText={article.DropDownSmallText[0]}
            hasTopBorder={true}
          />
          <DropDown
                      titleText={article.DropDownTitle[1]}
                      smallText={article.DropDownSmallText[1]}
                      hasTopBorder={false}
                    />
                    <DropDown
                                          titleText={article.DropDownTitle[2]}
                                          smallText={article.DropDownSmallText[2]}
                                          hasTopBorder={false}
                                        />
                                          <DropDown
                                                                                  titleText={article.DropDownTitle[3]}
                                                                                  smallText={article.DropDownSmallText[3]}
                                                                                  hasTopBorder={false}
                                                                                />
</ScrollView>
<ForwardingButton
text={article.ForwardingButton} backgroundColor="#CDF6FF"
/></View>
)}
export default SoulArticle3;