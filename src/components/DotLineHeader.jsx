import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const DotLineHeader = ({ text }) => {
  const { width: screenWidth } = Dimensions.get('window');
  const textWidth = 16 * text.length;
  const dotsWidth = screenWidth - textWidth - 100;
  const dotSize = 10;
  const dotCount = 4;

  const dots = '.'.repeat(dotCount);

  return (
    <View style={styles.container}>
      <Text style={styles.dots}>{dots}</Text>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.dots}>{dots}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  width:'100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
  },
  dots: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:10,
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
