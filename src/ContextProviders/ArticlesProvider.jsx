import React, { createContext, useContext } from "react";
import Articles from "../Navigation/Articles";

// Create Articles Context
const ArticlesContext = createContext();

export const useArticles = () => useContext(ArticlesContext);

const ArticlesProvider = ({ children }) => {
  return (
    <ArticlesContext.Provider value={{ articles: Articles }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export default ArticlesProvider;
