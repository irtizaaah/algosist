'use client';

import React from 'react';
import Image from 'next/image';  
import Card from '../components/card';

interface DashboardProps {
  courseName: string;
}

const Dashboard: React.FC<DashboardProps> = ({courseName=""}) => {
  const styles = {
    dashboard: {
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column' as 'column',
      gap: '2rem', 
    },
    firstRow: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'as 'column',
      gap: '1rem', 
      justifyContent: 'center',
    },
    tag: {
      fontFamily: 'Dongle',
      fontSize: '1rem',
      lineHeight: '1',
      textAlign: 'center' as 'center',
      borderRadius: '100px',
      padding: '0.5rem 1rem',
      backgroundColor: 'var(--light-accent)',
      color: 'var(--accent)',
      fontWeight: 'bold',
      alignSelf: 'flex-start'
    },
    thirdRow: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '2rem',
    },
  };

  return (
    <div style={styles.dashboard}>
      <div style={styles.firstRow}>
        <div style={styles.tag}>{courseName}</div>
        <Image src="/mascot/overjoyed.svg" alt="Mascot" width={120} height={120} />
      </div>

      <div>
        <Card height="8rem" onClick={() => alert('Card clicked!')}>
          <p>Start</p>
        </Card>
      </div>

      <div style={styles.thirdRow}>
        <Card onClick={() => alert('Card 2 clicked!')} width="10rem">
          <p>Review</p>
        </Card>
        <Card onClick={() => alert('Card 3 clicked!')} width="10rem">
          <p>Assess</p>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
