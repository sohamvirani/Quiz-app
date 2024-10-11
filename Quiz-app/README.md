# Backend API for Quiz Application
This project implements a backend API to handle quiz management and user answer submissions, created using Node.js, Express, and MongoDB.

# Notable Features
Retrieve all quizzes or access a specific quiz by its identifier.
Submit user answers and obtain the calculated score.
Handle errors gracefully for invalid submissions.

# Technologies Employed
Node.js, Express, MongoDB, Mongoose


<h3> Directory Structure</h3>

├── config/           # Configuration settings
├── controllers/      # Logic for handling API requests
├── models/           # Database schema definitions
├── routes/           # Endpoint definitions for the API
├── services/         # Business logic implementations
└── app.js            # Entry point of the application

Installation Instructions
1. Clone the repository and install the required dependencies:

git clone <repo-url> && cd quiz-app-backend
npm install


2. Configure your MongoDB connection string in the config.env file.


3. Start the application server:
npm start

API Endpoints
GET /api/quizzes: Retrieve a comprehensive list of quizzes.
GET /api/quizzes/
: Access a specific quiz by its identifier.
POST /api/quizzes/submit: Submit answers for evaluation.
For additional information, consult the codebase directly.
