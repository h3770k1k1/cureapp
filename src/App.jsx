import React, { useState } from "react";
import BottomMenu from "./components/BottomMenu";

function App(): React.JSX.Element {
  const [activeColor, setActiveColor] = useState("#FFF");

  return (
    <>
      <BottomMenu />
    </>
  );
}

export default App;
