'use client';

import { useRouter } from 'next/navigation';
import Card from '../components/card'; 
import Stars from '../components/stars'
import { conceptPalettes } from '../components/palettes'; 

interface Problem {
  concept_id: number;
  name: string;
}

interface ConceptsProps {
  unitId: number,
  concepts: Problem[];
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    padding: '1rem',
    maxWidth: '1000px',
    marginBottom:'20rem',
  } as React.CSSProperties,
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as React.CSSProperties,
  cardAndStars: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.5rem', 
    width: '150px'
  } as React.CSSProperties,
};

const Concepts: React.FC<ConceptsProps> = ({ unitId = 0, concepts = [] }) => {
  const router = useRouter();

  return (
    <div style={styles.container}>
      {concepts.map((concept, index) => {
        const palette = conceptPalettes[index % conceptPalettes.length];
        return (
          <div key={concept.concept_id} style={styles.item}>
            <div style={styles.cardAndStars}>
              <Card onClick={() => router.push(`/workspace?unit_id=${encodeURIComponent(unitId)}&concept_id=${encodeURIComponent(concept.concept_id)}`)} height="2rem" width="2rem" palette={palette}>{index+1}</Card>
              <Stars mastery={0} />
            </div>
            <p style={{fontSize:'1.6rem', lineHeight: '1', textAlign: 'right'}}>{concept.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Concepts;
