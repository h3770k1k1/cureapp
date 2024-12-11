import BodyArticle1 from "./Cialo/BodyArticle1";
import BodyArticle2 from "./Cialo/BodyArticle2";
import BodyArticle3 from "./Cialo/BodyArticle3";
import BodyArticle4 from "./Cialo/BodyArticle4";
import BodyArticle5 from "./Cialo/BodyArticle5";
import BodyArticle6 from "./Cialo/BodyArticle6";

import MindArticle1 from "./Umysl/MindArticle1";
import MindArticle2 from "./Umysl/MindArticle2";
import MindArticle3 from "./Umysl/MindArticle3";
import MindArticle4 from "./Umysl/MindArticle4";

import RelationshipsArticle1 from "./Relacje/RelationshipsArticle1";
import RelationshipsArticle2 from "./Relacje/RelationshipsArticle2";
import RelationshipsArticle3 from "./Relacje/RelationshipsArticle3";
import RelationshipsArticle4 from "./Relacje/RelationshipsArticle4";
import RelationshipsArticle5 from "./Relacje/RelationshipsArticle5";
import RelationshipsArticle6 from "./Relacje/RelationshipsArticle6";

import EmotionsArticle1 from "./Emocje/EmotionsArticle1";
import EmotionsArticle2 from "./Emocje/EmotionsArticle2";
import EmotionsArticle3 from "./Emocje/EmotionsArticle3";
import EmotionsArticle4 from "./Emocje/EmotionsArticle4";

import SoulArticle1 from "./Dusza/SoulArticle1";
import SoulArticle2 from "./Dusza/SoulArticle2";
import SoulArticle3 from "./Dusza/SoulArticle3";
import SoulArticle4 from "./Dusza/SoulArticle4";
import SoulArticle5 from "./Dusza/SoulArticle5";
import SoulArticle6 from "./Dusza/SoulArticle6";

export const Articles = {
  Body: {
    BodyArticle1: require("./Cialo/BodyArticle1").default,
    BodyArticle2: require("./Cialo/BodyArticle2").default,
    BodyArticle3: require("./Cialo/BodyArticle3").default,
    BodyArticle4: require("./Cialo/BodyArticle4").default,
    BodyArticle5: require("./Cialo/BodyArticle5").default,
    BodyArticle6: require("./Cialo/BodyArticle6").default,
  },
  Mind: {
    MindArticle1: require("./Umysl/MindArticle1").default,
    MindArticle2: require("./Umysl/MindArticle2").default,
    MindArticle3: require("./Umysl/MindArticle3").default,
    MindArticle4: require("./Umysl/MindArticle4").default,
  },
  Relationships: {
    RelationshipsArticle1: require("./Relacje/RelationshipsArticle1").default,
    RelationshipsArticle2: require("./Relacje/RelationshipsArticle2").default,
    RelationshipsArticle3: require("./Relacje/RelationshipsArticle3").default,
    RelationshipsArticle4: require("./Relacje/RelationshipsArticle4").default,
    RelationshipsArticle5: require("./Relacje/RelationshipsArticle5").default,
    RelationshipsArticle6: require("./Relacje/RelationshipsArticle6").default,
  },
  Emotions: {
    EmotionsArticle1: require("./Emocje/EmotionsArticle1").default,
    EmotionsArticle2: require("./Emocje/EmotionsArticle2").default,
    EmotionsArticle3: require("./Emocje/EmotionsArticle3").default,
    EmotionsArticle4: require("./Emocje/EmotionsArticle4").default,
  },
  Soul: {
    SoulArticle1: require("./Dusza/SoulArticle1").default,
    SoulArticle2: require("./Dusza/SoulArticle2").default,
    SoulArticle3: require("./Dusza/SoulArticle3").default,
    SoulArticle4: require("./Dusza/SoulArticle4").default,
    SoulArticle5: require("./Dusza/SoulArticle5").default,
    SoulArticle6: require("./Dusza/SoulArticle6").default,
  },
};


export default Articles;
