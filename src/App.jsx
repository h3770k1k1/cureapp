import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './Views/Home';
import Mental from './Views/Mental';
import Articles from "./Views/Articles/Articles";
import articles from './articles.json';

const Stack = createStackNavigator();

const generateArticleScreens = () => {
  return Object.entries(articles).flatMap(([category, articleNames]) =>
    articleNames.map((articleName) => (
      <Stack.Screen
        key={articleName}
        name={articleName}
        component={Articles[articleName]}
      />
    ))
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Mental" component={Mental} />
        {generateArticleScreens()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
