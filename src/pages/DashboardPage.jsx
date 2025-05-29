import React, { useState } from 'react';
import { Plane as Plant, Droplets, ThermometerSun, Leaf, Info } from 'lucide-react';
import axios from 'axios';
import Navbar2 from './Navbar2';
import { DISTRICT_OPTIONS, SOIL_COLOR_OPTIONS, CROP_OPTIONS } from '../constants';
import Chatbot from '../components/Chatbot.jsx';


const INITIAL_FORM_STATE = {
  district: DISTRICT_OPTIONS[0],
  soil_color: SOIL_COLOR_OPTIONS[0],
  nitrogen: 0,
  phosphorus: 0,
  potassium: 0,
  ph: 7,
  rainfall: 0,
  temperature: 25,
  crop: CROP_OPTIONS[0]
};

const FERTILIZER_INFO = {
  'Urea': {
    description: `Urea is a high-nitrogen fertilizer that's perfect for promoting leafy growth. It contains 46% nitrogen and is highly water-soluble, making it quickly available to plants.`,
    image: '/images/Bharat urea.png'
  },
  'DAP': {
    description: `Di-ammonium Phosphate (DAP) is a popular fertilizer that provides both nitrogen and phosphorus. It's excellent for root development and overall plant growth.`,
    image: '/images/DAP.png'
  },
  'NPK': {
    description: `NPK fertilizers provide a balanced mix of Nitrogen, Phosphorus, and Potassium, essential for overall plant health, flowering, and fruit development.`,
    image: '/images/Bhartiya NPK.png'
  },
  '19:19:19 NPK': {
    description: `A balanced NPK fertilizer (19-19-19) suitable for general crop nutrition throughout the growth cycle.`,
    image: '/images/19 19 19 NPK.png'
  },
  'Magnesium Sulphate': {
    description: `Provides essential magnesium and sulfur to plants, crucial for chlorophyll production and enzyme activation.`,
    image: '/images/Magnesium Sulphate.png'
  },
  '13:32:26 NPK': {
    description: `High-phosphorus NPK blend (13-32-26) ideal for flowering plants and root development.`,
    image: '/images/12-32-16 npk.png'
  },
  '12:32:16 NPK': {
    description: `Phosphorus-rich fertilizer (12-32-16) perfect for transplanting and early growth stages.`,
    image: '/images/12-32-16 npk.png'
  },
  '10:26:26 NPK': {
    description: `High phosphorus and potassium blend (10-26-26) for fruiting and flowering plants.`,
    image: '/images/10-26-26 NPK.png'
  },
  'MOP': {
    description: `Muriate of Potash (0-0-60), a potassium-rich fertilizer for fruit quality and stress resistance.`,
    image: '/images/MOP1.png'
  },
  'SSP': {
    description: `Single Super Phosphate (0-16-0), a phosphorus fertilizer containing calcium and sulfur.`,
    image: '/images/ssp.png'
  },
  '50:26:26 NPK': {
    description: `High-nitrogen NPK blend (50-26-26) for vigorous vegetative growth in heavy feeder crops.`,
    image: '/images/10-26-26 NPK.png'
  },
  'Ferrous Sulphate': {
    description: `Ferrous Sulphate (19-21% Fe) for preventing iron deficiency and promoting healthy green foliage.`,
    image: '/images/Ferrous.png'
  },
  'default': {
    description: `A specialized fertilizer blend designed to meet your specific crop needs based on soil conditions and environmental factors.`,
    image: '/images/default.jpg'
  }
};

