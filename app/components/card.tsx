'use client';

import React, { useState } from 'react';
import { availablePalettes, defaultPalette, Palette } from './palettes';

type CardProps = {
  children: React.ReactNode;
  onClick?: () => void;
  palette?: Palette;
  height?: string;
  width?: string;
  size?: string;
};

const Card = ({ children, onClick, palette = defaultPalette, height = 'auto', width = 'auto', size = '1.5rem' }: CardProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const cardStyle: React.CSSProperties = {
    backgroundColor: palette.background,
    border: `0.4rem solid ${palette.border}`,
    color: isPressed ? palette.border : 'white',
    padding: '1rem',
    borderRadius: '1rem',
    boxShadow: isPressed ? 'none' : `0 0.3rem 0 ${palette.shadow}`, // Remove box shadow on click
    cursor: 'pointer',
    fontFamily: "'Dongle', sans-serif",
    fontWeight: '700',
    fontSize: size, 
    height: height, 
    width: width, 
    transition: 'color 0.2s ease, transform 0.1s ease', // Smooth transition for transform
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    lineHeight: '1',
    transform: isPressed ? 'translateY(2px)' : 'none', // Move the card down a little on click
    overflow: 'auto',
  };

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  return (
    <div
      style={cardStyle}
      onClick={onClick}
      onMouseDown={handleMouseDown}  
      onMouseUp={handleMouseUp}    
      onMouseLeave={handleMouseLeave} 
    >
      {children}
    </div>
  );
};

export default Card;
