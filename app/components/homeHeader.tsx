'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '0.15rem solid var(--border)',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '20%',
    maxWidth: '250px',
  },
  logo: {
    fontSize: '2rem',
    cursor: 'pointer',
    fontFamily: 'DM Sans',
    color: 'var(--accent)',
  },
  navItem: {
    padding: '1rem',
    cursor: 'pointer',
  },
};

const Header = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.logo} onClick={() => router.push('/home')}>
        Algosist
      </h1>
      <nav style={styles.nav}>
        <div style={styles.navItem} onClick={() => handleNavigation('/')}>
          <Image src="/nav/badge.svg" alt="Badge" width={32} height={32} />
        </div>
        <div style={styles.navItem} onClick={() => handleNavigation('/about')}>
          <Image src="/nav/home.svg" alt="Home" width={32} height={32} />
        </div>
        <div style={styles.navItem} onClick={() => handleNavigation('/contact')}>
          <Image src="/nav/profile.svg" alt="Profile" width={32} height={32} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
