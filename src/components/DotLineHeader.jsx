import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DotLineHeader = ({ text }) => {
  const totalLength = 40; // Całkowita liczba znaków
  const dotsBefore = 4; // Zawsze 4 kropki przed tekstem
  const textLength = text.length;

  // Obliczamy, ile kropek potrzebujemy po tekście, aby łącznie było 40 znaków
  const dotsAfterCount = totalLength - textLength - dotsBefore;
  const dotsBeforeText = '.'.repeat(dotsBefore);
  const dotsAfterText = '.'.repeat(dotsAfterCount > 0 ? dotsAfterCount : 0);

  return (
    <View style={styles.container}>
      <Text style={styles.dots}>{dotsBeforeText}</Text>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.dots}>{dotsAfterText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
  },
  dots: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginHorizontal: 10,
    textTransform: 'uppercase',
  },
});

export default DotLineHeader;
