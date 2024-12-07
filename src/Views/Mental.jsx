import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import AreaSubpage from "../Components/AreaSubpage";
import { BottomMenu, Views } from "../Components/BottomMenu";
import { MentalTexts } from "../Views/Texts/MentalTexts";
import { useNavigation, useRoute } from "@react-navigation/native";

const Mental = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [activeColor, setActiveColor] = useState("#FFD3FA");
  const [activeArea, setActiveArea] = useState("");

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
