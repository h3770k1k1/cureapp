import React, { createContext, useContext, useState } from "react";
import Navigation from "./Navigation/Navigation";
import Articles from "./Navigation/Articles";
import Article from './Views/Article';
import ArticlesProvider from "./ContextProviders/ArticlesProvider";
import { useArticles } from "./ContextProviders/ArticlesProvider";

import Home from './Views/Home';
import Categories from './Views/Categories';


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { View } from "react-native";

// Create Context for Category and Color
const CategoryContext = createContext();
export const useCategory = () => useContext(CategoryContext);
const Stack = createStackNavigator();

const App = () => {
  const [currentCategory, setCurrentCategory] = useState("mind");

  const categoryNames = ['body', 'mind', 'relationships', 'emotions', 'soul'];
  const categoryToColorMapping = {
    body: "#FFD3FA",
    mind: "#FFE2CC",
    relationships: "#FFF7CC",
    emotions: "#D3F2D7",
    soul: "#CDF6FF",
  };

  const [currentColor, setCurrentColor] = useState(categoryToColorMapping['mind']);

  const handleCategoryChange = (index) => {
    const newCategory = categoryNames[index];
    setCurrentCategory(newCategory);
    setCurrentColor(categoryToColorMapping[newCategory]);
  };

  return (
    <NavigationContainer>

        <CategoryContext.Provider value={{ currentCategory, currentColor, onCategoryChange: handleCategoryChange }}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Categories" component={Categories} />
          </Stack.Navigator>
        </CategoryContext.Provider>
    </NavigationContainer>

  );
};

export default App;
