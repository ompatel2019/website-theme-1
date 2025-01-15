import { useEffect, useState } from 'react';

/**
 * Tracks the browser window width and returns the numeric value.
 * Use this in any component that needs to adapt to screen size.
 */
export default function useScreenWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
}
