import { Articles } from '../Views/Articles/Articles';

export const navigateToNextArticle = (currentArticle) => {
  const articlesSequence = Object.entries(Articles)
    .flatMap(([category, articleObjects]) => Object.keys(articleObjects)); // Extract article names

  const currentIndex = articlesSequence.indexOf(currentArticle);

  if (currentIndex === -1) {
    console.warn("Nie znaleziono bieżącego artykułu:", currentArticle);
    return null;
  }

  const nextIndex = (currentIndex + 1) % articlesSequence.length;

  return articlesSequence[nextIndex];
};
