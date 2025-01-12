import React, { createContext, useContext, useState } from "react";
import Navigation from "./Navigation/Navigation";
import ArticlesProvider from "./ContextProviders/ArticlesProvider";

const CategoryContext = createContext();
export const useCategory = () => useContext(CategoryContext);

const App = () => {
  return (
    <ArticlesProvider>
      <Navigation />
    </ArticlesProvider>
  );
};

export default App;
