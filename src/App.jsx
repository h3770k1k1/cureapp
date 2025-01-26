import React from "react";
import Navigation from "./Navigation/Navigation";
import ArticlesProvider from "./ContextProviders/ArticlesProvider";

const App = () => {
  return (
    <ArticlesProvider>
      <Navigation />
    </ArticlesProvider>
  );
};

export default App;
