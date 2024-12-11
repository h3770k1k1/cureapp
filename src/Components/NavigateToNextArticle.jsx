import { Articles } from "../Views/Articles/Articles";
import colors from "../colors.json";

export const navigateToNextArticle = (currentArticle) => {
  const articlesSequence = Object.entries(Articles).flatMap(([category, articleObjects]) =>
    Object.keys(articleObjects).map((articleName) => ({
      name: articleName,
      category,
    }))
  );

  const currentIndex = articlesSequence.findIndex((article) => article.name === currentArticle);

  if (currentIndex === -1) {
    console.warn("Nie znaleziono bieżącego artykułu:", currentArticle);
    return null;
  }

  const nextIndex = (currentIndex + 1) % articlesSequence.length;
  const nextArticle = articlesSequence[nextIndex];

  return { name: nextArticle.name, color: colors[nextArticle.category] };
};
