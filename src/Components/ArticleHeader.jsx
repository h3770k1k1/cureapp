import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ArticleArrow from "./Icons/ArticleArrow";

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
    const currentRoute =
      navigation.getState().routes[navigation.getState().index].name;

    const routeMap = {
      MindArticle1: {
        target: "Mental",
        params: { activeColor: "#FFE2CC", activeArea: "UMYSŁ" },
      },
      MindArticle2: "MindArticle1",
      MindArticle3: "MindArticle2",
      MindArticle4: "MindArticle3",

      RelationshipsArticle1: {
        target: "Mental",
        params: { activeColor: "#FFF7CC", activeArea: "RELACJE" },
      },
      RelationshipsArticle2: "RelationshipsArticle1",
      RelationshipsArticle3: "RelationshipsArticle2",
      RelationshipsArticle4: "RelationshipsArticle3",
      RelationshipsArticle5: "RelationshipsArticle4",
      RelationshipsArticle6: "RelationshipsArticle5",

      EmotionsArticle1: {
        target: "Mental",
        params: { activeColor: "#D3F2D7", activeArea: "EMOCJE" },
      },
      EmotionsArticle2: "EmotionsArticle1",
      EmotionsArticle3: "EmotionsArticle2",
      EmotionsArticle4: "EmotionsArticle3",

      SoulArticle1: {
        target: "Mental",
        params: { activeColor: "#CDF6FF", activeArea: "DUSZA" },
      },
      SoulArticle2: "SoulArticle1",
      SoulArticle3: "SoulArticle2",
      SoulArticle4: "SoulArticle3",
      SoulArticle5: "SoulArticle4",
      SoulArticle6: "SoulArticle5",

      Article6: "Article5",
      Article5: "Article4",
      Article4: "Article3",
      Article3: "Article2",
      Article2: "Article1",
      Article1: {
        target: "Mental",
        params: { activeColor: "#FFD3FA", activeArea: "" },
      },
    };

    const route = routeMap[currentRoute];

    if (typeof route === "string") {
      navigation.navigate(route);
    } else if (route && typeof route === "object") {
      navigation.navigate(route.target, route.params);
    } else {
      navigation.navigate("Mental", { activeColor: "#FFD3FA", activeArea: "" });
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
