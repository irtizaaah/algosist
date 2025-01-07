import React, { useEffect, useRef, useState } from 'react';
import MonacoEditor from '@monaco-editor/react';
import { darkPurplePalette } from '../components/palettes';
import Card from '../components/card';
import TabNavigation from '../components/tabNavigation';

const CodeEditor: React.FC<{
  content: string;
  tabs: string[];
  activeTab: number;
  handleTabClick: (index: number) => void;
  onCodeChange: (code: string) => void;

}> = ({ content, tabs, activeTab, handleTabClick, onCodeChange}) => {
  const editorRef = useRef<any>(null);
  const [editorContent, setEditorContent] = useState<{ [key: number]: string }>({});
  const [showResetConfirmation, setShowResetConfirmation] = useState(false);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [language, setLanguage] = useState('python');

  const resetConfirmationRef = useRef<HTMLDivElement | null>(null);
  const languageSelectorRef = useRef<HTMLDivElement | null>(null);

  // Consolidated useEffect to handle content and activeTab updates
  useEffect(() => {
    setEditorContent((prevContent) => ({
      ...prevContent,
      [activeTab]: content,
    }));
  }, [activeTab, content]);

  // Close modals when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        (resetConfirmationRef.current && !resetConfirmationRef.current.contains(event.target as Node)) &&
        (languageSelectorRef.current && !languageSelectorRef.current.contains(event.target as Node))
      ) {
        setShowResetConfirmation(false);
        setShowLanguageSelector(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Handle content reset
  const resetContent = () => {
    setEditorContent((prevContent) => {
      const updatedContent = { ...prevContent };
      updatedContent[activeTab] = content;
      onCodeChange(content); // Notify parent about the reset
      return updatedContent;
    });
    setShowResetConfirmation(false); // Close the confirmation modal
  };

  // Handle language change
  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    setShowLanguageSelector(false);
  };

  return (
    <div
      style={{
        padding: '1rem',
        height: '100%',
        borderRadius: '15px',
        backgroundColor: 'var(--code-editor)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <div style={{position: 'sticky',top: 0,zIndex: 1,}}>
        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={handleTabClick}
          palette={darkPurplePalette}
        />
      </div>
      <div style={{ marginRight: '15px', marginTop: '10px', display: 'flex', justifyContent:'flex-end', gap: '10px' }}>
        {/* <button onClick={() => setShowResetConfirmation(true)} style={{ fontSize: '1.3rem', color:'#fff'}}>
          Reset
        </button> */}
        <button onClick={() => setShowLanguageSelector(true)} style={{ fontSize: '1.3rem', color:'#fff'}}>
          {language.charAt(0).toUpperCase() + language.slice(1)}
        </button>
      </div>
      <div style={{ flex: 1, display: 'flex', marginTop: '1rem' }}>
        <MonacoEditor
          height="100%"
          language={language}
          theme="vs-dark"
          value={editorContent[activeTab] || ''}
          onChange={(newValue) => {
            setEditorContent((prevContent) => {
              const updatedContent = { ...prevContent };
              updatedContent[activeTab] = newValue;
              onCodeChange(newValue); // Notify parent of the code change
              return updatedContent;
            });
          }}
          options={{
            fontFamily: 'monospace',
            fontSize: 14,
            wordWrap: 'on',
            lineNumbers: 'on',
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
          }}
          editorDidMount={(editor) => {
            editorRef.current = editor;
          }}
        />
      </div>

      {/* Reset Confirmation Modal */}
      {showResetConfirmation && (
        <div
          ref={resetConfirmationRef}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#fff' }}>
              <p>Are you sure you want to reset this code to its original content?</p>
              <div style={{ display: 'flex', gap: '1rem', color: '#fff' }}>
                <button onClick={resetContent} style={{ color: '#fff' }}>Yes</button>
                <button onClick={() => setShowResetConfirmation(false)} style={{ color: '#fff' }}>Cancel</button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Language Selector Modal */}
      {showLanguageSelector && (
        <div
          ref={languageSelectorRef}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <button onClick={() => handleLanguageChange('javascript')} style={{ color: '#fff' }}>JavaScript</button>
              <button onClick={() => handleLanguageChange('python')} style={{ color: '#fff' }}>Python</button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CodeEditor;
