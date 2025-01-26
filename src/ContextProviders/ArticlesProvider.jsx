import React, { createContext, useContext } from "react";
import articles from "../Navigation/articles";

// Create Articles Context
const ArticlesContext = createContext();

export const useArticles = () => useContext(ArticlesContext);

const ArticlesProvider = ({ children }) => {
  return (
    <ArticlesContext.Provider value={{ articles: articles }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export default ArticlesProvider;
