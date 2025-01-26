import sectionMapping from "../../Navigation/SectionMapping";

export const SmallSectionNavigation = (
  navigation,
  backgroundColor,
  articleIndex
) => {
  const section = Object.entries(sectionMapping).find(
    ([, { activeColor }]) => activeColor === backgroundColor
  );

  if (section) {
    const [key] = section;
    const articleName = `${key}Article${articleIndex + 1}`;
    navigation.navigate(articleName);
  } else {
    console.warn("Nie znaleziono sekcji dla tego koloru:", backgroundColor);
  }
};
