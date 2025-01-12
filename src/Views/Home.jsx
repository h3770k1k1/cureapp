import React from "react";
import ExitView from "../Components/ExitView";
import { BottomMenu } from "../Components/BottomMenu";
import Views from "../Navigation/Views";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  return (
    <>
      <ExitView />
      <BottomMenu selectedView={Views.Home} />
    </>
  );
};

export default Home;
