import React from 'react';
import { Plane as Plant, Droplets, Leaf, BarChart3, ArrowRight } from 'lucide-react';
import { SignInButton } from '@clerk/clerk-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import Chatbot from '../components/Chatbot';

const HomePage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Agriculture background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-black/70" />
        </div>

        <div className="relative h-full container mx-auto px-6 flex items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h1 
              variants={fadeInUp} 
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Optimize Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Crop Yield</span> With Smart Fertilization
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed"
            >
              Get AI-powered fertilizer recommendations tailored to your soil and crops
            </motion.p>

            <motion.div variants={fadeInUp} className="flex gap-4">
              <SignInButton forceRedirectUrl="/dashboard">
                <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center group">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </SignInButton>
              
              <a href="#features" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm flex items-center group">
                Learn More
                <Leaf className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="mt-12 flex gap-8"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Plant className="w-6 h-6 text-green-400" />
                </div>
                <p className="ml-3 text-white/80">50K+ Farmers</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <BarChart3 className="w-6 h-6 text-green-400" />
                </div>
                <p className="ml-3 text-white/80">95% Accuracy</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"
        />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Our Fertilizer Recommendation System?</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transform transition-transform duration-500 hover:rotate-12">
                <Plant className="text-green-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">Crop-Specific Analysis</h3>
              <p className="text-gray-600 text-center">Tailored recommendations based on the specific needs of your crop variety.</p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transform transition-transform duration-500 hover:rotate-12">
                <Droplets className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">Soil Nutrient Optimization</h3>
              <p className="text-gray-600 text-center">Precise N-P-K recommendations to balance your soil's nutrient profile.</p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transform transition-transform duration-500 hover:rotate-12">
                <Leaf className="text-yellow-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">Sustainable Farming</h3>
              <p className="text-gray-600 text-center">Reduce environmental impact with optimized fertilizer application.</p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transform transition-transform duration-500 hover:rotate-12">
                <BarChart3 className="text-purple-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">Yield Improvement</h3>
              <p className="text-gray-600 text-center">Increase productivity and profitability with data-driven recommendations.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-[16%] right-[16%] h-1 bg-green-200 transform -translate-y-1/2 z-0"></div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid md:grid-cols-3 gap-12 md:gap-8 relative z-10"
              >
                <motion.div 
                  variants={fadeInUp}
                  className="text-center relative"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative mb-8">
                    <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">1</div>
                    </div>
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                      viewport={{ once: true }}
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-8 h-8 bg-green-400 rounded-full opacity-30"
                    ></motion.div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Input Soil Data</h3>
                  <p className="text-gray-600 leading-relaxed">Enter your soil's N, P, K values and select your target crop.</p>
                </motion.div>
                
                <motion.div 
                  variants={fadeInUp}
                  className="text-center relative"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative mb-8">
                    <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">2</div>
                    </div>
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                      viewport={{ once: true }}
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-8 h-8 bg-green-400 rounded-full opacity-30"
                    ></motion.div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Get Recommendations</h3>
                  <p className="text-gray-600 leading-relaxed">Our system analyzes your data and provides optimal fertilizer recommendations.</p>
                </motion.div>
                
                <motion.div 
                  variants={fadeInUp}
                  className="text-center relative"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative mb-8">
                    <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">3</div>
                    </div>
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                      viewport={{ once: true }}
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-8 h-8 bg-green-400 rounded-full opacity-30"
                    ></motion.div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Apply & Thrive</h3>
                  <p className="text-gray-600 leading-relaxed">Implement the recommendations and watch your crops flourish.</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Chatbot />
      <Footer />
    </div>
  );
};

export default HomePage;