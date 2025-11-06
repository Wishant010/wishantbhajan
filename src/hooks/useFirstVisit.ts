import { useState, useEffect } from 'react';

export const useFirstVisit = () => {
  const [isFirstVisit, setIsFirstVisit] = useState<boolean | null>(null);

  useEffect(() => {
    const hasVisited = localStorage.getItem('portfolio_visited');
    setIsFirstVisit(!hasVisited);
  }, []);

  const markAsVisited = () => {
    localStorage.setItem('portfolio_visited', 'true');
    setIsFirstVisit(false);
  };

  return { isFirstVisit, markAsVisited };
};
