import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import HomeIcon from "./Home";
import MentalIcon from "./Mental";
import GrowIcon from "./Grow";
import SettingsIcon from "./Settings";

const BottomMenu = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handlePress = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  const renderIcon = (buttonIndex, isSelected) => {
    const fill = isSelected ? "white" : "#8E8E8E";
    switch (buttonIndex) {
      case 0:
        return <HomeIcon fill={fill} width={24} height={24} />;
      case 1:
        return <MentalIcon fill={fill} width={24} height={24} />;
      case 2:
        return <GrowIcon fill={fill} width={24} height={24} />;
      case 3:
        return <SettingsIcon fill={fill} width={24} height={24} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.BottomMenuContainer}>
      <View style={styles.menuBar}>
        <View style={styles.buttonsContainer}>
          {[0, 1, 2, 3].map((buttonIndex) => (
            <TouchableOpacity
              key={buttonIndex}
              style={[
                styles.circleButton,
                selectedButton === buttonIndex && styles.selectedCircleButton,
              ]}
              onPress={() => handlePress(buttonIndex)}
            >
              {renderIcon(buttonIndex, selectedButton === buttonIndex)}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  BottomMenuContainer: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  menuBar: {
    height: 70,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#F0F0F0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  circleButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    color: "#8E8E8E",
  },
  selectedCircleButton: {
    backgroundColor: "#8E8E8E",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "90%",
  },
});

export default BottomMenu;
