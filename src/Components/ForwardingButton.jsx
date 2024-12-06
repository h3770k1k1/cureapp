import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import ForwardingButtonArrow from "./Icons/ForwardingButtonArrow";

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
const ForwardingButton = ({ text, backgroundColor, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.forwardingButton, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
      <Text>
        <ForwardingButtonArrow />
      </Text>
    </TouchableOpacity>
  );
};

export default ForwardingButton;
