import { useEffect, useState, useRef } from "react";

const useIntersectionObserver = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    }, options);

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [options, isVisible]);

  return [componentRef, isVisible];
};

export default useIntersectionObserver;
