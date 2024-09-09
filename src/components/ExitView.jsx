import React from "react";
import { View, StyleSheet } from "react-native";
import ExitDots from "./ExitDots";
import Option from "./MenuOption";

const ExitView = () => {
  return (
    <View style={styles.exitView}>
      <View style={styles.header}>
        <ExitDots />
      </View>
      <View style={styles.options}>
        <Option text="zaopiekować się swoim ciałem" index={0} />
        <Option text="nauczyć się dbać o umysł" index={1} />
        <Option text="pogłębić swoje relacje" index={2} />
        <Option text="poznać bardziej swoje emocje" index={3} />
        <Option text="odkryć swoją duchowość" index={4} />
        <Option text="monitoruj swój rozwój" index={5} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  exitView: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    marginTop: 10,
    height: 130,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  options: {
    display: "flex",
    flexDirection: "column",
    width: "85%",
  },
});

export default ExitView;
