import React from 'react';
import TabNavigation from '../components/tabNavigation';
import { lightBluePalette } from '../components/palettes';

type TestSuiteProps = {
  contentList: string[];
  tabs: string[];
  activeTab: number;
  handleTabClick: (index: number) => void;
  output: string;
};

const TestSuite: React.FC<TestSuiteProps> = ({
  contentList,
  tabs,
  activeTab,
  handleTabClick,
  output
}) => {
  const specialTabLabel = "output";
  const extendedTabs = [...tabs, specialTabLabel];

  return (
    <div style={styles.testSuite}>
      <div style={styles.stickyHeader}>
        <TabNavigation
          tabs={extendedTabs}
          activeTab={activeTab}
          onTabClick={handleTabClick}
          palette={lightBluePalette}
        />
      </div>
      <div style={styles.contentArea}>
        {activeTab === tabs.length ? (
          <div style={styles.console}>
            <div style={styles.consoleBody}>
              <pre style={styles.consoleText}>
                {'>'}Output
                {'\n'}{output}
              </pre>
            </div>
          </div>
        ) : (
          <div style={styles.testList}>
            {contentList.length > 0 ? (
              contentList.map((content, index) => (
                <div key={index} style={styles.testItem}>
                  <p>{content}</p>
                </div>
              ))
            ) : (
              <p>No tests available</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  testSuite: {
    backgroundColor: '#3E91FF',
    padding: '1rem',
    borderRadius: '15px',
    overflow: 'auto',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  stickyHeader: {
    position: 'sticky',
    top: 0,
    zIndex: 1,
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  contentArea: {
    margin: '1rem',
    flexGrow: 1,
  },
  testList: {
    fontSize: '1.7rem',
  },
  testItem: {
    backgroundColor: '#78C1F3',
    borderRadius: '15px',
    padding: '1rem',
    marginBottom: '0.5rem',
  },
  console: {
    backgroundColor: '#1b2026',
    borderRadius: '10px',
    color: '#D4D4D4',
    fontFamily: 'Courier New, monospace',
    fontSize: '1rem',
    padding: '1rem',
    height: '100%',
    overflowY: 'auto',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  },
  consoleBody: {
    padding: '1rem',
    whiteSpace: 'pre-wrap',
    overflowWrap: 'break-word',
  },
  consoleText: {
    margin: 0,
    lineHeight: '1.5',
    fontSize:'0.8rem',
    color: "#ADD8E6",
  },
};

export default TestSuite;
