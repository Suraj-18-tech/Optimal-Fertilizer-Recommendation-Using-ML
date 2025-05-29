from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import pandas as pd
import numpy as np

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the saved model and preprocessors
try:
    model = joblib.load("fertilizer_model.pkl")
    scaler = joblib.load("scaler.pkl")
    label_encoders = joblib.load("label_encoders.pkl")
except Exception as e:
    print(f"Error loading models: {e}")
    raise

class PredictionInput(BaseModel):
    district: str
    soil_color: str
    nitrogen: float
    phosphorus: float
    potassium: float
    ph: float
    rainfall: float
    temperature: float
    crop: str

@app.post("/predict")
async def predict_fertilizer(input_data: PredictionInput):
    try:
        # Transform categorical inputs
        district_enc = label_encoders['District_Name'].transform([input_data.district])[0]
        soil_enc = label_encoders['Soil_color'].transform([input_data.soil_color])[0]
        crop_enc = label_encoders['Crop'].transform([input_data.crop])[0]

        # Create feature array
        features = ['District_Name', 'Soil_color', 'Nitrogen', 'Phosphorus', 'Potassium', 'pH', 'Rainfall', 'Temperature', 'Crop']
        numeric_cols = ['Nitrogen', 'Phosphorus', 'Potassium', 'pH', 'Rainfall', 'Temperature']
        
        # Create input DataFrame
        input_df = pd.DataFrame([[
            district_enc, soil_enc,
            input_data.nitrogen, input_data.phosphorus, input_data.potassium,
            input_data.ph, input_data.rainfall, input_data.temperature,
            crop_enc
        ]], columns=features)

        # Scale numeric features
        input_df[numeric_cols] = scaler.transform(input_df[numeric_cols])

        # Make prediction
        pred_encoded = model.predict(input_df)[0]
        fertilizer = label_encoders['Fertilizer'].inverse_transform([pred_encoded])[0]

        return {"fertilizer": fertilizer}

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.get("/")
async def root():
    return {"message": "Fertilizer Prediction API is running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)