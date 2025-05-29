import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App.jsx';
import './index.css';

// Retrieve the Clerk publishable key from environment variables
const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Throw an error if the publishable key is missing
if (!publishableKey) {
  throw new Error("Missing Clerk Publishable Key");
}

// Render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={publishableKey}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>
);