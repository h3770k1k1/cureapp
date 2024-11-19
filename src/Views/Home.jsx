import React from "react";
import ExitView from "../components/ExitView";
import { Views, BottomMenu } from "../components/BottomMenu";
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
