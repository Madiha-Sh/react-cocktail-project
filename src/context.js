import React, { Component, createContext, useContext, useEffect, useState, useCallback } from 'react';

const AppContext = createContext();
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktails, setCocktails] = useState([]);

  const getData = useCallback(async () => {
    console.count('gets created');
    setIsLoading(true);
    try {
    const resp = await fetch(`${url}${searchTerm}`);
    const data = await resp.json();
    setIsLoading(false);
    const { drinks } = data;
      if(drinks) {
        const newCocktails = drinks.map(item => {
          const { idDrink, strDrink, strCategory, strGlass, strDrinkThumb , strAlcoholic } = item;
          return {
            id: idDrink,
            name: strDrink,
            category: strCategory,
            glass: strGlass,
            image: strDrinkThumb,
            info: strAlcoholic,
          }
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setIsLoading(false);
    } catch(error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    console.log('fetched');
    getData();
  }, [searchTerm, getData]);

  return <AppContext.Provider 
    value={{
      searchTerm,
      setSearchTerm,
      isLoading,
      cocktails,
    }}
  >
    { children }
  </AppContext.Provider>
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };