import { Articles } from '../Views/Articles/Articles';

export const navigateToNextArticle = (currentArticle) => {
  // Flatten the Articles object into a single array of article names
  const articlesSequence = Object.entries(Articles)
    .flatMap(([category, articleObjects]) => Object.keys(articleObjects)); // Extract article names

  // Find the current article's index
  const currentIndex = articlesSequence.indexOf(currentArticle);

  // Handle the case where the current article is not found
  if (currentIndex === -1) {
    console.warn("Nie znaleziono bieżącego artykułu:", currentArticle);
    return null; // Return null to indicate an error
  }

  // Calculate the next article's index in a circular manner
  const nextIndex = (currentIndex + 1) % articlesSequence.length;

  // Return the name of the next article
  return articlesSequence[nextIndex];
};
