import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ArticleHeader from "./ArticleHeader";
import ForwardingButton from "./ForwardingButton";
import DropDown from "./DropDown";
import SmallText from './SmallText';
import SectionHeaderText from './SectionHeaderText';
import TextWithDots from './DotLineHeader';
import Carousel from './Carousel';
import ArticleTitle from './ArticleTitle';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
});

const Article = () => {
  return (
    <View style={styles.mainContainer}>
      <ArticleHeader />
  <ArticleTitle/>
      <DropDown />
      <SmallText />
      <SectionHeaderText />
      <TextWithDots text="Lorem ipsum" />
      <Carousel />
      <ForwardingButton />
    </View>
  );
};

export default Article;
