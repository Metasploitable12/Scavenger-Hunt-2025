import React, { useState, useEffect } from 'react';
import { Trophy, Copy, Check, Share2 } from 'lucide-react';

interface CompletionPageProps {
  completionCode: string;
  onRestart: () => void;
}

export const CompletionPage: React.FC<CompletionPageProps> = ({ 
  completionCode, 
  onRestart 
}) => {
  const [copied, setCopied] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(completionCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareResults = () => {
    const message = `🎉 I just completed the Syncron Security Awareness Scavenger Hunt! My completion code: ${completionCode}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Security Hunt Completed!',
        text: message
      });
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              {['🎉', '🏆', '🎊', '⭐', '🔒', '🛡️'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>
      )}

      {/* Header */}
      <div className="bg-white shadow-sm border-b-2 border-orange-200">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-center">
          <img 
            src="/syncron-logo.png" 
            alt="Syncron Logo" 
            className="h-8 w-8 mr-3"
          />
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            Hunt Completed! 🎉
          </h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Success Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6 border border-orange-200 relative">
          {/* Trophy Icon */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Trophy className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              🎊 Congratulations! 🎊
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              You've successfully completed the Syncron Security Awareness Scavenger Hunt!
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl border border-orange-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">5/5</div>
              <div className="text-sm text-gray-600">Codes Found</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">100%</div>
              <div className="text-sm text-gray-600">Complete</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">🏆</div>
              <div className="text-sm text-gray-600">Achievement</div>
            </div>
          </div>

          {/* Completion Code */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
              📋 Your Completion Code
            </h3>
            <p className="text-center text-gray-600 mb-4 text-sm">
              Copy this code and send it to infosec@syncron.com before 12th November 2025 and make your entry to prize pool!
            </p>
            
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-mono font-bold text-gray-800 mb-4 tracking-wider">
                  {completionCode}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={copyToClipboard}
                    className={`flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      copied
                        ? 'bg-green-500 text-white'
                        : 'bg-orange-500 hover:bg-orange-600 text-white'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="h-5 w-5 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-5 w-5 mr-2" />
                        Copy Code
                      </>
                    )}
                  </button>
                  
                  <button
                    onClick={shareResults}
                    className="flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-200"
                  >
                    <Share2 className="h-5 w-5 mr-2" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Security Message */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-blue-800 mb-3">🛡️ Security Awareness Achieved!</h3>
            <p className="text-blue-700 text-sm leading-relaxed">
              By completing this scavenger hunt, you've explored key security resources and 
              strengthened your awareness of Syncron's security policies. Keep applying these 
              learnings in your daily work to help protect our organization!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="text-center space-y-4">
            <button
              onClick={onRestart}
              className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-200 transform hover:scale-105"
            >
              🔄 Start New Hunt
            </button>
            
            <div className="text-xs text-gray-500">
              <p>Completed on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>🔒 Thank you for participating in Syncron's Security Awareness Program!</p>
        </div>
      </div>
    </div>
  );
};
