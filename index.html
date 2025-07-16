import React, { useState, useEffect } from 'react';
import { ChevronRight, BookOpen, Target, TrendingUp, Users, Award, Calculator, MessageCircle, Calendar, BarChart3, Brain, Star, ArrowRight, Check, User, GraduationCap, Trophy, Clock, DollarSign, MapPin, Phone, Mail, Github, Twitter, Linkedin } from 'lucide-react';

// Types
interface Profile {
  gpa: number;
  weightedGpa: number;
  satScore: number;
  actScore: number;
  apCourses: number;
  ibCourses: number;
  classRank: number;
  classSize: number;
  extracurriculars: ExtracurricularActivity[];
  demographics: {
    ethnicity: string;
    firstGen: boolean;
    income: string;
    state: string;
  };
}

interface ExtracurricularActivity {
  name: string;
  tier: number;
  yearsParticipated: number;
  leadership: boolean;
}

interface College {
  id: string;
  name: string;
  acceptanceRate: number;
  medianGpa: number;
  satRange: [number, number];
  actRange: [number, number];
}

interface PredictionResult {
  probability: number;
  category: 'Safety' | 'Target' | 'Reach' | 'High Reach';
  shap: { [key: string]: number };
  advice: string;
}

// Mock data
const mockColleges: College[] = [
  {
    id: 'UCB',
    name: 'UC Berkeley',
    acceptanceRate: 0.17,
    medianGpa: 3.89,
    satRange: [1330, 1530],
    actRange: [28, 35]
  },
  {
    id: 'UCLA',
    name: 'UCLA',
    acceptanceRate: 0.14,
    medianGpa: 3.92,
    satRange: [1280, 1530],
    actRange: [27, 34]
  },
  {
    id: 'USC',
    name: 'USC',
    acceptanceRate: 0.16,
    medianGpa: 3.79,
    satRange: [1360, 1530],
    actRange: [30, 34]
  }
];

