export interface ExtracurricularActivity {
  name: string;
  tier: number;
  yearsParticipated: number;
  leadership: boolean;
}

export interface Profile {
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

export interface College {
  id: string;
  name: string;
  acceptanceRate: number;
  medianGpa: number;
  satRange: [number, number];
  actRange: [number, number];
}

export interface PredictionResult {
  probability: number;
  category: 'Safety' | 'Target' | 'Reach' | 'High Reach';
  shap: { [key: string]: number };
  advice: string;
}
