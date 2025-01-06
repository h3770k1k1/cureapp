import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useArticles } from "../ContextProviders/ArticlesProvider"; // Import context

const Stack = createStackNavigator();

const Article = () => {
  const { articles } = useArticles();

  // Create the articlesPerCategory variable
  const articlesPerCategory = Object.entries(articles).map(
    ([category, articleList]) => ({
      category,
      articles: articleList,
    })
  );

  return (
    <>
      {articlesPerCategory.map(({ category, articles }) =>
        articles.map((article, index) => (
          <Stack.Screen
            key={index}
            name={article.name} // Use article's name as the screen name
            component={article.component} // Use article's component for the screen component
          />
        ))
      )}
    </>
  );
};

export default Article;
