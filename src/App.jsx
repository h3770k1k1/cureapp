import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Mental from "./Views/Mental";
import Home from "./Views/Home";
import Article1 from "./Views/Articles/Cialo/BodyArticle1";
import Article2 from "./Views/Articles/Cialo/BodyArticle2";
import Article3 from "./Views/Articles/Cialo/BodyArticle3";
import Article4 from "./Views/Articles/Cialo/BodyArticle4";
import Article5 from "./Views/Articles/Cialo/BodyArticle5";
import Article6 from "./Views/Articles/Cialo/BodyArticle6";
import SoulArticle1 from "./Views/Articles/Dusza/SoulArticle1";
import SoulArticle2 from "./Views/Articles/Dusza/SoulArticle2";
import SoulArticle3 from "./Views/Articles/Dusza/SoulArticle3";
import SoulArticle4 from "./Views/Articles/Dusza/SoulArticle4";
import SoulArticle5 from "./Views/Articles/Dusza/SoulArticle5";
import SoulArticle6 from "./Views/Articles/Dusza/SoulArticle6";
import EmotionsArticle1 from "./Views/Articles/Emocje/EmotionsArticle1";
import EmotionsArticle2 from "./Views/Articles/Emocje/EmotionsArticle2";
import EmotionsArticle3 from "./Views/Articles/Emocje/EmotionsArticle3";
import EmotionsArticle4 from "./Views/Articles/Emocje/EmotionsArticle4";
import DevelopmentArticle1 from "./Views/Articles/Rozwój/DevelopmentArticle1";
import DevelopmentArticle2 from "./Views/Articles/Rozwój/DevelopmentArticle2";
import DevelopmentArticle3 from "./Views/Articles/Rozwój/DevelopmentArticle3";
import DevelopmentArticle4 from "./Views/Articles/Rozwój/DevelopmentArticle4";

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
        <Stack.Screen name="SoulArticle1" component={SoulArticle1} />
        <Stack.Screen name="SoulArticle2" component={SoulArticle2} />
        <Stack.Screen name="SoulArticle3" component={SoulArticle3} />
        <Stack.Screen name="SoulArticle4" component={SoulArticle4} />
        <Stack.Screen name="SoulArticle5" component={SoulArticle5} />
        <Stack.Screen name="SoulArticle6" component={SoulArticle6} />
        <Stack.Screen name="EmotionsArticle1" component={EmotionsArticle1} />
        <Stack.Screen name="EmotionsArticle2" component={EmotionsArticle2} />
           <Stack.Screen name="EmotionsArticle3" component={EmotionsArticle3} />
<Stack.Screen name="EmotionsArticle4" component={EmotionsArticle4} />
<Stack.Screen name="DevelopmentArticle1" component={DevelopmentArticle1} />
<Stack.Screen name="DevelopmentArticle2" component={DevelopmentArticle2} />
<Stack.Screen name="DevelopmentArticle3" component={DevelopmentArticle3} />
<Stack.Screen name="DevelopmentArticle4" component={DevelopmentArticle4} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
