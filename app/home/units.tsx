'use client';

import React from 'react';
import Card from '../components/card';
import Stars from '../components/stars';
import { unitPalettes } from '../components/palettes';

type UnitsProps = {
  units: { unit_id: number; name: string }[];
  onUnitClick: (unitId: number) => void;
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    justifyContent: 'center',
    padding: '2rem',
    maxWidth: '1000px',
    width: '450px',
    marginBottom: '20rem',
    position: 'relative',
    overflow: 'hidden',
  } as React.CSSProperties,  
  item: {
    display: 'flex',
    justifyContent: 'center',
  } as React.CSSProperties,

  left: {
    justifyContent: 'flex-start',
  } as React.CSSProperties,

  right: {
    justifyContent: 'flex-end',
  } as React.CSSProperties,

  cardContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  } as React.CSSProperties,

  svgBackground: {
    position: 'absolute',
    top: 80,
    left: 120,
    zIndex: -1,
  } as React.CSSProperties,
};

const Units = ({ units, onUnitClick }: UnitsProps) => {
  const handleUnitClick = (unitId: number) => {
    onUnitClick(unitId);
  };

  return (
    <div style={styles.container}>
      {units.map((unit, index) => {
        const palette = unitPalettes[index % unitPalettes.length];
        const svgFillColor = index % 2 === 0 ? 'var(--border)' : 'var(--background)'; 

        return (
          <div
            key={unit.unit_id}
            style={{ ...styles.item, ...(index % 2 === 0 ? styles.left : styles.right) }}>
            <div style={styles.cardContainer}>
              <svg style={styles.svgBackground} width="169" height="389" viewBox="0 0 169 389" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M77.0449 388.415H30.0449C13.4764 388.415 0.0449219 374.984 0.0449219 358.415V219.415C0.0449219 202.846 13.4764 189.415 30.0449 189.415H94.0449C98.7389 189.415 103.181 190.493 107.137 192.415H77.0449V199.415H30.0449C18.9992 199.415 10.0449 208.369 10.0449 219.415V358.415C10.0449 369.461 18.9992 378.415 30.0449 378.415H77.0449V388.415Z" fill={svgFillColor} />
                <path fillRule="evenodd" clipRule="evenodd" d="M61.0449 189.415H138.445C149.491 189.415 158.445 180.461 158.445 169.415V30C158.445 18.9543 149.491 10 138.445 10H61.0449V3.05176e-05H138.445C155.014 3.05176e-05 168.445 13.4315 168.445 30V169.415C168.445 185.984 155.014 199.415 138.445 199.415H60.6985C56.894 199.415 53.2548 198.707 49.9057 197.415H61.0449V189.415Z" fill={svgFillColor} />
              </svg>
              <Card key={unit.unit_id} onClick={() => handleUnitClick(unit.unit_id)} height="140px" width="200px" palette={palette}>
                {unit.name}
              </Card>
              <div style={{ height: '1rem' }}></div>
              <Stars mastery={0} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Units;
