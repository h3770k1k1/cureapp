// import { useNavigation } from "@react-navigation/native";
// import Articles from "../Navigation/Articles";
// import sectionMapping from "../Navigation/SectionMapping";
//
// const useGoBackNavigation = () => {
//   const navigation = useNavigation();
//
//   const goBackNavigation = () => {
//     const currentRoute =
//       navigation.getState().routes[navigation.getState().index].name;
//
//     const { target, params } = sectionMapping.default;
//
//     for (const [section, articles] of Object.entries(Articles)) {
//       const articleNames = Object.keys(articles);
//
//       const currentIndex = articleNames.indexOf(currentRoute);
//       if (currentIndex > -1) {
//         if (currentIndex > 0) {
//           navigation.navigate(articleNames[currentIndex - 1]);
//         } else {
//           navigation.navigate("Categories", sectionMapping[section]);
//         }
//         return;
//       }
//     }
//
//     navigation.navigate(target, params);
//   };
//
//   return goBackNavigation;
// };
//
// export default useGoBackNavigation;
