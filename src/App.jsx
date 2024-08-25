import React, { useState } from "react";
import Article from "./components/Article";

function App(): React.JSX.Element {
  const [activeColor, setActiveColor] = useState("#FFF");

  return (
    <>
      <Article />
    </>
  );
}

export default App;