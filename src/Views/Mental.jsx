import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AreaSubpage from "../components/AreaSubpage";
import { BottomMenu, Views } from "../components/BottomMenu";
import { MentalTexts } from "../Views/MentalTexts";

const Mental = () => {
  const [activeColor, setActiveColor] = useState("#FFF");
  const [activeArea, setActiveArea] = useState("");

  // Zaktualizuj aktywny kolor i obszar na podstawie wybranego koloru
  const handleColorChange = (color) => {
    const area = MentalTexts.find(item => item.Color === color)?.Area || "";
    setActiveColor(color);
    setActiveArea(area);
  };

  return (
    <>
      {/* Przekazanie aktywnego koloru i obszaru do Navbar */}
      <Navbar onColorChange={handleColorChange} activeArea={activeArea} />
      {/* Przekazanie aktywnego koloru do AreaSubpage */}
      <AreaSubpage activeColor={activeColor} />
      <BottomMenu selectedView={Views.Mental} />
    </>
  );
};

export default Mental;
