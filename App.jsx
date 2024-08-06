import React, { useState } from 'react';
import AreaSubpage from './components/AreaSubpage';
import Navbar from './components/Navbar';
import BottomMenu from './components/BottomMenu';

function App(): React.JSX.Element {
  const [activeColor, setActiveColor] = useState('#FFF');

  return (
    <>
      <Navbar onColorChange={setActiveColor} />
      <AreaSubpage activeColor={activeColor} />
      <BottomMenu />
    </>
  );
}

export default App;
