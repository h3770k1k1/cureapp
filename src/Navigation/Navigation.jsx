import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useArticles } from "../ContextProviders/ArticlesProvider";
import { AppNavigationProvider } from "../ContextProviders/AppNavigationProvider";
import Home from "../Views/Home";
import Categories from "../Views/Categories";
import Article from "../Views/Article";

const Stack = createStackNavigator();

const Navigation = () => {
  const { articles } = useArticles();

  return (
    <NavigationContainer>
      <AppNavigationProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Categories" component={Categories} />
          {articles.map((article, index) => {
            return (
              <Stack.Screen
                key={index}
                name={article.name}
                component={Article}
                initialParams={{ article: article }}
              />
            );
          })}
        </Stack.Navigator>
      </AppNavigationProvider>
    </NavigationContainer>
  );
};

export default Navigation;
