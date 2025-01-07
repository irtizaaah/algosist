import React, { useState } from 'react';

const Output: React.FC<{ isPassed: boolean; expected: string; actual: string; logs: string }> = ({
  isPassed,
  expected,
  actual,
  logs,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
        onClick={() => setIsExpanded(!isExpanded)}
      style={{
        backgroundColor: '#246BD5',
        borderRadius: '8px',
        padding: '1rem',
        margin: '1rem 0',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span
          style={{
            backgroundColor: isPassed ? '#4CAF50' : '#F44336',
            color: '#fff',
            borderRadius: '8px',
            padding: '0 2rem',
            fontSize: '1rem',
          }}
        >
          {isPassed ? 'Passed' : 'Failed'}
        </span>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            background: 'none',
            color: '#fff',
            border: 'none',
            padding: '0',
            cursor: 'pointer',
            fontSize: '1rem',
            textDecoration: 'underline',
          }}
        >
          {isExpanded ? 'Less' : 'More'}
        </button>
      </div>
      {isExpanded && (
        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          <div
            style={{
              backgroundColor: '#FFF',
              color: '#000',
              borderRadius: '8px',
              padding: '0.8rem',
            }}
          >
            <strong>Expected</strong> {expected}
          </div>
          <div
            style={{
              backgroundColor: '#FFF',
              color: '#000',
              borderRadius: '8px',
              padding: '0.8rem',
            }}
          >
            <strong>Actual</strong> {actual}
          </div>
          <div
            style={{
              backgroundColor: '#FFF',
              color: '#000',
              borderRadius: '8px',
              padding: '0.8rem',
            }}
          >
            <strong>Logs</strong> {logs}
          </div>
        </div>
      )}
    </div>
  );
};

export default Output;
