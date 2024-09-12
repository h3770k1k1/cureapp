import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AreaSubpage from "../components/AreaSubpage";
import { BottomMenu, Views } from "../components/BottomMenu";

const Mental = () => {
  const [activeColor, setActiveColor] = useState("#FFF");
  return (
    <>
      <Navbar onColorChange={setActiveColor} />
      <AreaSubpage activeColor={activeColor} />
      <BottomMenu selectedView={Views.Mental} />
    </>
  );
};

export default Mental;
