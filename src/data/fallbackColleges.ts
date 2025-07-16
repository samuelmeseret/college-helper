import { College } from '../types';

export const fallbackColleges: College[] = [
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
