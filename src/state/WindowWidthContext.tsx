import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface WindowWidthContextProps {
  windowWidth: number;
}

export const WindowWidthContext = createContext<WindowWidthContextProps | undefined>(undefined);

export const WindowWidthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <WindowWidthContext.Provider value={{ windowWidth }}>
      {children}
    </WindowWidthContext.Provider>
  );
};