// Main App Component
const CollegeAdmissionPredictor = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [profile, setProfile] = useState<Partial<Profile>>({});
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([]);

  // Mock prediction function
  const generatePrediction = (college: College, userProfile: Partial<Profile>): PredictionResult => {
    const baseProb = Math.random() * 0.6 + 0.1;
    const gpaBonus = (userProfile.gpa || 3.0) > college.medianGpa ? 0.15 : -0.1;
    const satBonus = (userProfile.satScore || 1200) > college.satRange[1] ? 0.1 : -0.05;
    
    const probability = Math.max(0.05, Math.min(0.95, baseProb + gpaBonus + satBonus));
    
    let category: PredictionResult['category'];
    if (probability >= 0.7) category = 'Safety';
    else if (probability >= 0.4) category = 'Target';
    else if (probability >= 0.15) category = 'Reach';
    else category = 'High Reach';

    const shap = {
      'GPA': gpaBonus * 100,
      'SAT Score': satBonus * 100,
      'Extracurriculars': (Math.random() - 0.5) * 30,
      'Course Rigor': (Math.random() - 0.5) * 20,
      'Demographics': (Math.random() - 0.5) * 15
    };

    const advice = `Your profile shows ${category.toLowerCase()} odds for ${college.name}. ${
      probability > 0.5 ? 'Strong academic foundation!' : 'Consider strengthening test scores or extracurriculars.'
    }`;

    return { probability, category, shap, advice };
  };

  // Landing Page Component
  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 bg-black/10 backdrop-blur-lg">
        <div className="flex items-center space-x-2">
          <GraduationCap className="w-8 h-8 text-white" />
          <span className="text-xl font-bold text-white">AdmitPredict</span>
        </div>
        <div className="flex space-x-6">
          <button className="text-white/80 hover:text-white transition-colors">About</button>
          <button className="text-white/80 hover:text-white transition-colors">Features</button>
          <button className="text-white/80 hover:text-white transition-colors">Pricing</button>
          <button className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Predict Your College 
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {' '}Admission Chances
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get data-driven insights, personalized guidance, and AI-powered advice to maximize your college admission success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentStep(1)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-2xl flex items-center justify-center space-x-2"
            >
              <Calculator className="w-5 h-5" />
              <span>Start Prediction</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Brain className="w-8 h-8 text-blue-400" />,
              title: "AI-Powered Analysis",
              description: "Advanced ML models analyze your profile against thousands of admission data points."
            },
            {
              icon: <Target className="w-8 h-8 text-green-400" />,
              title: "Personalized Guidance",
              description: "Get specific recommendations to improve your chances at target schools."
            },
            {
              icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
              title: "Scenario Planning",
              description: "Explore how different improvements affect your admission probabilities."
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-colors">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { number: "500K+", label: "Students Helped" },
            { number: "95%", label: "Accuracy Rate" },
            { number: "1000+", label: "Colleges Covered" },
            { number: "4.9/5", label: "User Rating" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-lg mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="w-6 h-6 text-white" />
                <span className="text-lg font-bold text-white">AdmitPredict</span>
              </div>
              <p className="text-white/70 text-sm">
                Empowering students with data-driven college admission insights.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-sm text-white/70">
                <div>Features</div>
                <div>Pricing</div>
                <div>FAQ</div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm text-white/70">
                <div>About</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <Twitter className="w-5 h-5 text-white/70 hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 text-white/70 hover:text-white cursor-pointer" />
                <Github className="w-5 h-5 text-white/70 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70 text-sm">
            © 2025 AdmitPredict. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );

  // Onboarding Wizard
  const OnboardingWizard = () => {
    const steps = [
      { title: "Academic Metrics", icon: <BookOpen className="w-5 h-5" /> },
      { title: "Test Scores", icon: <Target className="w-5 h-5" /> },
      { title: "Extracurriculars", icon: <Trophy className="w-5 h-5" /> },
      { title: "Demographics", icon: <User className="w-5 h-5" /> }
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
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    idx < currentStep - 1 ? 'bg-green-500' : 
                    idx === currentStep - 1 ? 'bg-blue-500' : 'bg-gray-600'
                  }`}>
                    {idx < currentStep - 1 ? <Check className="w-5 h-5 text-white" /> : step.icon}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className={`w-24 h-1 mx-2 ${
                      idx < currentStep - 1 ? 'bg-green-500' : 'bg-gray-600'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-white text-sm opacity-70">
              Step {currentStep} of {steps.length}
            </div>
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
                    setCurrentStep(5); // Go to college selection
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

  // College Selection
  const CollegeSelection = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Choose Your Target College</h1>
          <p className="text-white/70">Select a college to see your admission probability</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {mockColleges.map((college) => (
            <div
              key={college.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-colors cursor-pointer"
              onClick={() => {
                setSelectedCollege(college);
                setPrediction(generatePrediction(college, profile));
                setCurrentStep(6);
              }}
            >
              <h3 className="text-xl font-bold text-white mb-4">{college.name}</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/70">Acceptance Rate</span>
                  <span className="text-white">{(college.acceptanceRate * 100).toFixed(1)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Median GPA</span>
                  <span className="text-white">{college.medianGpa}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">SAT Range</span>
                  <span className="text-white">{college.satRange[0]}-{college.satRange[1]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">ACT Range</span>
                  <span className="text-white">{college.actRange[0]}-{college.actRange[1]}</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Predict Chances
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Results Dashboard
  const ResultsDashboard = () => {
    if (!prediction || !selectedCollege) return null;

    const getCategoryColor = (category: string) => {
      switch (category) {
        case 'Safety': return 'text-green-400';
        case 'Target': return 'text-blue-400';
        case 'Reach': return 'text-yellow-400';
        case 'High Reach': return 'text-red-400';
        default: return 'text-gray-400';
      }
    };

    const getProbabilityColor = (prob: number) => {
      if (prob >= 0.7) return 'from-green-500 to-green-600';
      if (prob >= 0.4) return 'from-blue-500 to-blue-600';
      if (prob >= 0.15) return 'from-yellow-500 to-yellow-600';
      return 'from-red-500 to-red-600';
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Your Admission Prediction for {selectedCollege.name}
            </h1>
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
                        background: `conic-gradient(from 0deg, rgba(59, 130, 246, 0.8) 0deg, rgba(59, 130, 246, 0.8) ${prediction.probability * 360}deg, rgba(55, 65, 81, 0.3) ${prediction.probability * 360}deg, rgba(55, 65, 81, 0.3) 360deg)`
                      }}
                    ></div>
                    <div className="absolute inset-4 rounded-full bg-slate-900 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {(prediction.probability * 100).toFixed(0)}%
                      </span>
                    </div>
                  </div>
                  <h2 className={`text-2xl font-bold mb-2 ${getCategoryColor(prediction.category)}`}>
                    {prediction.category}
                  </h2>
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
                            <div 
                              className={`h-full ${value > 0 ? 'bg-green-500' : 'bg-red-500'}`}
                              style={{ width: `${Math.abs(value)}%` }}
                            ></div>
                          </div>
                          <span className={`text-sm ${value > 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {value > 0 ? '+' : ''}{value.toFixed(1)}
                          </span>
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
                    <select 
                      className="w-full bg-white/20 text-white rounded-lg p-2 border border-white/30"
                      onChange={(e) => {
                        // Update extracurricular tier
                        const tier = parseInt(e.target.value);
                        // This would update the prediction in a real app
                      }}
                    >
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
                    <div className="text-white/70 text-sm">
                      👋 Hi! I'm your AI admission coach. Ask me anything about improving your chances!
                    </div>
                  ) : (
                    chatMessages.map((message, idx) => (
                      <div key={idx} className={`text-sm ${message.role === 'user' ? 'text-blue-400' : 'text-white/80'}`}>
                        <strong>{message.role === 'user' ? 'You' : 'AI Coach'}:</strong> {message.content}
                      </div>
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
                            setChatMessages(prev => [...prev, { 
                              role: 'assistant', 
                              content: "Based on your profile, I'd recommend focusing on improving your SAT score and adding more leadership activities. Would you like specific suggestions?" 
                            }]);
                          }, 1000);
                          input.value = '';
                        }
                      }
                    }}
                  />
                  <button className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Send
                  </button>
                </div>
                
                <div className="mt-4 space-y-2">
                  <div className="text-xs text-white/60">Quick questions:</div>
                  {[
                    "How can I improve my chances?",
                    "What are my weaknesses?",
                    "Similar schools to consider?",
                    "Scholarship opportunities?"
                  ].map((question, idx) => (
                    <button
                      key={idx}
                      className="block w-full text-left text-xs text-blue-400 hover:text-blue-300 transition-colors"
                      onClick={() => {
                        setChatMessages(prev => [...prev, { role: 'user', content: question }]);
                        setTimeout(() => {
                          setChatMessages(prev => [...prev, { 
                            role: 'assistant', 
                            content: `Great question! ${question === "How can I improve my chances?" ? "Focus on raising your test scores and adding meaningful extracurriculars." : "Let me analyze your profile and provide specific recommendations."}`
                          }]);
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
                <div className="space-y-3">
                  {mockColleges.filter(c => c.id !== selectedCollege?.id).slice(0, 2).map((college) => (
                    <div key={college.id} className="bg-white/10 rounded-lg p-3">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-white font-medium text-sm">{college.name}</h4>
                        <span className="text-xs text-blue-400">
                          {(generatePrediction(college, profile).probability * 100).toFixed(0)}%
                        </span>
                      </div>
                      <div className="text-xs text-white/70">
                        Accept Rate: {(college.acceptanceRate * 100).toFixed(1)}%
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-3 text-blue-400 text-sm hover:text-blue-300 transition-colors">
                  View All Recommendations
                </button>
              </div>

              {/* Action Items */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Next Steps</h3>
                <div className="space-y-3">
                  {[
                    { task: "Retake SAT", priority: "High", deadline: "Dec 2025" },
                    { task: "Write personal essay", priority: "Medium", deadline: "Nov 2025" },
                    { task: "Request rec letters", priority: "High", deadline: "Oct 2025" },
                    { task: "Apply for scholarships", priority: "Medium", deadline: "Jan 2026" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <input type="checkbox" className="w-4 h-4" />
                      <div className="flex-1">
                        <div className="text-white text-sm">{item.task}</div>
                        <div className="text-xs text-white/60">{item.deadline}</div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${
                        item.priority === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {item.priority}
                      </span>
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
                <button className="w-full mt-4 text-blue-400 text-sm hover:text-blue-300 transition-colors">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              onClick={() => setCurrentStep(5)}
            >
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

  // Main render logic
  if (currentStep === 0) {
    return <LandingPage />;
  } else if (currentStep >= 1 && currentStep <= 4) {
    return <OnboardingWizard />;
  } else if (currentStep === 5) {
    return <CollegeSelection />;
  } else if (currentStep === 6) {
    return <ResultsDashboard />;
  }

  return <LandingPage />;
};

export default CollegeAdmissionPredictor;
