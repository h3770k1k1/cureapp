import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ArticleArrow from "./ArticleArrow"; // Upewnij się, że masz odpowiedni komponent
import { useNavigation } from '@react-navigation/native'; // Importuj useNavigation hook

const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dot: {
    borderRadius: 10,
    borderWidth: 2.5,
    width: 15,
    height: 15,
    borderColor: "#535353",
    margin: 1.5,
  },
  filledDot: {
    backgroundColor: "#535353",
  },
  dotsContainer: {
    display: "flex",
    flexDirection: "row",
  },
});

const ArticleHeader = ({ dotCount, filledDotIndex }) => {
  const navigation = useNavigation(); // Uzyskaj dostęp do funkcji nawigacji

  const handleArrowClick = () => {
    navigation.goBack(); // Cofanie do poprzedniego ekranu
  };

  const dots = Array(dotCount).fill(0);

  return (
    <View style={styles.topContainer}>
      <Text onPress={handleArrowClick}>
        <ArticleArrow />
      </Text>
      <View style={styles.dotsContainer}>
        {dots.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === filledDotIndex ? styles.filledDot : null,
            ]}
          ></View>
        ))}
      </View>
    </View>
  );
};

export default ArticleHeader;
