import React, { createContext, useContext, ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const RecipesContext = createContext<any>(null);

const fetchRecipes = async () => {
  const response = await axios.get('https://api.spoonacular.com/recipes/random', {
    params: {
      number: 4,
    },
    headers: {
    'x-api-key': import.meta.env.VITE_SPOONACULAR_API_KEY,
    },
  });
  return response.data.recipes;
};

export const RecipesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { data, error, isLoading } = useQuery({ 
    queryKey: ['recipes'],
    queryFn: fetchRecipes,
    staleTime: Infinity,
  });

  return (
    <RecipesContext.Provider value={{ data, error, isLoading }}>
      {children}
    </RecipesContext.Provider>
  );
};

export const useRecipes = () => useContext(RecipesContext);