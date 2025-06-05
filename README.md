

🧠 MoodMate API
MoodMate is a simple backend API that allows users to log their current mood and receive personalized suggestions such as quotes, music, and activities based on how they feel.

🔧 Technologies Used
Node.js + Express.js

Sequelize ORM

PostgreSQL

JWT Authentication

Hosted on Railway

🚀 Getting Started
📦 Prerequisites
Node.js (v18+)

PostgreSQL installed locally or cloud DB (e.g., Railway)

Railway CLI (optional for deployment)

🛠 Installation
git clone https://github.com/SamueldDev/moodmate.git
cd moodmate
npm install


🗂 Environment Setup
Create a .env file with the following:
PORT=7000
DATABASE_URL=your_postgres_connection_url
JWT_SECRET=your_secret_key

Replace DATABASE_URL with your local or cloud PostgreSQL connection string.
npm run start


📮 API Endpoints
All endpoints require a valid JWT unless stated otherwise.

🔐 Authentication
POST /api/users/register
Register a new user.

Body
{
  "email": "user@example.com",
  "password": "securePassword"
}


POST /api/users/login
Returns a JWT for authorization.

Body
{
  "email": "user@example.com",
  "password": "securePassword"
}


Response
{
  "token": "your.jwt.token"
}

🧘 Mood Tracking
POST /api/moods
Submit a mood (auth required).

Body
{
  "mood": "sad"
}

Response
{
  "id": 1,
  "userId": 123,
  "mood": "sad",
  "createdAt": "2025-06-05T12:34:56Z",
  "suggestions": [
    {
      "category": "quote",
      "content": "Keep your head up."
    },
    {
      "category": "music",
      "content": "https://open.spotify.com/track/happy"
    }
  ]
}


GET /api/moods/latest
Returns the user's most recent mood entry.

💡 Suggestions
GET /api/suggestions/:mood
Returns suggestions for a given mood (sad, happy, tired, angry, relaxed).

Example

GET /api/suggestions/sad

Response
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


🧪 Testing
Using Postman
Import the included MoodMate.postman_collection.json file

Set your JWT as a Bearer token under Authorization tab

Try endpoints like /api/moods, /api/suggestions/:mood, etc.
Using curl
curl -X GET http://localhost:7000/api/suggestions/sad

🌐 Live Deployment
The backend is deployed and accessible at:

🔗 https://moodmate.up.railway.app

📁 Project Structure
moodmate/
├── controllers/
├── models/
├── routes/
├── seed/
├── middleware/
├── .env
└── index.js


📌 Future Improvements
Swagger documentation at /api-docs

Mood analytics dashboard

Daily mood reminder emails

🧑‍💻 Author
Your Name – SamuelDdev
