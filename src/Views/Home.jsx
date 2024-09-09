import React from 'react';
import ExitView from '../components/ExitView';
import { Views, BottomMenu } from '../components/BottomMenu';

const Home = () => {
  return (
    <>
      <ExitView />
      <BottomMenu selectedView={Views.Home} />
    </>
  );
};

export default Home;
