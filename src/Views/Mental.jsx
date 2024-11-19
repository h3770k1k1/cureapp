import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import AreaSubpage from "../components/AreaSubpage";
import { BottomMenu, Views } from "../components/BottomMenu";
import { MentalTexts } from "../Views/MentalTexts";
import { useNavigation, useRoute } from "@react-navigation/native";

const Mental = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [activeColor, setActiveColor] = useState("#FFD3FA");
  const [activeArea, setActiveArea] = useState("");

  // Synchronizowanie parametrów z nawigacji z stanem
  useEffect(() => {
    if (route.params?.activeColor) {
      setActiveColor(route.params.activeColor);
      setActiveArea(route.params.activeArea || "");
    }
  }, [route.params]);

  const handleColorChange = (color) => {
    const area = MentalTexts.find((item) => item.Color === color)?.Area || "";
    setActiveColor(color);
    setActiveArea(area);
  };

  return (
    <>
      <Navbar
        onColorChange={handleColorChange}
        activeArea={activeArea}
        activeColor={activeColor}
      />
      <AreaSubpage activeColor={activeColor} />
      <BottomMenu selectedView={Views.Mental} navigation={navigation} />
    </>
  );
};

export default Mental;
