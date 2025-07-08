import { useEffect, useRef, useState } from "react"

const useScrollAnimation = (options = {}) => {
    const [isVisible, setIsVisible] = useState(false); 
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log("i got something");
                    setIsVisible(true);
                }
            });
        }, {
            threshold: options.threshold || 0.1,
            rootMargin: options.rootMargin || '0px',
        });

        const currentElement = elementRef.current;

        if (currentElement && currentElement instanceof Element) {
            observer.observe(currentElement); 
            console.log("this is observe");
        }
        
        return () => {
            if(currentElement && currentElement instanceof Element){
                observer.unobserve(currentElement); 
            }
            console.log("not observer");
            observer.disconnect();
        }
    },[options.threshold, options.rootMargin]);

    return [elementRef, isVisible]; 
}

export { useScrollAnimation };