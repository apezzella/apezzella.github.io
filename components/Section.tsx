
import React, { useRef, useEffect, useState } from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  variant?: 1 | 2 | 3;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '', variant = 1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const variantClasses = {
    1: 'bg-gradient-to-b from-white to-gray-50 dark:from-gray-800/60 dark:to-gray-800',
    2: 'bg-gradient-to-b from-gray-100/60 to-gray-100 dark:from-gray-900/60 dark:to-gray-900',
    3: 'bg-gradient-to-b from-gray-100 to-gray-200/70 dark:from-gray-800 dark:to-gray-700/80',
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`reveal ${variantClasses[variant]} p-6 md:p-8 rounded-2xl shadow-sm border border-black/5 dark:border-white/5 ${className} ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </section>
  );
};

export default Section;
