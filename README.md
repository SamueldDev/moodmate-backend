# 🧠 MoodMate API

MoodMate is a simple backend API that allows users to log their current mood and receive personalized suggestions (quotes, music, activities) based on how they feel.

## 🔧 Tech Stack

- Node.js + Express.js
- PostgreSQL + Sequelize ORM
- JWT Authentication
- Deployed on Railway
- Swagger (OpenAPI) Docs
- Postman Collection Support

## 🚀 Live Demo

📡 Base URL: [`https://moodmate-production.up.railway.app/`](https://moodmate-production.up.railway.app/)  
📘 Swagger Docs: [`/api-docs`](https://moodmate-production.up.railway.app/api-docs)  
📬 Postman Collection: - [View on GitHub](./MoodMate.postman_collection.json)

## 📦 Getting Started

### ✅ Prerequisites

- Node.js (v18+)
- PostgreSQL (local or cloud like Railway)
- Railway CLI *(optional)*

### 🛠 Installation

```bash
git clone https://github.com/SamueldDev/moodmate.git
cd moodmate
npm install


🗂 Environment Setup

Create a .env file

PORT=7000
DATABASE_URL=your_postgres_connection_url
JWT_SECRET=your_secret_key

Then start the app

npm start


📮 API Endpoints
All endpoints (except GET /api/suggestions/:mood) require a valid JWT.

🔐 Auth Routes

POST /api/users/register

Register a new user.

POST /api/users/login

Returns a JWT token.

{
  "token": "your.jwt.token"
}

🧘 Mood Tracking

POST /api/moods

Submit your current mood (auth required).

{
  "mood": "sad"
}

GET /api/moods/latest

Returns your latest mood and suggestions.

💡 Mood Suggestions

GET /api/suggestions/:mood

Returns mood-specific suggestions (quote, music, activity).

GET /api/suggestions/sad

Response:

[

  {
    "category": "quote",
    "content": "Keep your head up."

  },

  {
    "category": "music",
    "content": "https://open.spotify.com/track/sad-song"
  }

]

🔍 API Documentation

Interactive Swagger UI available at:

https://moodmate-production.up.railway.app/api-docs

🧪 Testing the API

🧰 With Postman

Import the MoodMate.postman_collection.json

Set your JWT under Authorization → Bearer Token

Try routes like /api/moods, /api/suggestions/:mood

🖥 With curl

curl -X GET http://localhost:3000/api/suggestions/sad

📁 Project Structure

moodmate/
├── controllers/
├── models/
├── routes/
├── middleware/
├── seed/
├── .env
└── index.js


📌 Future Improvements

✅ Swagger UI docs

📊 Mood analytics dashboard

📅 Daily mood reminder emails

📱 Optional minimal frontend UI

👨‍💻 Author

SamuelDdev – GitHub
