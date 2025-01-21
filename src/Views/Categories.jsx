import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Category from "../Components/Category";
import { BottomMenu } from "../Components/BottomMenu";
import Views from "../Navigation/Views";

const Categories = () => {
  return (
    <>
      <Navbar />
      <Category />
      <BottomMenu selectedView={Views.categories} />
    </>
  );
};

export default Categories;
