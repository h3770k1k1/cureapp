import React from "react";
import ExitView from "../Components/ExitView";
import { Views, BottomMenu } from "../Components/BottomMenu";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <>
      <ExitView />
      <BottomMenu selectedView={Views.Home} navigation={navigation} />
    </>
  );
};

export default Home;
