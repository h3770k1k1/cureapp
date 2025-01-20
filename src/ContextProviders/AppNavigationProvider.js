// NavigatorContext.js
import React, {createContext, useContext, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useArticles} from "./ArticlesProvider";
import categories from "../Navigation/categories";

const AppNavigationContext = createContext();

export const useAppNavigation = () => {
    return useContext(AppNavigationContext);
};

export const AppNavigationProvider = ({ children }) => {
    const navigation = useNavigation();
    const { articles } = useArticles();
    const [article, setArticle] = useState(articles[0]);
    const [color, setColor] = useState(article.color);


    useEffect(() => {
        const newColor = categories[article.category]['color']
        setColor(newColor)


    },[article])

    const next = () => {
        const isLastGlobalIndex = globalIndex() === articles.length - 1;
        const nextIndex = isLastGlobalIndex ? 0 : globalIndex()+1;

        const nextArticle = articles[nextIndex]
        const nextArticleName = nextArticle['name']

        updateArticle(nextArticle);

        navigation.navigate(nextArticleName)
    };

    const getNextCategory= ()=>{
        const isLastGlobalIndex = globalIndex() === articles.length - 1;
        const nextIndex = isLastGlobalIndex ? 0 : globalIndex()+1;
        const nextArticle = articles[nextIndex]

        return categories[nextArticle.category];
    }

    const back = () => {
        const isFirstCategoryIndex = getCategoryIndex() === 0;

        if(isFirstCategoryIndex){
            navigation.navigate('Categories')
        }else{
            const previousArticle = articles[globalIndex() - 1]
            updateArticle(previousArticle);
            navigation.navigate(previousArticle.name)
        }
    };

    const getCategoryIndex = () => {
        const categoryArticles = articles.filter(currentArticle => currentArticle.category === article.category);

        const categoryIndex = categoryArticles.findIndex(currentArticle => currentArticle['name'] === article['name']);

        // Throw error with the list of category article names
        // throw Error(`Finding category index for article: ${article.category}, categoryArticles: [${categoryArticleNames}]`);

        return categoryIndex;
    }

    const globalIndex = () => {
        return articles.findIndex(currentArticle => currentArticle.name === article.name);
    };

    const updateArticle = (article) => {
        if (!article) {
            throw new Error('Article not found.');
        }
        setColor(categories[article.category]['color']);
        setArticle(article);
    }

    const navigateToCategory = (category) => {
        const firstArticle = articles.find(article => article.category === category);
        updateArticle(firstArticle)
        navigation.navigate('Categories');
    }

    const navigateToArticle = (articleName) => {
        const newArticle = articles.find(article => article.name === articleName);

        updateArticle(newArticle);
        navigation.navigate(articleName)
    }

    return (
        <AppNavigationContext.Provider value={{ next, back, article, color, globalIndex, getCategoryIndex, navigateToCategory, navigateToArticle, getNextCategory }}>
            {children}
        </AppNavigationContext.Provider>
    );
};
