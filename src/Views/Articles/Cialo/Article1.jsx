import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import ArticleHeader from "../../../components/ArticleHeader";
import SmallText from '../../../components/SmallText';
import MediumText from '../../../components/MediumText';
import DotLineHeader from '../../../components/DotLineHeader';
import ArticleTitle from '../../../components/ArticleTitle';
import ForwardingButton from "../../../components/ForwardingButton";
import { articleTexts } from "./BodyArticleText";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFD3FA',
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 100,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

const Article1 = () => {
 const article = articleTexts[0];
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ArticleHeader dotCount={6} filledDotIndex={article.ArticleIndex} />
        <ArticleTitle text={article.ArticleTitle} />
        <SmallText text={article.SmallText}/>
        <MediumText text={article.MediumText[0]} />
        <DotLineHeader text={article.DotLineHeader[0]} />
        <MediumText text={article.MediumText[1]} />
        <DotLineHeader text={article.DotLineHeader[1]} />
        <MediumText text={article.MediumText[2]}/>
        <DotLineHeader text={article.DotLineHeader[2]} />
        <MediumText text={article.MediumText[3]}/>
        <DotLineHeader text={article.DotLineHeader[3]} />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <ForwardingButton text={article.ForwardingButton} backgroundColor="#FFD3FA" />
      </View>
    </View>
  );
};

export default Article1;
