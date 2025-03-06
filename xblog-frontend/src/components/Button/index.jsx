import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';

function ButtonVariants({ children, onClick, className }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Button
            variant={"primary"} 
            size={isMobile ? "sm" : "lg"} 
            onClick={onClick}
            className={`bg-[#4A90E2] hover:bg-[#4A90E2]/90` || className}
        >
        {children}
        </Button>
    );
}

export default ButtonVariants;

