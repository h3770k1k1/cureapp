
export const navigateToArticle = (navigation, backgroundColor, articleIndex) => {
  let articleName;

  if (backgroundColor === "#FFD3FA") {
    articleName = `BodyArticle${articleIndex + 1}`;
  } else if (backgroundColor === "#CDF6FF") {
    articleName = `SoulArticle${articleIndex + 1}`;
  } else if (backgroundColor === "#FFE2CC") {
    articleName = `MindArticle${articleIndex + 1}`;
  } else if (backgroundColor === "#D3F2D7") {
    articleName = `EmotionsArticle${articleIndex + 1}`;
  } else if (backgroundColor === "#FFF7CC") {
    articleName = `RelationshipsArticle${articleIndex + 1}`;
  }

  if (articleName) {
    navigation.navigate(articleName);
  }
};
