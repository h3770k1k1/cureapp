import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import HomeIcon from "./Icons/Home";
import MentalIcon from "./Icons/Mental";
import GrowIcon from "./Icons/Grow";
import SettingsIcon from "./Icons/Settings";
import Views from "../Navigation/Views";

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
const ButtonColors = {
  White: "#fff",
  Grey: "#8E8E8E",
};

const BottomMenu = ({ selectedView, navigation }) => {
  console.log("TEST LOG");
  const MenuButton = ({ icon, isSelected, view, onPress }) => (
    <TouchableOpacity
      style={[styles.circleButton, isSelected && styles.selectedCircleButton]}
      onPress={onPress}
    >
      {icon}
    </TouchableOpacity>
  );

  const HomeButton = () => {
    const isSelected = selectedView === Views.Home;
    return (
      <MenuButton
        icon={
          <HomeIcon
            fill={isSelected ? ButtonColors.White : ButtonColors.Grey}
          />
        }
        isSelected={isSelected}
        view={Views.Home}
        onPress={() => navigation.navigate(Views.Home)}
      />
    );
  };

  const MentalButton = () => {
    const isSelected = selectedView === Views.Categories;
    return (
      <MenuButton
        icon={
          <MentalIcon
            fill={isSelected ? ButtonColors.White : ButtonColors.Grey}
          />
        }
        isSelected={isSelected}
        view={Views.Categories}
        onPress={() => {
          console.log("NAVIGATING TO CATEGORIES");
        }}
      />
    );
  };

  const GrowButton = () => {
    const isSelected = selectedView === Views.Grow;
    return (
      <MenuButton
        icon={
          <GrowIcon
            fill={isSelected ? ButtonColors.White : ButtonColors.Grey}
          />
        }
        isSelected={isSelected}
        view={Views.Grow}
        onPress={() => navigation.navigate(Views.Grow)}
      />
    );
  };

  const SettingsButton = () => {
    const isSelected = selectedView === Views.Settings;
    return (
      <MenuButton
        icon={
          <SettingsIcon
            fill={isSelected ? ButtonColors.White : ButtonColors.Grey}
          />
        }
        isSelected={isSelected}
        view={Views.Settings}
        onPress={() => navigation.navigate(Views.Settings)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.BottomMenuContainer}>
      <View style={styles.menuBar}>
        <View style={styles.buttonsContainer}>
          <HomeButton />
          <MentalButton />
          <GrowButton />
          <SettingsButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

export { BottomMenu };
