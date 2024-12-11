import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './Views/Home';
import Mental from './Views/Mental';
import Articles from "./Views/Articles/Articles";

const Stack = createStackNavigator();

const generateArticleScreens = () => {
  return Object.entries(Articles).flatMap(([category, articles]) =>
    Object.entries(articles).map(([articleName, ArticleComponent]) => (
      <Stack.Screen
        key={articleName}
        name={articleName}
        component={ArticleComponent}
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
