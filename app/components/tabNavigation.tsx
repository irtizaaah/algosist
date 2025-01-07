import React from 'react';
import Card from './card';  // Assuming Palette is exported from Card component
import { defaultPalette, Palette } from './palettes';

interface TabNavigationProps {
  tabs: string[];
  activeTab: number;
  onTabClick: (index: number) => void;
  palette: Palette;  // Add palette prop here
}

const TabNavigation: React.FC<TabNavigationProps> = ({ tabs, activeTab, onTabClick, palette=defaultPalette}) => (
  <Card
    width="100%"
    height="3.5rem"
    palette={palette}
  >
    <div style={{ display: 'flex',overflowX: 'auto', width:'100%'}}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          style={{
            flex: 1,
            padding: '1rem',
            backgroundColor: activeTab === index ? palette.border : palette.background,  // Use palette colors here
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            margin: '2px 8px',
            fontSize: '1rem',
            height: '2rem',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            minWidth: '8rem',
            maxWidth: '8rem'
          }}
          onClick={() => onTabClick(index)}
          aria-label={`Switch to ${tab}`}
        >
          {tab}
        </button>
      ))}
    </div>
  </Card>
);

export default TabNavigation;
