import React from "react";
import HomeCategories from "../Components/HomeCategories";
import { BottomMenu } from "../Components/BottomMenu";
import Views from "../Navigation/Views";

const Home = () => {
  return (
    <>
      <HomeCategories />
      <BottomMenu selectedView={Views.home} />
    </>
  );
};

export default Home;
