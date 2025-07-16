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
