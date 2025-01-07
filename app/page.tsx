'use client';

import { useRouter } from 'next/navigation';
import Button from './components/card';
import Image from 'next/image';
import React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  title: {
    fontSize: '4rem',
    fontFamily:  "DM Sans",
    color: 'var(--accent)'
  },
  subtitle: {
    fontSize: '1.5rem',
    color: 'var(--accent)'
  },
  spacer: {
    height: '4rem',
  },
};

const LoginPage = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/home');
  };

  return (
    <div style={styles.page}>
      <Image src="/mascot/standard.svg" alt="Mascot" width={150} height={150} />
      <h1 style={styles.title}>Algosist</h1>
      <h2 style={styles.subtitle}>Learn Through Practice</h2>
      <div style={styles.spacer}></div>
      <Button onClick={handleRedirect} height="1rem">Get Started</Button>
    </div>
  );
};

export default LoginPage;
