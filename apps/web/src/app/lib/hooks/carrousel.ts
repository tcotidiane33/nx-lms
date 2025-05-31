// Ajoutez ce hook personnalisé
import { useRef } from 'react';

export function useHorizontalScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
  
    const scrollLeft = () => {
      if (containerRef.current) {
        containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      }
    };
  
    const scrollRight = () => {
      if (containerRef.current) {
        containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
    };
  
    return { containerRef, scrollLeft, scrollRight };
  }