import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useArticles } from "../ContextProviders/ArticlesProvider"; // Import context

import Home from "../Views/Home";
import Categories from "../Views/Categories";
import Article from "../Views/Article"; // Article screen component (optional, if you have a separate screen for Article)
import articlesTexts from "../Views/Texts/articlesTexts";

const Stack = createStackNavigator();

const Navigation = () => {
  const { articles } = useArticles(); // Get articles from context

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Categories" component={Categories} />
        {Object.entries(articles).map(([category, articleList]) =>
          articleList.map((article, index) => (
            <Stack.Screen
              key={index}
              name={article.name} // Use article's name as screen name
              component={Article} // Use article's component for the screen
              initialParams={{
                index: index,
                articleName: article.name,
                // customContent: article["component"],
                nextArticleTitle: articlesTexts[category][article.name],
              }}
            />
          ))
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
