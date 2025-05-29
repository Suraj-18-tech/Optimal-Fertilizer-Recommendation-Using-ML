// Type definitions (these will be ignored in JavaScript but help with documentation)
/**
 * @typedef {Object} FertilizerPredictionInput
 * @property {string} district
 * @property {string} soil_color
 * @property {number} nitrogen
 * @property {number} phosphorus
 * @property {number} potassium
 * @property {number} ph
 * @property {number} rainfall
 * @property {number} temperature
 * @property {string} crop
 */

/**
 * @typedef {Object} PredictionResponse
 * @property {string} fertilizer
 */

// Constants
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
  
  // Default export for all constants
  export default {
    DISTRICT_OPTIONS,
    SOIL_COLOR_OPTIONS,
    CROP_OPTIONS
  };