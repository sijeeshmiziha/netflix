import React, { createContext, useContext } from 'react';
import { useMyList } from '../hooks/useMyList';

const MyListContext = createContext(null);

export function MyListProvider({ children }) {
  const myListValue = useMyList();
  return (
    <MyListContext.Provider value={myListValue}>
      {children}
    </MyListContext.Provider>
  );
}

export function useMyListContext() {
  const ctx = useContext(MyListContext);
  if (!ctx) {
    throw new Error('useMyListContext must be used within a MyListProvider');
  }
  return ctx;
}
