import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import ForwardingButtonArrow from "./Icons/ForwardingButtonArrow";
import { navigateToNextArticle } from "./NavigateToNextArticle";

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

const ForwardingButton = ({ text, backgroundColor, currentArticle, navigation }) => {
  const handlePress = () => {
    const nextArticle = navigateToNextArticle(currentArticle);
    if (nextArticle) {
      navigation.navigate(nextArticle);
    } else {
      console.warn("Brak następnego artykułu");
    }
  };

  return (
    <TouchableOpacity
      style={[styles.forwardingButton, { backgroundColor }]}
      onPress={handlePress}
    >
      <Text style={styles.buttonText}>{text}</Text>
      <Text>
        <ForwardingButtonArrow />
      </Text>
    </TouchableOpacity>
  );
};

export default ForwardingButton;
