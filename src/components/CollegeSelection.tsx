import React from 'react';
import { College, Profile, PredictionResult } from '../types';

interface Props {
  colleges: College[];
  profile: Partial<Profile>;
  setCurrentStep: (step: number) => void;
  setSelectedCollege: (c: College) => void;
  setPrediction: (p: PredictionResult) => void;
  generatePrediction: (college: College, profile: Partial<Profile>) => PredictionResult;
}

const CollegeSelection: React.FC<Props> = ({ colleges, profile, setCurrentStep, setSelectedCollege, setPrediction, generatePrediction }) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 p-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Choose Your Target College</h1>
        <p className="text-white/70">Select a college to see your admission probability</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {colleges.map((college) => (
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

export default CollegeSelection;
