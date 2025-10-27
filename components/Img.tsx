import React from 'react';

interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  align?: 'left' | 'center' | 'right';
}

const Img: React.FC<ImgProps> = ({
  align = 'left',
  className,
  ...props
}) => {
  const alignClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };
  
  // This wrapper div becomes the grid item and uses flexbox to align the <img> inside it.
  const wrapperClassName = `flex ${alignClasses[align]}`;
  const imgClassName = `block rounded-lg shadow-md max-w-full h-auto object-cover ${className || ''}`;

  return (
    <div className={wrapperClassName}>
      <img loading="lazy" {...props} className={imgClassName.trim()} />
    </div>
  );
};

export default Img;