import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import ForwardingButtonArrow from "../Icons/ForwardingButtonArrow";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  forwardingButton: {
    color: "#535353",
    width: 400,
    height: 70,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    position: "absolute",
    borderWidth: 1,
    bottom: 0,
  },
  buttonText: {
    color: "#535353",
    fontSize: 18,
    fontWeight: "500",
  },
});

const ForwardingButton = ({ nextArticleTitle, articleName }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    //     const nextArticleData = navigateToNextArticle(articleName);
    if (nextArticleData) {
      navigation.navigate(articleName);
    } else {
      console.warn("Brak następnego artykułu");
    }
  };

  //   const nextArticleData = navigateToNextArticle(articleName);
  //   const backgroundColor = nextArticleData ? nextArticleData.color : "#FFFFFF";
  const backgroundColor = "#FFFFFF";
  return (
    <TouchableOpacity
      style={[styles.forwardingButton, { backgroundColor }]}
      onPress={handlePress}
    >
      <Text style={styles.buttonText}>{nextArticleTitle}</Text>
      <Text>
        <ForwardingButtonArrow />
      </Text>
    </TouchableOpacity>
  );
};

export default ForwardingButton;
