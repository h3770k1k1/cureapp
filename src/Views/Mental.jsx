import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AreaSubpage from "../components/AreaSubpage";
import { BottomMenu, Views } from "../components/BottomMenu";
import { MentalTexts } from "../Views/MentalTexts";

const Mental = () => {
  const [activeColor, setActiveColor] = useState("#FFD3FA"); // Ustawiamy domyślny kolor na różowy
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
      <BottomMenu selectedView={Views.Mental} />
    </>
  );
};

export default Mental;
