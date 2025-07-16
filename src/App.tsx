import React, { useEffect, useState } from 'react';
import LandingPage from './components/LandingPage';
import OnboardingWizard from './components/OnboardingWizard';
import CollegeSelection from './components/CollegeSelection';
import ResultsDashboard from './components/ResultsDashboard';
import { Profile, College, PredictionResult } from './types';
import { fallbackColleges } from './data/fallbackColleges';
import { fetchCollegeData } from './api/gemini';

const CollegeAdmissionPredictor: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [profile, setProfile] = useState<Partial<Profile>>({});
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([]);
  const [colleges, setColleges] = useState<College[]>(fallbackColleges);

  useEffect(() => {
    async function load() {
      const results: College[] = [];
      for (const college of fallbackColleges) {
        const data = await fetchCollegeData(college.name);
        results.push(data ? { ...college, ...data } : college);
      }
      setColleges(results);
    }
    load();
  }, []);

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
      GPA: gpaBonus * 100,
      'SAT Score': satBonus * 100,
      Extracurriculars: (Math.random() - 0.5) * 30,
      'Course Rigor': (Math.random() - 0.5) * 20,
      Demographics: (Math.random() - 0.5) * 15
    };

    const advice = `Your profile shows ${category.toLowerCase()} odds for ${college.name}. ${
      probability > 0.5 ? 'Strong academic foundation!' : 'Consider strengthening test scores or extracurriculars.'
    }`;

    return { probability, category, shap, advice };
  };

  if (currentStep === 0) {
    return <LandingPage onStart={() => setCurrentStep(1)} />;
  }

  if (currentStep >= 1 && currentStep <= 4) {
    return (
      <OnboardingWizard
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        profile={profile}
        setProfile={setProfile}
      />
    );
  }

  if (currentStep === 5) {
    return (
      <CollegeSelection
        colleges={colleges}
        profile={profile}
        setCurrentStep={setCurrentStep}
        setSelectedCollege={setSelectedCollege}
        setPrediction={setPrediction}
        generatePrediction={generatePrediction}
      />
    );
  }

  if (currentStep === 6) {
    return (
      <ResultsDashboard
        profile={profile}
        selectedCollege={selectedCollege}
        prediction={prediction}
        setCurrentStep={setCurrentStep}
        setPrediction={setPrediction}
        generatePrediction={generatePrediction}
        setProfile={setProfile}
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    );
  }

  return <LandingPage onStart={() => setCurrentStep(1)} />;
};

export default CollegeAdmissionPredictor;
