import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import LinkButton from "./LinkButton";
import SmallText from "./SmallText";

const LetterDropdown = ({ titleText, smallText, linkText, sideLetter, linkText2 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const rotateAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(rotateAnimation, {
      toValue: isOpen ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.dropdownHeader}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.sideLetter}>{sideLetter}</Text>
        <Text style={styles.title}>{titleText}</Text></View>
        {!isOpen &&   <Text style={styles.link}><LinkButton style={styles.link}text={linkText} onPress={toggleDropdown} /></Text>}
      </View>
      {isOpen && (
        <View style={styles.dropdownContent}>
          <Text style={styles.smallTextContainer}> <SmallText text={smallText} /></Text>
          <Text style={styles.link}>
          <LinkButton style={styles.link} text={linkText2} onPress={toggleDropdown} /></Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({

smallTextContainer: {
    marginLeft: 25,
    marginRight: 20,
    textAlign: 'justify',
},
  container: {
    width: "100%",
  },
  headerTextContainer:{
  marginTop:15,
  flexDirection: "row",
  width:"100%",
  },

  title: {
    fontSize: 14,
    lineHeight: 28.5,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownContent: {
    marginBottom: 10,
    borderRadius: 5,
  },
  dropdownHeader: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  sideLetter:{
  fontSize: 25,
  fontWeight: "bold",
  width:30,
  },
 link: {
    alignSelf: "flex-end",
    flexDirection:"row",
  },
});

export default LetterDropdown;
