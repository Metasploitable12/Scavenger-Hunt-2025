import React, { useState } from 'react';
import { Shield, Target, Award } from 'lucide-react';

interface LandingPageProps {
  title: string;
  rules: string[];
  onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ title, rules, onStart }) => {
  const [showRules, setShowRules] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm border-b-2 border-orange-200">
        <div className="max-w-4xl mx-auto px-4 py-6 flex items-center justify-center">
          <img 
            src="/syncron-logo.png" 
            alt="Syncron Logo" 
            className="h-12 w-12 mr-4"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            {title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="max-w-2xl w-full">
          {/* Welcome Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-orange-100">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Shield className="h-12 w-12 text-orange-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Welcome to the Security Hunt! 🔍
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Test your security awareness skills in this interactive scavenger hunt. 
                Find hidden codes throughout our Confluence space and unlock your way to completion!
              </p>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">5 Challenges</h3>
                <p className="text-gray-600 text-sm">Navigate through security topics to find codes</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Learn & Explore</h3>
                <p className="text-gray-600 text-sm">Discover important security resources</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Win Prizes</h3>
                <p className="text-gray-600 text-sm">Complete the hunt to take home some amazing InfoSec goodies</p>
              </div>
            </div>

            {/* Rules Toggle */}
            <div className="mb-8">
              <button
                onClick={() => setShowRules(!showRules)}
                className="w-full bg-orange-50 hover:bg-orange-100 text-orange-800 font-semibold py-3 px-6 rounded-lg transition-colors border border-orange-200"
              >
                {showRules ? 'Hide Rules' : 'Show Rules & Instructions'} 
                <span className="ml-2">{showRules ? '▲' : '▼'}</span>
              </button>
              
              {showRules && (
                <div className="mt-4 bg-gray-50 rounded-lg p-6 border">
                  <h3 className="font-bold text-gray-800 mb-4">📋 How to Play:</h3>
                  <ul className="space-y-3">
                    {rules.map((rule, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-orange-500 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Start Button */}
            <div className="text-center">
              <button
                onClick={onStart}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
              >
                🚀 Start the Hunt!
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-gray-500 text-sm">
            <p>🔒 Part of Syncron Security Awareness Program</p>
          </div>
        </div>
      </div>
    </div>
  );
};
