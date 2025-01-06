import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Category from "../Components/Category";
import { BottomMenu } from "../Components/BottomMenu";
import Views from "../Navigation/Views";
import { mentalTexts } from "./Texts/mentalTexts";
import { useNavigation, useRoute } from "@react-navigation/native";

const Categories = () => {
  const navigation = useNavigation();
  const route = useRoute();

  //   useEffect(() => {
  //     if (route.params?.activeColor) {
  //       setActiveColor(route.params.activeColor);
  //     }
  //   }, [route.params]);

  //   const handleColorChange = (color) => {
  //     const area = mentalTexts.find((item) => item.Color === color)?.Area || "";
  //     setActiveColor(categoryToColorMapping[category]);
  //     setActiveArea(area);
  //   };

  return (
    <>
      <Navbar />
      <Category />
      <BottomMenu selectedView={Views.Categories} navigation={navigation} />
    </>
  );
};

export default Categories;
