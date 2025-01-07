'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import MarkdownView from './markdownView';
import { units, problem_contents , decode } from '../utils/data';
import CodeEditor from './codeEditor';
import Split from 'react-split';
import Header from '../components/workspaceHeader';
import TestSuite from './testSuite';
import {runPython} from '../browser-runtime/execution'

const EditorComponent: React.FC = () => {
  const runCode = async() => {
    return runPython(codeContent);
  }

  // GET PARAMETERS
  const searchParams = useSearchParams();
  const unitId = Number(searchParams.get('unit_id'));
  const conceptId = Number(searchParams.get('concept_id'));

  // GET UNIT AND CONCEPT
  const unit = units.find(unit => unit.unit_id === unitId);
  const concept = unit?.concepts.find(concept => concept.concept_id === conceptId);

  const [problemIndex, setProblemIndex] = useState(0);
  const numOfProblems = concept?.problems.length || 0;
  const problemId = concept?.problems[problemIndex]?.problem_id;
  
  // GET PROBLEM CONTENT
  const problemContent = problem_contents.find(problem => problem.problem_id === problemId);
  const problemTitle = `# ${concept?.problems[problemIndex]?.name || ''}\n`;

  // MARKDOWN STATE
  const markdownList = problemContent?.content.markdown || [];
  const [activeMarkdownTab, setActiveMarkdownTab] = useState(0);
  const markdownContent = problemTitle + decode(markdownList[activeMarkdownTab]?.data || '');

  // CODE STATE
  const codeList = problemContent?.content.code || [];
  const [activeCodeTab, setActiveCodeTab] = useState(0);
  const [codeContent, setCodeContent] = useState<string>(decode(codeList[activeCodeTab]?.data || ''));
  
  // TEST STATE
  const testList = problemContent?.content.test || [];
  const [activeTestTab, setActiveTestTab] = useState(testList.length);
  const testContentList = testList[activeTestTab]?.data || ['No test content available'];
  const [output, setOutput] = useState<string>("");

  // SOLUTION STATE
  const solutionList = problemContent?.content.solutions || [];
  const solutionContent = decode(solutionList[0].data);

  // Effect hook to update codeContent when activeCodeTab changes
  useEffect(() => {
    const updatedCodeContent = decode(codeList[activeCodeTab]?.data || 'No code content available');
    setCodeContent(updatedCodeContent);
  }, [activeCodeTab, problemIndex]);  // Dependencies on activeCodeTab and problemIndex

  // Handlers for tab clicks
  const handleMarkdownTabClick = (index: number) => setActiveMarkdownTab(index);
  const handleCodeTabClick = (index: number) => setActiveCodeTab(index);
  const handleTestTabClick = (index: number) => setActiveTestTab(index);

  // Handle code change
  const handleCodeChange = (newCode: string) => {
    setCodeContent(newCode);
  };

  return (
    <div style={{ height: '98vh', margin: '0 1rem', display: 'flex', flexDirection: 'column'}}>
      <Header 
        runCode = {runCode}
        code={codeContent}
        numOfProblems={numOfProblems}
        problemIndex={problemIndex}
        iterateProblems={setProblemIndex}
        output={output}
        setOutput={setOutput}
        solution={solutionContent}
      />
      
      <Split sizes={[50, 50]} minSize={80} direction="horizontal" gutterSize={10} style={{ display: 'flex', flexGrow: 1, overflowY: 'auto' }}>
        
        <MarkdownView
          content={markdownContent}
          tabs={markdownList.map(md => md.name)}
          activeTab={activeMarkdownTab}
          handleTabClick={handleMarkdownTabClick}
        />

        <Split
          sizes={[70, 30]}
          minSize={85}
          direction="vertical"
          gutterSize={10}
          style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, maxHeight: 'calc(98vh - 2rem)' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, overflowY: 'auto' }}>
            <CodeEditor
              content={codeContent}
              tabs={codeList.map(md => md.name)}
              activeTab={activeCodeTab}
              handleTabClick={handleCodeTabClick}
              onCodeChange={handleCodeChange}
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, overflowY: 'auto' }}>
            <TestSuite
              contentList={testContentList}
              tabs={testList.map(test => test.name)}
              activeTab={activeTestTab}
              handleTabClick={handleTestTabClick}
              output={output}
            />
          </div>
        </Split>
      </Split>
    </div>
  );
};

export default EditorComponent;
