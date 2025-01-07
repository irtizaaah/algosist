import React from 'react';
import Image from 'next/image';

interface StarProps {
  mastery: number;
  key: number;
}

const Stars: React.FC<StarProps> = ({ key=0, mastery }) => {
  // Determine the number of stars based on mastery value
  const getStarStatus = (index: number) => {
    if (mastery >= 0.9) return 'star';
    if (mastery >= 0.75) return index < 2 ? 'star' : 'star_empty';
    if (mastery >= 0.5) return index < 1 ? 'star' : 'star_empty';
    return 'star_empty';
  };

  return (
    <div style={{ display: 'flex'}}>
      {[...Array(3)].map((_, index) => (
        <div style={{margin:'2px'}}>
          <Image
            key={index+key}
            src={`/star/${getStarStatus(index)}.svg`}
            alt="Star"
            width={20}
            height={20}
          />
        </div>
      ))}
    </div>
  );
};

export default Stars;