const DashboardPage = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.post(
        'http://localhost:8000/predict',
        formData
      );
      setPrediction(response.data.fertilizer);
    } catch (err) {
      setError('Failed to get prediction. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: ['nitrogen', 'phosphorus', 'potassium', 'ph', 'rainfall', 'temperature'].includes(name)
        ? parseFloat(value)
        : value
    }));
  };

  const getFertilizerInfo = (fertilizerName) => {
    return FERTILIZER_INFO[fertilizerName] || FERTILIZER_INFO.default;
  };

  return (
    
    <div className="bg-gray-50">
      <Navbar2 />
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Plant className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Fertilizer Recommendation System
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
              Get personalized fertilizer suggestions for your crops in western Maharashtra
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="bg-white overflow-hidden shadow-xl rounded-2xl">
              <div className="p-6 sm:p-8">
                <div className="flex items-center mb-6">
                  <div className="p-2 rounded-lg bg-green-100 mr-4">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Crop Details
                  </h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* District Selection */}
                    <div>
                      <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
                        District
                      </label>
                      <select
                        id="district"
                        name="district"
                        value={formData.district}
                        onChange={handleInputChange}
                        className="block w-full px-4 py-2 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        {DISTRICT_OPTIONS.map(district => (
                          <option key={district} value={district}>{district}</option>
                        ))}
                      </select>
                    </div>

                    {/* Soil Color Selection */}
                    <div>
                      <label htmlFor="soil_color" className="block text-sm font-medium text-gray-700 mb-1">
                        Soil Color
                      </label>
                      <select
                        id="soil_color"
                        name="soil_color"
                        value={formData.soil_color}
                        onChange={handleInputChange}
                        className="block w-full px-4 py-2 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        {SOIL_COLOR_OPTIONS.map(color => (
                          <option key={color} value={color}>{color}</option>
                        ))}
                      </select>
                    </div>

                    {/* Nitrogen Input */}
                    <div>
                      <label htmlFor="nitrogen" className="block text-sm font-medium text-gray-700 mb-1">
                        Nitrogen (kg/ha)
                      </label>
                      <input
                        type="number"
                        name="nitrogen"
                        id="nitrogen"
                        value={formData.nitrogen}
                        onChange={handleInputChange}
                        min="0"
                        step="0.1"
                        className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>

                    {/* Phosphorus Input */}
                    <div>
                      <label htmlFor="phosphorus" className="block text-sm font-medium text-gray-700 mb-1">
                        Phosphorus (kg/ha)
                      </label>
                      <input
                        type="number"
                        name="phosphorus"
                        id="phosphorus"
                        value={formData.phosphorus}
                        onChange={handleInputChange}
                        min="0"
                        step="0.1"
                        className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>

                    {/* Potassium Input */}
                    <div>
                      <label htmlFor="potassium" className="block text-sm font-medium text-gray-700 mb-1">
                        Potassium (kg/ha)
                      </label>
                      <input
                        type="number"
                        name="potassium"
                        id="potassium"
                        value={formData.potassium}
                        onChange={handleInputChange}
                        min="0"
                        step="0.1"
                        className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>

                    {/* pH Input */}
                    <div>
                      <label htmlFor="ph" className="block text-sm font-medium text-gray-700 mb-1">
                        pH Level
                      </label>
                      <input
                        type="number"
                        name="ph"
                        id="ph"
                        value={formData.ph}
                        onChange={handleInputChange}
                        min="0"
                        max="14"
                        step="0.1"
                        className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>

                    {/* Rainfall Input */}
                    <div>
                      <label htmlFor="rainfall" className="block text-sm font-medium text-gray-700 mb-1">
                        Rainfall (mm)
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          name="rainfall"
                          id="rainfall"
                          value={formData.rainfall}
                          onChange={handleInputChange}
                          min="0"
                          className="block w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <Droplets className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    {/* Temperature Input */}
                    <div>
                      <label htmlFor="temperature" className="block text-sm font-medium text-gray-700 mb-1">
                        Temperature (°C)
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          name="temperature"
                          id="temperature"
                          value={formData.temperature}
                          onChange={handleInputChange}
                          min="-20"
                          max="50"
                          className="block w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <ThermometerSun className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    {/* Crop Selection */}
                    <div>
                      <label htmlFor="crop" className="block text-sm font-medium text-gray-700 mb-1">
                        Crop
                      </label>
                      <select
                        id="crop"
                        name="crop"
                        value={formData.crop}
                        onChange={handleInputChange}
                        className="block w-full px-4 py-2 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        {CROP_OPTIONS.map(crop => (
                          <option key={crop} value={crop}>{crop}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : 'Get Recommendation'}
                    </button>
                  </div>
                </form>

                {error && (
                  <div className="mt-6 rounded-lg bg-red-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">Error</h3>
                        <div className="mt-2 text-sm text-red-700">
                          <p>{error}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-white overflow-hidden shadow-xl rounded-2xl">
              <div className="p-6 sm:p-8">
                <div className="flex items-center mb-6">
                  <div className="p-2 rounded-lg bg-blue-100 mr-4">
                    <Info className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Recommendation
                  </h2>
                </div>
                
                {prediction ? (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
                      <h3 className="text-lg font-medium text-gray-700">Recommended Fertilizer</h3>
                      <p className="mt-1 text-3xl font-extrabold text-green-800">{prediction}</p>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-md">
                        <img
                          src={getFertilizerInfo(prediction).image}
                          alt={prediction}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <div className="prose prose-green max-w-none">
                        <p className="text-gray-600 leading-relaxed">
                          {getFertilizerInfo(prediction).description}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="mx-auto h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <Plant className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">No recommendation yet</h3>
                    <p className="mt-2 text-gray-500 max-w-md mx-auto">
                      Fill in the crop details and submit the form to receive a personalized fertilizer recommendation.
                    </p>
                    <div className="mt-6">
                      <div className="animate-pulse flex space-x-4">
                        <div className="flex-1 space-y-4 py-1">
                          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
                          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Chatbot/>
    </div>
  );
};

export default DashboardPage;