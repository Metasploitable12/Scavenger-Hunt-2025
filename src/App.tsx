import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { GamePage } from './components/GamePage';
import { CompletionPage } from './components/CompletionPage';
import { gameConfig, generateCompletionCode } from './config';

type GameState = 'landing' | 'playing' | 'completed';

function App() {
  const [gameState, setGameState] = useState<GameState>('landing');
  const [currentStep, setCurrentStep] = useState(1);
  const [completionCode, setCompletionCode] = useState('');
  const [currentHint, setCurrentHint] = useState<string>('');

  const startGame = () => {
    setGameState('playing');
    setCurrentStep(1);
    setCurrentHint('');
  };

  const handleCodeSubmit = (code: string): boolean => {
    const correctCode = gameConfig.codes[currentStep - 1];
    
    if (code.toUpperCase() === correctCode.toUpperCase()) {
      if (currentStep < gameConfig.codes.length) {
        // Show hint for next step
        setCurrentHint(gameConfig.hints[currentStep - 1]);
        setCurrentStep(currentStep + 1);
      }
      return true;
    }
    
    return false;
  };

  const handleComplete = () => {
    const code = generateCompletionCode();
    setCompletionCode(code);
    setGameState('completed');
  };

  const restartGame = () => {
    setGameState('landing');
    setCurrentStep(1);
    setCurrentHint('');
    setCompletionCode('');
  };

  switch (gameState) {
    case 'landing':
      return (
        <LandingPage
          title={gameConfig.title}
          rules={gameConfig.rules}
          onStart={startGame}
        />
      );
    
    case 'playing':
      return (
        <GamePage
          currentStep={currentStep}
          totalSteps={gameConfig.codes.length}
          hint={currentHint}
          onCodeSubmit={handleCodeSubmit}
          onComplete={handleComplete}
        />
      );
    
    case 'completed':
      return (
        <CompletionPage
          completionCode={completionCode}
          onRestart={restartGame}
        />
      );
    
    default:
      return <div>Loading...</div>;
  }
}

export default App;