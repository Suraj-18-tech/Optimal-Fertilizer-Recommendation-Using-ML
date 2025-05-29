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
    'Bangalore Rural',
    'Chitradurga',
    'Davangere',
    'Hassan',
    'Mandya',
    'Mysore',
    'Tumkur'
  ];
  
  export const SOIL_COLOR_OPTIONS = [
    'Black',
    'Red',
    'Sandy',
    'Loamy',
    'Clayey'
  ];
  
  export const CROP_OPTIONS = [
    'Rice',
    'Wheat',
    'Maize',
    'Cotton',
    'Sugarcane',
    'Tobacco',
    'Millets',
    'Pulses',
    'Ground Nuts',
    'Sunflower'
  ];