import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ArticleHeader from "./ArticleHeader";
import ForwardingButton from "./ForwardingButton";
import DropDown from "./DropDown";
import SmallText from './SmallText';
import SectionHeaderText from './SectionHeaderText';
import TextWithDots from './DotLineHeader';
import Carousel from './Carousel';

const Article = () => {
  return (
    <View style={styles.mainContainer}>
      <ArticleHeader />
      <Text style={styles.sectionHeader}>
        Lorem ipsum dolor sit amet, consectetur
      </Text>
      <DropDown/>
       <SmallText/>
       <SectionHeaderText/>
      <TextWithDots text="Lorem ipsum" />
      <Carousel/>
      <ForwardingButton />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 40,
    width: 300,
    marginBottom: 20,
  },
});

export default Article;
