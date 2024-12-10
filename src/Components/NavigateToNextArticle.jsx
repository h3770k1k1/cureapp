export const navigateToNextArticle = (currentArticle) => {
  const articlesSequence = [
    "BodyArticle1",
    "BodyArticle2",
    "BodyArticle3",
    "BodyArticle4",
    "BodyArticle5",
    "BodyArticle6",
    "MindArticle1",
    "MindArticle2",
    "MindArticle3",
    "MindArticle4",
    "RelationshipsArticle1",
    "RelationshipsArticle2",
    "RelationshipsArticle3",
    "RelationshipsArticle4",
    "RelationshipsArticle5",
    "RelationshipsArticle6",
    "EmotionsArticle1",
    "EmotionsArticle2",
    "EmotionsArticle3",
    "EmotionsArticle4",
    "SoulArticle1",
    "SoulArticle2",
    "SoulArticle3",
    "SoulArticle4",
    "SoulArticle5",
    "SoulArticle6",
  ];

  const currentIndex = articlesSequence.indexOf(currentArticle);

  if (currentIndex === -1) {
    // Jeśli bieżący artykuł nie znajduje się w sekwencji, zwracamy null
    console.warn("Nie znaleziono bieżącego artykułu w sekwencji.");
    return null;
  }

  // Obliczamy indeks następnego artykułu z uwzględnieniem cyklu
  const nextIndex = (currentIndex + 1) % articlesSequence.length;

  return articlesSequence[nextIndex];
};
