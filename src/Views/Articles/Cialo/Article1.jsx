import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import ArticleHeader from "../../../components/ArticleHeader";
import SmallText from '../../../components/SmallText';
import MediumText from '../../../components/MediumText';
import DotLineHeader from '../../../components/DotLineHeader';
import ArticleTitle from '../../../components/ArticleTitle';
import ForwardingButton from "../../../components/ForwardingButton";

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
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
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
      </ScrollView>
      <View style={styles.buttonContainer}>
        <ForwardingButton text="forward123" backgroundColor="#FFD3FA" />
      </View>
    </View>
  );
};

export default Article1;
