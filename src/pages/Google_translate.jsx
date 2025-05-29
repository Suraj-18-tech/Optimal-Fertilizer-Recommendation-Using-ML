import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    // Define init function before appending the script
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,mr,de,hi,zh', // Fixed Marathi (mr)
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          'google_translate_element'
        );
      }
    };

    // Check if the script is already added
    if (!document.querySelector('script[src*="translate_a/element.js"]')) {
      const addScript = document.createElement('script');
      addScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      addScript.async = true;
      document.body.appendChild(addScript);
    } else {
      // If script is already present, manually trigger init (helps in React strict mode)
      window.googleTranslateElementInit();
    }

    return () => {
      // Reset the translation instead of removing the script (Google injects multiple elements)
      const translateContainer = document.getElementById('google_translate_element');
      if (translateContainer) translateContainer.innerHTML = '';
    };
  }, []);

  return <div id="google_translate_element" className="p-2 h-4 bg-green-700 rounded-md shadow-md inline-block"></div>;
};

export default GoogleTranslate;
