import React, { useState } from 'react';
import AreaSubpage from './components/AreaSubpage';
import Navbar from './components/Navbar';
import BottomMenu from './components/BottomMenu';
import ExitView from './components/ExitView';


function App(): React.JSX.Element {
  const [activeColor, setActiveColor] = useState('#FFF');

  return (
    <>
<ExitView/>
      <BottomMenu />
    </>
  );
}

export default App;
