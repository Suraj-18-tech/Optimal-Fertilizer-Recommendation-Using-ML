import React from 'react';
import Navbar2 from './Navbar2';
import Chatbot from '../components/Chatbot.jsx';


const schemesData = [
  {
    title: "PM-KISAN Scheme",
    description: "Direct income support of ₹6,000 per year to eligible farmer families, paid in three equal installments.",
    benefits: ["₹2,000 every four months", "Direct bank transfer", "No intermediaries"],
    link: "https://pmkisan.gov.in/RegistrationFormNew.aspx",
    image: "https://images.unsplash.com/photo-1530267981375-f0de937f5f13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE5hdGlvbmFsJTIwQ3JvcCUyMEluc3VyYW5jZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "National Crop Insurance",
    description: "Comprehensive risk coverage for pre-sowing to post-harvest losses due to natural calamities.",
    benefits: ["50% premium subsidy", "All food crops covered", "Quick claim settlement"],
    link: "https://pmfby.gov.in/",
    image: "https://plus.unsplash.com/premium_photo-1661957611606-b0ba1861b4ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fE5hdGlvbmFsJTIwQ3JvcCUyMEluc3VyYW5jZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Solar Pump Subsidy",
    description: "Up to 90% subsidy on solar-powered irrigation systems to reduce dependency on diesel pumps.",
    benefits: ["90% cost covered", "Zero operating cost", "25 years warranty"],
    link: "https://offgridmtsup.mahadiscom.in/AGSolarPumpMTS/PMKusumCons?uiActionName=getA1Form",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "PM Fasal Bima Yojna",
    description: "Affordable crop insurance protecting farmers against natural disasters like floods and droughts, from sowing to harvest.",
    benefits: ["Covers natural risks", "Low cost premiums", "Quick Claim settlement"],
    link: "https://pmfby.gov.in/",
    image: "https://images.ctfassets.net/uwf0n1j71a7j/7BOkRtAHBD7LVHEbI36jyz/079537817625b8f9647ee7da26e2b6a4/pmfby-pradhan-mantri-fasal-bima-yojana.png?q=75&w=1920"
  },
  {
    title: "Modified Interest Subvention Scheme",
    description: "Offers Rs. 3 lakh loans at 7% interest (4% with timely repayment), covering post-harvest loans for KCC holders during natural disasters.",
    benefits: ["Low interest loans", "Available for KCC holders", "Supports crop and livestock activities"],
    link: "#",
    image: "https://img-cdn.krishijagran.com/99973/farmer-1.jpg"
  },
  {
    title: "Formation & Promotion of 10,000 FPOs",
    description: "Aims to form 10,000 FPOs with financial support for 5 years.",
    benefits: ["Empowers farmers", "Financial support for 5 years", "Professional Guidance"],
    link: "#",
    image: "https://kisanvedika.bighaat.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-19-at-4.14.33-PM.jpeg"
  },
  {
    title: "Agriculture Infrastructure Fund",
    description: "Offers Rs. 1 lakh crore in low-interest loans to develop storage, processing, and logistics infrastructure, reducing crop wastage and boosting farmer income.",
    benefits: ["Low interest loans", "Reduces Crop wastage", "Creates Rural jobs"],
    link: "https://agriinfra.dac.gov.in/",
    image: "https://kj1bcdn.b-cdn.net/media/97678/agriculture-infrastructure-fund-aif.jpg"
  },
  {
    title: "Pradhanmantri Krishi Sinchayee Yojana",
    description: "Supports irrigation systems to improve water efficiency and ensure water for all fields, boosting crop yields.",
    benefits: ["Improves Irrigation", "Increases Farmer income", "Boosts crop yields"],
    link: "#",
    image: "https://images.ctfassets.net/uwf0n1j71a7j/4hlk767sblKaj6Uni2b5Ka/9051bb732ab56964d207d9aeaea934bf/Pradhan-Mantri-Krishi-Sinchayee-Yojana-PMKSY.png?q=75&w=3840"
  },
  {
    title: "Soil Health Card",
    description: "Provides soil reports and fertilizer recommendations to improve soil health and crop yield.",
    benefits: ["Fertilizer recommendations", "Provides Soil health information", "Improves crop yield"],
    link: "https://www.soilhealth.dac.gov.in/home",
    image: "https://tse1.mm.bing.net/th?id=OIP.LZeZ5a0psSnGz6qAGkPOewHaEK&pid=Api"
  },
  {
    title: "Zero-Interest Farm Loans",
    description: "Interest-free loans up to ₹3 lakhs for small and marginal farmers with perfect repayment history.",
    benefits: ["0% interest rate", "Flexible repayment", "No collateral needed"],
    link: "#",
    image: "https://images.unsplash.com/photo-1533580909002-a2f298d005eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Schemes = () => {
  return (
    <>
      <Navbar2 />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Government Agricultural Schemes</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {schemesData.map((scheme, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              {scheme.image && (
                <img src={scheme.image} alt={scheme.title} className="w-full h-40 object-cover rounded-md mb-4" />
              )}
              <h1 className="text-2xl text-green-900 font-semibold p-4">{scheme.title}</h1>
              <p className="text-gray-700 mb-2">{scheme.description}</p>
              <div className="bg-green-100 p-3 rounded-md mb-4">
                <h3 className="text-green-900 font-semibold mb-2">Features:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {scheme.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <a
                href={scheme.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition mt-auto"              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
        <Chatbot/>
      </div>
    </>
  );
}

export default Schemes;
