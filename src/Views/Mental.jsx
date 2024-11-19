import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AreaSubpage from "../components/AreaSubpage";
import { BottomMenu, Views } from "../components/BottomMenu";
import { MentalTexts } from "../Views/MentalTexts";
import { useNavigation } from "@react-navigation/native";

const Mental = () => {
 const navigation = useNavigation();
  const [activeColor, setActiveColor] = useState("#FFD3FA");
  const [activeArea, setActiveArea] = useState("");

  const handleColorChange = (color) => {
    const area = MentalTexts.find(item => item.Color === color)?.Area || "";
    setActiveColor(color);
    setActiveArea(area);
  };

  return (
    <>
      <Navbar onColorChange={handleColorChange} activeArea={activeArea} activeColor={activeColor} />
      <AreaSubpage activeColor={activeColor} />
      <BottomMenu selectedView={Views.Mental} navigation={navigation}/>
    </>
  );
};

export default Mental;
