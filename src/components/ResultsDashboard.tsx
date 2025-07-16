import React from 'react';
import {
  MessageCircle,
  Target,
  Calendar,
  Users
} from 'lucide-react';
import { College, PredictionResult, Profile } from '../types';

interface Props {
  profile: Partial<Profile>;
  selectedCollege: College | null;
  prediction: PredictionResult | null;
  setCurrentStep: (step: number) => void;
  setPrediction: (p: PredictionResult) => void;
  generatePrediction: (college: College, profile: Partial<Profile>) => PredictionResult;
  setProfile: React.Dispatch<React.SetStateAction<Partial<Profile>>>;
  chatMessages: Array<{ role: 'user' | 'assistant'; content: string }>;
  setChatMessages: React.Dispatch<React.SetStateAction<Array<{ role: 'user' | 'assistant'; content: string }>>>;
}

const ResultsDashboard: React.FC<Props> = ({
  profile,
  selectedCollege,
  prediction,
  setCurrentStep,
  setPrediction,
  generatePrediction,
  setProfile,
  chatMessages,
  setChatMessages
}) => {
  if (!prediction || !selectedCollege) return null;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Safety':
        return 'text-green-400';
      case 'Target':
        return 'text-blue-400';
      case 'Reach':
        return 'text-yellow-400';
      case 'High Reach':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getProbabilityColor = (prob: number) => {
    if (prob >= 0.7) return 'from-green-500 to-green-600';
    if (prob >= 0.4) return 'from-blue-500 to-blue-600';
    if (prob >= 0.15) return 'from-yellow-500 to-yellow-600';
    return 'from-red-500 to-red-600';
  };

  const updateProfile = (updates: Partial<Profile>) => {
    setProfile(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Your Admission Prediction for {selectedCollege.name}</h1>
          <p className="text-white/70">Based on your academic profile and historical data</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Prediction Card */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-6">
              <div className="text-center mb-6">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full bg-gray-700"></div>
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${getProbabilityColor(prediction.probability)}`}
                    style={{
                      background: `conic-gradient(from 0deg, rgba(59, 130, 246, 0.8) 0deg, rgba(59, 130, 246, 0.8) ${
                        prediction.probability * 360
                      }deg, rgba(55, 65, 81, 0.3) ${prediction.probability * 360}deg, rgba(55, 65, 81, 0.3) 360deg)`
                    }}
                  ></div>
                  <div className="absolute inset-4 rounded-full bg-slate-900 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{(prediction.probability * 100).toFixed(0)}%</span>
                  </div>
                </div>
                <h2 className={`text-2xl font-bold mb-2 ${getCategoryColor(prediction.category)}`}>{prediction.category}</h2>
                <p className="text-white/70">Admission Probability</p>
              </div>

              <div className="bg-white/10 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">AI Analysis</h3>
                <p className="text-white/80">{prediction.advice}</p>
              </div>

              {/* SHAP Values */}
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-4">What's Driving Your Score</h3>
                <div className="space-y-3">
                  {Object.entries(prediction.shap).map(([factor, value]) => (
                    <div key={factor} className="flex items-center justify-between">
                      <span className="text-white/80">{factor}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className={`h-full ${value > 0 ? 'bg-green-500' : 'bg-red-500'}`} style={{ width: `${Math.abs(value)}%` }}></div>
                        </div>
                        <span className={`text-sm ${value > 0 ? 'text-green-400' : 'text-red-400'}`}>{value > 0 ? '+' : ''}{value.toFixed(1)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Scenario Builder */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Scenario Builder</h3>
              <p className="text-white/70 mb-4">See how changes to your profile affect your admission chances</p>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-2">GPA: {profile.gpa || 3.5}</label>
                  <input
                    type="range"
                    min="2.0"
                    max="4.0"
                    step="0.1"
                    value={profile.gpa || 3.5}
                    onChange={(e) => updateProfile({ gpa: parseFloat(e.target.value) })}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">SAT: {profile.satScore || 1400}</label>
                  <input
                    type="range"
                    min="400"
                    max="1600"
                    step="10"
                    value={profile.satScore || 1400}
                    onChange={(e) => updateProfile({ satScore: parseInt(e.target.value) })}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">AP Courses: {profile.apCourses || 5}</label>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    step="1"
                    value={profile.apCourses || 5}
                    onChange={(e) => updateProfile({ apCourses: parseInt(e.target.value) })}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Extracurriculars</label>
                  <select className="w-full bg-white/20 text-white rounded-lg p-2 border border-white/30" onChange={(e) => {}}>
                    <option value="1">Tier 1 (National Level)</option>
                    <option value="2">Tier 2 (State Level)</option>
                    <option value="3">Tier 3 (Regional Level)</option>
                    <option value="4">Tier 4 (School Level)</option>
                  </select>
                </div>
              </div>

              <button
                className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => {
                  if (selectedCollege) {
                    setPrediction(generatePrediction(selectedCollege, profile));
                  }
                }}
              >
                Update Prediction
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Chat Interface */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">AI Coach</h3>
                <MessageCircle className="w-5 h-5 text-blue-400" />
              </div>

              <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
                {chatMessages.length === 0 ? (
                  <div className="text-white/70 text-sm">👋 Hi! I'm your AI admission coach. Ask me anything about improving your chances!</div>
                ) : (
                  chatMessages.map((message, idx) => (
                    <div key={idx} className={`text-sm ${message.role === 'user' ? 'text-blue-400' : 'text-white/80'}`}> <strong>{message.role === 'user' ? 'You' : 'AI Coach'}:</strong> {message.content}</div>
                  ))
                )}
              </div>

              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Ask about your chances..."
                  className="flex-1 bg-white/20 text-white rounded-lg p-2 text-sm border border-white/30 focus:border-blue-400 focus:outline-none"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      const input = e.target as HTMLInputElement;
                      const message = input.value.trim();
                      if (message) {
                        setChatMessages(prev => [...prev, { role: 'user', content: message }]);
                        setTimeout(() => {
                          setChatMessages(prev => [...prev, { role: 'assistant', content: "Based on your profile, I'd recommend focusing on improving your SAT score and adding more leadership activities. Would you like specific suggestions?" }]);
                        }, 1000);
                        input.value = '';
                      }
                    }
                  }}
                />
                <button className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors">Send</button>
              </div>

              <div className="mt-4 space-y-2">
                <div className="text-xs text-white/60">Quick questions:</div>
                {[
                  'How can I improve my chances?',
                  'What are my weaknesses?',
                  'Similar schools to consider?',
                  'Scholarship opportunities?'
                ].map((question, idx) => (
                  <button
                    key={idx}
                    className="block w-full text-left text-xs text-blue-400 hover:text-blue-300 transition-colors"
                    onClick={() => {
                      setChatMessages(prev => [...prev, { role: 'user', content: question }]);
                      setTimeout(() => {
                        setChatMessages(prev => [
                          ...prev,
                          {
                            role: 'assistant',
                            content: `Great question! ${
                              question === 'How can I improve my chances?'
                                ? 'Focus on raising your test scores and adding meaningful extracurriculars.'
                                : 'Let me analyze your profile and provide specific recommendations.'
                            }`
                          }
                        ]);
                      }, 1000);
                    }}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* College Comparison */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Similar Schools</h3>
              <div className="space-y-3"></div>
              <button className="w-full mt-3 text-blue-400 text-sm hover:text-blue-300 transition-colors">View All Recommendations</button>
            </div>

            {/* Action Items */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Next Steps</h3>
              <div className="space-y-3">
                {[
                  { task: 'Retake SAT', priority: 'High', deadline: 'Dec 2025' },
                  { task: 'Write personal essay', priority: 'Medium', deadline: 'Nov 2025' },
                  { task: 'Request rec letters', priority: 'High', deadline: 'Oct 2025' },
                  { task: 'Apply for scholarships', priority: 'Medium', deadline: 'Jan 2026' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <input type="checkbox" className="w-4 h-4" />
                    <div className="flex-1">
                      <div className="text-white text-sm">{item.task}</div>
                      <div className="text-xs text-white/60">{item.deadline}</div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${item.priority === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{item.priority}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Your Profile</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/70">GPA</span>
                  <span className="text-white">{profile.gpa || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">SAT</span>
                  <span className="text-white">{profile.satScore || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">AP Courses</span>
                  <span className="text-white">{profile.apCourses || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Class Rank</span>
                  <span className="text-white">{profile.classRank || 'N/A'}</span>
                </div>
              </div>
              <button className="w-full mt-4 text-blue-400 text-sm hover:text-blue-300 transition-colors">Edit Profile</button>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2" onClick={() => setCurrentStep(5)}>
            <Target className="w-5 h-5" />
            <span>Try Another College</span>
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>Create Action Plan</span>
          </button>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2">
            <Users className="w-5 h-5" />
            <span>Share Results</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsDashboard;
