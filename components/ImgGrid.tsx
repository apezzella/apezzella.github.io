import React from 'react';

interface ImgGridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: number;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const ImgGrid: React.FC<ImgGridProps> = ({
  children,
  cols = 2,
  gap = 4,
  align: gridAlign = 'left',
  className = ''
}) => {
  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  };

  // Alignment is now handled by the Img component itself.
  const gridClasses = `grid ${colClasses[cols]} gap-${gap} ${className}`;

  // Clone children to pass down the grid's align prop as a default
  // if a child doesn't have its own align prop.
  const childrenWithProps = React.Children.map(children, child => {
    // FIX: Used a generic type with `React.isValidElement` to solve a TypeScript error.
    // This type guard informs TypeScript that `child.props` can have an `align` property,
    // resolving the "Property 'align' does not exist on type 'unknown'" error. This also
    // allows removing the type assertion in `React.cloneElement`.
    if (React.isValidElement<{ align?: 'left' | 'center' | 'right' }>(child) && typeof child.type !== 'string' && !child.props.align) {
      return React.cloneElement(child, {
        align: gridAlign
      });
    }
    return child;
  });


  return (
    <div className={gridClasses}>
      {childrenWithProps}
    </div>
  );
};

export default ImgGrid;