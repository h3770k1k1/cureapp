import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ArticleArrow from "./ArticleArrow";

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
  const navigation = useNavigation();

  const handleArrowClick = () => {
    const currentRoute = navigation.getState().routes[navigation.getState().index].name;

    switch (currentRoute) {
      case "SoulArticle1":
        navigation.navigate("Mental", {
          activeColor: "#CDF6FF",
          activeArea: "DUSZA",
        });
        break;
      case "Article6":
        navigation.navigate("Article5");
        break;
      case "Article5":
        navigation.navigate("Article4");
        break;
      case "Article4":
        navigation.navigate("Article3");
        break;
      case "Article3":
        navigation.navigate("Article2");
        break;
      case "Article2":
        navigation.navigate("Article1");
        break;
      case "Article1":
        navigation.navigate("Mental", {
          activeColor: "#FFD3FA",
          activeArea: "",
        });
        break;
      default:
        navigation.navigate("Mental", {
          activeColor: "#FFD3FA",
          activeArea: "",
        });
    }
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
