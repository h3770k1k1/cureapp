import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Mental from "./Views/Mental";
import Home from "./Views/Home";
import Article1 from "./Views/Articles/Cialo/Article1";
import Article2 from "./Views/Articles/Cialo/Article2";
import Article3 from "./Views/Articles/Cialo/Article3";
import Article4 from "./Views/Articles/Cialo/Article4";
import Article5 from "./Views/Articles/Cialo/Article5";
import Article6 from "./Views/Articles/Cialo/Article6";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Mental" component={Mental} />
        <Stack.Screen name="Article1" component={Article1} />
        <Stack.Screen name="Article2" component={Article2} />
        <Stack.Screen name="Article3" component={Article3} />
        <Stack.Screen name="Article4" component={Article4} />
        <Stack.Screen name="Article5" component={Article5} />
        <Stack.Screen name="Article6" component={Article6} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
