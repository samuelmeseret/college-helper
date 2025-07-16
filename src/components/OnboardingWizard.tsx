import React from 'react';
import {
  ChevronRight,
  BookOpen,
  Target,
  Trophy,
  User,
  Check
} from 'lucide-react';
import { Profile } from '../types';

interface Props {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  profile: Partial<Profile>;
  setProfile: React.Dispatch<React.SetStateAction<Partial<Profile>>>;
}

const OnboardingWizard: React.FC<Props> = ({ currentStep, setCurrentStep, profile, setProfile }) => {
  const steps = [
    { title: 'Academic Metrics', icon: <BookOpen className="w-5 h-5" /> },
    { title: 'Test Scores', icon: <Target className="w-5 h-5" /> },
    { title: 'Extracurriculars', icon: <Trophy className="w-5 h-5" /> },
    { title: 'Demographics', icon: <User className="w-5 h-5" /> }
  ];

  const updateProfile = (updates: Partial<Profile>) => {
    setProfile(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    idx < currentStep - 1 ? 'bg-green-500' : idx === currentStep - 1 ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                >
                  {idx < currentStep - 1 ? <Check className="w-5 h-5 text-white" /> : step.icon}
                </div>
                {idx < steps.length - 1 && (
                  <div className={`w-24 h-1 mx-2 ${idx < currentStep - 1 ? 'bg-green-500' : 'bg-gray-600'}`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-white text-sm opacity-70">Step {currentStep} of {steps.length}</div>
        </div>

        {/* Step Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Academic Metrics</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">Unweighted GPA</label>
                  <input
                    type="number"
                    step="0.01"
                    max="4.0"
                    className="w-full bg-white/20 text-white rounded-lg p-3 border border-white/30 focus:border-blue-400 focus:outline-none"
                    placeholder="3.85"
                    value={profile.gpa || ''}
                    onChange={(e) => updateProfile({ gpa: parseFloat(e.target.value) })}
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Weighted GPA</label>
                  <input
                    type="number"
                    step="0.01"
                    className="w-full bg-white/20 text-white rounded-lg p-3 border border-white/30 focus:border-blue-400 focus:outline-none"
                    placeholder="4.25"
                    value={profile.weightedGpa || ''}
                    onChange={(e) => updateProfile({ weightedGpa: parseFloat(e.target.value) })}
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">AP Courses</label>
                  <input
                    type="number"
                    className="w-full bg-white/20 text-white rounded-lg p-3 border border-white/30 focus:border-blue-400 focus:outline-none"
                    placeholder="8"
                    value={profile.apCourses || ''}
                    onChange={(e) => updateProfile({ apCourses: parseInt(e.target.value) })}
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Class Rank</label>
                  <input
                    type="number"
                    className="w-full bg-white/20 text-white rounded-lg p-3 border border-white/30 focus:border-blue-400 focus:outline-none"
                    placeholder="25"
                    value={profile.classRank || ''}
                    onChange={(e) => updateProfile({ classRank: parseInt(e.target.value) })}
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Test Scores</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">SAT Score</label>
                  <input
                    type="number"
                    min="400"
                    max="1600"
                    className="w-full bg-white/20 text-white rounded-lg p-3 border border-white/30 focus:border-blue-400 focus:outline-none"
                    placeholder="1450"
                    value={profile.satScore || ''}
                    onChange={(e) => updateProfile({ satScore: parseInt(e.target.value) })}
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">ACT Score</label>
                  <input
                    type="number"
                    min="1"
                    max="36"
                    className="w-full bg-white/20 text-white rounded-lg p-3 border border-white/30 focus:border-blue-400 focus:outline-none"
                    placeholder="32"
                    value={profile.actScore || ''}
                    onChange={(e) => updateProfile({ actScore: parseInt(e.target.value) })}
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Extracurriculars</h2>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-white font-semibold">Leadership Activities</h3>
                    <span className="text-sm text-blue-400">Tier 1-2</span>
                  </div>
                  <textarea
                    className="w-full bg-white/20 text-white rounded-lg p-3 border border-white/30 focus:border-blue-400 focus:outline-none"
                    placeholder="Student Body President, National Honor Society President..."
                    rows={3}
                  />
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-white font-semibold">Clubs & Activities</h3>
                    <span className="text-sm text-green-400">Tier 3-4</span>
                  </div>
                  <textarea
                    className="w-full bg-white/20 text-white rounded-lg p-3 border border-white/30 focus:border-blue-400 focus:outline-none"
                    placeholder="Debate Team, Robotics Club, Varsity Tennis..."
                    rows={3}
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Demographics</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">Ethnicity</label>
                  <select className="w-full bg-white/20 text-white rounded-lg p-3 border border-white/30 focus:border-blue-400 focus:outline-none">
                    <option>Select ethnicity</option>
                    <option>Asian</option>
                    <option>Black/African American</option>
                    <option>Hispanic/Latino</option>
                    <option>White</option>
                    <option>Other</option>
                    <option>Prefer not to say</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white mb-2">State</label>
                  <select className="w-full bg-white/20 text-white rounded-lg p-3 border border-white/30 focus:border-blue-400 focus:outline-none">
                    <option>Select state</option>
                    <option>California</option>
                    <option>Texas</option>
                    <option>New York</option>
                    <option>Florida</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <label className="text-white">First-generation college student</label>
                </div>
                <div>
                  <label className="block text-white mb-2">Family Income</label>
                  <select className="w-full bg-white/20 text-white rounded-lg p-3 border border-white/30 focus:border-blue-400 focus:outline-none">
                    <option>Select income range</option>
                    <option>Under $30,000</option>
                    <option>$30,000 - $60,000</option>
                    <option>$60,000 - $100,000</option>
                    <option>$100,000 - $150,000</option>
                    <option>Over $150,000</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              disabled={currentStep === 1}
            >
              Previous
            </button>
            <button
              onClick={() => {
                if (currentStep === 4) {
                  setCurrentStep(5);
                } else {
                  setCurrentStep(currentStep + 1);
                }
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <span>{currentStep === 4 ? 'Complete' : 'Next'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingWizard;
