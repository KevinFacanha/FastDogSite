import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [hash]);
};

export default useScrollToHash;
