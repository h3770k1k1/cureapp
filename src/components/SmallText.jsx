import React from 'react';
import { Text, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    textAlign: 'justify',
    marginTop:15,
    lineHeight: 20,
  },
});
const SmallText = () => {
  return <Text style={[styles.text]}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</Text>;
};

export default SmallText;
