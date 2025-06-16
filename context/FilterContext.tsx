'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type FilterType = {
 priceRange: [number, number];
 rating: number;
 category: string;
 sort: 'lowest' | 'highest' | 'rating' | '';
};

const defaultFilter: FilterType = {
 priceRange: [0, 1000],
 rating: 0,
 category: '',
 sort: '',
};

const FilterContext = createContext<{
 filters: FilterType;
 setFilters: (filters: FilterType) => void;
}>({
 filters: defaultFilter,
 setFilters: () => { },
});

export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
 const [filters, setFilters] = useState<FilterType>(defaultFilter);

 return (
  <FilterContext.Provider value={{ filters, setFilters }}>
   {children}
  </FilterContext.Provider>
 );
};
