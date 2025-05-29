export interface FertilizerPredictionInput {
  district: string;
  soil_color: string;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  ph: number;
  rainfall: number;
  temperature: number;
  crop: string;
}

export interface PredictionResponse {
  fertilizer: string;
}

export const DISTRICT_OPTIONS = [
  'Kolhapur',
  'Pune',
  'Sangli',
  'Satara',
  'Solapur'
];

export const SOIL_COLOR_OPTIONS = [
  'Black',
  'Dark Brown',
  'Light Brown',
  'Medium Brown',
  'Red',
  'Reddish Brown'
];

export const CROP_OPTIONS = [
  'Cotton',
  'Ginger',
  'Gram',
  'Grapes',
  'Groundnut',
  'Jowar',
  'Maize',
  'Masoor',
  'Moong',
  'Rice',
  'Soybean',
  'Sugarcane',
  'Tur',
  'Turmeric',
  'Urad',
  'Wheat'
];