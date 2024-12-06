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
import RelationshipsArticle1 from "./Views/Articles/Relacje/RelationshipsArticle1";
import RelationshipsArticle2 from "./Views/Articles/Relacje/RelationshipsArticle2";
import RelationshipsArticle3 from "./Views/Articles/Relacje/RelationshipsArticle3";
import RelationshipsArticle4 from "./Views/Articles/Relacje/RelationshipsArticle4";
import RelationshipsArticle5 from "./Views/Articles/Relacje/RelationshipsArticle5";
import RelationshipsArticle6 from "./Views/Articles/Relacje/RelationshipsArticle6";
import MindArticle1 from "./Views/Articles/Umysl/MindArticle1";
import MindArticle2 from "./Views/Articles/Umysl/MindArticle2";
import MindArticle3 from "./Views/Articles/Umysl/MindArticle3";
import MindArticle4 from "./Views/Articles/Umysl/MindArticle4";

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
        <Stack.Screen name="MindArticle1" component={MindArticle1} />
        <Stack.Screen name="MindArticle2" component={MindArticle2} />
        <Stack.Screen name="MindArticle3" component={MindArticle3} />
        <Stack.Screen name="MindArticle4" component={MindArticle4} />


        <Stack.Screen
          name="RelationshipsArticle1"
          component={RelationshipsArticle1}
        />
        <Stack.Screen
          name="RelationshipsArticle2"
          component={RelationshipsArticle2}
        />
        <Stack.Screen
          name="RelationshipsArticle3"
          component={RelationshipsArticle3}
        />
        <Stack.Screen
          name="RelationshipsArticle4"
          component={RelationshipsArticle4}
        />
            <Stack.Screen
                  name="RelationshipsArticle5"
                  component={RelationshipsArticle5}
                />
                  <Stack.Screen
                                  name="RelationshipsArticle6"
                                  component={RelationshipsArticle6}
                                />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
