import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RedirectToSignIn,SignIn,SignedIn,SignedOut } from '@clerk/clerk-react';

import HomePage from './pages/HomePage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import Schemes from './pages/Schemes.jsx';
import Fertilizer from './pages/Fertilizer.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schemes" element={<Schemes/>}/>
          <Route path="/fertilizer" element={<Fertilizer/>}/>

          <Route path="/dashboard" element={
            <>
              <SignedIn>
                <DashboardPage />
              </SignedIn>

              <SignedOut>
                <RedirectToSignIn/>
              </SignedOut>
            </>
          } />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;