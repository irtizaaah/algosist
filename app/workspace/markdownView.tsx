import React from 'react';
import ReactMarkdown from 'react-markdown';
import TabNavigation from '../components/tabNavigation';
import { orangePalette } from '../components/palettes';

interface MarkdownViewProps {
  content: string;
  tabs: string[]; // Pass tabs as a prop
  activeTab: number; // Pass activeTab as a prop
  handleTabClick: (index: number) => void; // Pass handleMarkdownTabClick as a prop
}

const MarkdownView: React.FC<MarkdownViewProps> = ({
  content,
  tabs,
  activeTab,
  handleTabClick,
}) => {
  const styles = {
    container: {
      fontFamily: 'Dongle, sans-serif',
      backgroundColor: 'var(--accent)',
      color: '#FFE9C3',
      padding: '1rem',
      borderRadius: '15px',
      lineHeight: '1.6',
      fontSize: '1.7rem',
      display: 'flex',
      flexDirection: 'column' as 'column',
      overflow: 'auto',
      flexGrow: 1,
    },
    stickyHeader: {
      position: 'sticky',
      top: 0,
      zIndex: 1,
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      color: '#FFE9C3',
      fontFamily: 'Dongle, sans-serif',
      lineHeight: '1',
    },
    code: {
      backgroundColor: '#FF6745',
      padding: '10px',
      borderRadius: '8px',
      margin: '10px 0',
    },
    markdownContent: {
      margin: '4rem',
    },
  };

  const customRenderers = {
    h1: ({ children }: { children: React.ReactNode }) => <h1 style={styles.heading}>{children}</h1>,
    h2: ({ children }: { children: React.ReactNode }) => <h2 style={styles.heading}>{children}</h2>,
    h3: ({ children }: { children: React.ReactNode }) => <h3 style={styles.heading}>{children}</h3>,
    h4: ({ children }: { children: React.ReactNode }) => <h4 style={styles.heading}>{children}</h4>,
    h5: ({ children }: { children: React.ReactNode }) => <h5 style={styles.heading}>{children}</h5>,
    h6: ({ children }: { children: React.ReactNode }) => <h6 style={styles.heading}>{children}</h6>,
    code: ({ inline, children }: { inline?: boolean; children: React.ReactNode }) => (
      <pre style={styles.code}>
        {children}
      </pre>
    ),
  };

  return (
    <div style={styles.container}>
      <div style={styles.stickyHeader}>
        <TabNavigation
          tabs={tabs} // Receive tabs from parent
          activeTab={activeTab} // Receive activeTab from parent
          onTabClick={handleTabClick} // Receive handleMarkdownTabClick from parent
          palette={orangePalette} // Receive palette from parent
        />
      </div>
      <div style={styles.markdownContent}>
        <ReactMarkdown components={customRenderers}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownView;
