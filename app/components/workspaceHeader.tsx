'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import the useRouter hook
import Card from '../components/card';

interface HeaderProps {
  code: string;
  numOfProblems: number;
  problemIndex: number;
  runCode: () => string;
  iterateProblems: (index: number) => void;
  setOutput: (index: string) => void
  solution: string
}

// Your existing styles
const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',  
  margin: '0.4rem 1rem'
};

const navStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',                
  width: '20%',
  maxWidth: '150px',
};

const logoStyle: React.CSSProperties = {
  fontSize: '1.3rem',
  cursor: 'pointer',
  color: 'var(--accent)',
  fontFamily: 'DM Sans'
};

const navItemStyle: React.CSSProperties = {};

const modalStyle: React.CSSProperties = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 3,
};

const Header = ({ problemIndex, numOfProblems, code , iterateProblems, runCode, setOutput, solution}: HeaderProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);
  const router = useRouter(); // Initialize the router

  const run = async (code: string) => {
    const msg = runCode(code)
    setOutput(msg)
  };

  const showSolution = () => {
    setModalContent(
      <Card width="40rem" height="40rem">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100%'}}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
            <h1>Review</h1>
            <p>Solution</p>
            <div style={{ width: '35rem', height: '100%', backgroundColor: "black", borderRadius: "15px", padding: "1rem", overflow:"scroll" }}>
              <pre style={{ fontSize: "0.9rem", fontWeight: "300", lineHeight: "1.6" }}>{solution}</pre>
            </div>
            <p>Tests</p>
            <div style={{ width: '35rem', height: '3rem', backgroundColor: "white", borderRadius: "15px", padding: "1rem" }}>
              <p style={{ color: "var(--accent)"}}>Tests Not Run</p>
            </div>
            <div style={{ width: '35rem', marginTop: '1rem' }}>
              <label htmlFor="review-slider" style={{ display: 'block', marginBottom: '0.5rem' }}>
                Review Quality
              </label>
              <input
                type="range"
                id="review-slider"
                min="0"
                max="4"
                step="1"
                defaultValue="2"
                style={{ width: '100%' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                <span>Poor</span>
                <span>Bad</span>
                <span>Average</span>
                <span>Good</span>
                <span>Excellent</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem'}}>
                <div style={{ ...navItemStyle, transform: 'scaleX(-1)' }} onClick={()=>handleBack()}>
                  <Image src="/nav/arrow.svg" alt="Left Arrow" width={32} height={32} />
                </div>
                <div style={navItemStyle} onClick={()=>handleNext()}>
                  <Image src="/nav/arrow.svg" alt="Right Arrow" width={32} height={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  
    setModalVisible(true); // Show modal
  }
  
  const handleCloseModal = () => {
    setModalVisible(false); // Hide modal
    setModalContent(null); // Clear content
  };

  const handleLogoClick = () => {
    router.push('/home'); // Navigate to /home when the logo is clicked
  };

  const handleNext = () => {
    if(problemIndex < numOfProblems-1){
      iterateProblems(problemIndex+1)
    }
    setModalVisible(false); // Hide modal
  }

  const handleBack= () => {
    if(problemIndex > 0){
      iterateProblems(problemIndex-1)
    }
    setModalVisible(false); // Hide modal
  }

  return (
    <div>
      <header style={headerStyle}>
        <h1 style={logoStyle} onClick={handleLogoClick}>Algosist</h1>
        <div>{problemIndex+1}/{numOfProblems}</div>
        <nav style={navStyle}>
          <div style={navItemStyle} onClick={() => run(code)}>
            <Image src="/nav/play.svg" alt="Play" width={32} height={32} />
          </div>
          <div style={navItemStyle} onClick={()=>showSolution()}>
            <Image src="/nav/solution.svg" alt="Solution" width={32} height={32} />
          </div>
          <div style={{ ...navItemStyle, transform: 'scaleX(-1)' }} onClick={()=>handleBack()}>
            <Image src="/nav/arrow.svg" alt="Left Arrow" width={32} height={32} />
          </div>
          <div style={navItemStyle} onClick={()=>handleNext()}>
            <Image src="/nav/arrow.svg" alt="Right Arrow" width={32} height={32} />
          </div>
        </nav>
      </header>

      {modalVisible && (
        <div style={modalStyle} onClick={handleCloseModal}>
          <div onClick={(e) => e.stopPropagation()}>{modalContent}</div>
        </div>
      )}
    </div>
  );
};

export default Header;
