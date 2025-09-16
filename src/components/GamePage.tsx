import React, { useState } from 'react';
import { ProgressBar } from './ProgressBar';
import { CheckCircle, XCircle, Lightbulb, ArrowRight } from 'lucide-react';

interface GamePageProps {
  currentStep: number;
  totalSteps: number;
  hint?: string;
  onCodeSubmit: (code: string) => boolean;
  onComplete: () => void;
}

export const GamePage: React.FC<GamePageProps> = ({
  currentStep,
  totalSteps,
  hint,
  onCodeSubmit,
  onComplete
}) => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;

    setIsLoading(true);
    
    // Add slight delay for better UX
    setTimeout(() => {
      const isCorrect = onCodeSubmit(code.trim());
      
      if (isCorrect) {
        setMessage({ type: 'success', text: '🎉 Correct! Well done!' });
        setCode('');
        
        setTimeout(() => {
          if (currentStep === totalSteps) {
            onComplete();
          } else {
            setMessage(null);
          }
        }, 1500);
      } else {
        setMessage({ type: 'error', text: '❌ Incorrect code. Please try again!' });
      }
      
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b-2 border-orange-200">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-center">
          <img 
            src="/syncron-logo.png" 
            alt="Syncron Logo" 
            className="h-8 w-8 mr-3"
          />
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            Security Hunt in Progress
          </h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

        {/* Previous Hint */}
        {hint && (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-8">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                <Lightbulb className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">🔍 Your Next Clue:</h3>
                <p className="text-blue-700 leading-relaxed">{hint}</p>
              </div>
            </div>
          </div>
        )}

        {/* Code Entry */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Enter Security Code #{currentStep}
            </h2>
            <p className="text-gray-600">
              Found the code? Enter it below to continue your security journey.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="code" className="block text-sm font-semibold text-gray-700 mb-3">
                Security Code
              </label>
              <input
                type="text"
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="Enter your code here..."
                className="w-full px-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-colors text-center font-mono tracking-wider"
                disabled={isLoading}
                autoFocus
              />
            </div>

            {message && (
              <div className={`p-4 rounded-xl flex items-center justify-center font-semibold ${
                message.type === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {message.type === 'success' ? (
                  <CheckCircle className="h-5 w-5 mr-2" />
                ) : (
                  <XCircle className="h-5 w-5 mr-2" />
                )}
                {message.text}
              </div>
            )}

            <button
              type="submit"
              disabled={!code.trim() || isLoading}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 shadow-lg hover:shadow-xl disabled:shadow-none flex items-center justify-center"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              ) : (
                <>
                  Submit Code
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>💡 Tip: Codes are case-insensitive and typically found within security-related logos or content</p>
          </div>
        </div>
      </div>
    </div>
  );
};