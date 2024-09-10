import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import ArticleHeader from "../../../components/ArticleHeader";
import SmallText from '../../../components/SmallText';
import MediumText from '../../../components/MediumText';
import DotLineHeader from '../../../components/DotLineHeader';
import ArticleTitle from '../../../components/ArticleTitle';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  scrollView: {
    flexGrow: 1,
  },
});

const Article1 = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.mainContainer}>
        <ArticleHeader />
        <ArticleTitle text="Lorem ipsum dolor sit amet, consectetur" />
        <SmallText text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga." />
        <MediumText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <DotLineHeader text="Lorem ipsum" />
        <MediumText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <DotLineHeader text="Lorem ipsum" />
        <MediumText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <DotLineHeader text="Lorem ipsum" />
        <MediumText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <DotLineHeader text="Lorem ipsum" />
      </View>
    </ScrollView>
  );
};

export default Article1;
