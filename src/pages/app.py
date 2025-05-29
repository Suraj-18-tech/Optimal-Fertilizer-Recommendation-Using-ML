from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai

app = Flask(__name__)
# Enable CORS for all routes under /api/*
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Configure Gemini API key (replace with your valid key)
genai.configure(api_key='AIzaSyBq38mGmYecTIE90RakaDBj6sFZeg1W-MY')
model = genai.GenerativeModel('gemini-2.0-flash')

def create_prompt(query):
    context = (
        '''You are FertiliBot, the smart farming assistant for the Optimal Fertilizer Recommendation System.
You help users with information about the website features:

Personalized Fertilizer Recommendations

AI-driven suggestions based on soil composition (NPK values, soil type, and water availability).
Tailored recommendations to optimize crop growth and yield.
Provides specific fertilizer types, application methods, and optimal dosage.
Soil Health Analysis & Optimization

Analyzes soil nutrient levels (NPK), pH, and moisture content.
Suggests appropriate soil amendments to improve fertility.
Recommends pH balancing techniques for better nutrient absorption.
Crop-Specific Guidance

Provides fertilization advice based on the specific crop being grown.
Suggests fertilizers for different growth stages (germination, flowering, fruiting).
Adapts recommendations based on seasonal and regional factors.
Water & Irrigation Management

Optimizes fertilizer use based on soil moisture levels and irrigation schedules.
Recommends best watering practices to enhance nutrient absorption.
Provides guidance on drought-resistant farming techniques.
Sustainable & Eco-Friendly Farming

Encourages the use of organic and eco-friendly fertilizers.
Minimizes environmental impact by optimizing fertilizer efficiency.
Suggests composting and natural alternatives to chemical fertilizers.
24/7 AI Support & Expert Assistance

Provides continuous assistance for soil, fertilizer, and crop-related queries.
Offers instant recommendations for improving soil fertility and crop health.
Supports farmers with real-time insights on best farming practices.
Your responses should be clear, precise, and directly aligned with helping users maximize crop yield and soil health.
Please provide accurate, helpful responses based on the available information and only answer what is asked.

Let me know if you need any refinements! 🌱🚜'''
    )
    return f"{context}{query}"

# GET endpoint: Retrieve 'message' from query string and generate a response
@app.route('/api/chat_get', methods=['GET'])
def chat_get():
    message = request.args.get('message', '')
    try:
        prompt = create_prompt(message)
        response = model.generate_content(prompt, generation_config={"max_output_tokens": 100})
        return jsonify({
            'response': response.text,
            'status': 'success'
        })
    except Exception as e:
        return jsonify({
            'response': 'Sorry, encountered an error. Please try again.',
            'status': 'error',
            'error': str(e)
        }), 500

# POST endpoint: Retrieve 'message' from JSON payload and generate a response
@app.route('/api/chat_post', methods=['POST'])
def chat_post():
    data = request.get_json()
    message = data.get('message', '')
    try:
        prompt = create_prompt(message)
        response = model.generate_content(prompt, generation_config={"max_output_tokens": 100})
        return jsonify({
            'response': response.text,
            'status': 'success'
        })
    except Exception as e:
        return jsonify({
            'response': 'Sorry, encountered an error. Please try again.',
            'status': 'error',
            'error': str(e)
        }), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)
