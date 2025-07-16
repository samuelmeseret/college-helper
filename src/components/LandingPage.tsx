import React from 'react';
import {
  GraduationCap,
  Calculator,
  ArrowRight,
  Brain,
  Target,
  BarChart3,
  Twitter,
  Linkedin,
  Github
} from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => (
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
            onClick={onStart}
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
            title: 'AI-Powered Analysis',
            description: 'Advanced ML models analyze your profile against thousands of admission data points.'
          },
          {
            icon: <Target className="w-8 h-8 text-green-400" />,
            title: 'Personalized Guidance',
            description: 'Get specific recommendations to improve your chances at target schools.'
          },
          {
            icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
            title: 'Scenario Planning',
            description: 'Explore how different improvements affect your admission probabilities.'
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
          { number: '500K+', label: 'Students Helped' },
          { number: '95%', label: 'Accuracy Rate' },
          { number: '1000+', label: 'Colleges Covered' },
          { number: '4.9/5', label: 'User Rating' }
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

export default LandingPage;
