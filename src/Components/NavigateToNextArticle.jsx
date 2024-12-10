import articles from '../articles.json';

export const navigateToNextArticle = (currentArticle) => {
  const articlesSequence = Object.values(articles).flat();
  const currentIndex = articlesSequence.indexOf(currentArticle);

  if (currentIndex === -1) {
    console.warn("Nie znaleziono bieżącego artykułu w sekwencji.");
    return null;
  }
  const nextIndex = (currentIndex + 1) % articlesSequence.length;

  return articlesSequence[nextIndex];
};
