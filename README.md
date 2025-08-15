📘 StudyNotion - A MERN Stack Ed-Tech Platform

StudyNotion is a comprehensive e-learning solution built using the MERN Stack:
MongoDB • Express.js • React.js • Node.js

🎯 Platform Goals

For Students:
Seamless, interactive learning experiences with intuitive navigation and progress tracking.

For Instructors:
Tools to create, manage, and share courses with a global audience.

🚀 Key Features

👨‍🎓 Student Experience

Browse, enroll, and rate courses

Real-time feedback & personalized dashboards

🧑‍🏫 Instructor Tools

Course and content creation/management

Dynamic analytics for engagement

📈 Engagement Tools

Progress tracking

Dynamic and responsive UI

🧩 System Architecture

Frontend: React.js (UI & user interaction)

Backend: Node.js + Express.js (Business logic & APIs)

Database: MongoDB (Secure, scalable storage)

📊 See /docs for a detailed architecture diagram!

🎨 Frontend Overview

Built With:

ReactJS & TailwindCSS

Features:

JWT-based user authentication

Dynamic dashboards for students & instructors

Responsive course pages & rating system

Key Libraries:

Redux Toolkit

React Router

Toastify

Formik

🛠 Backend Overview

Built With:

Node.js & Express.js

Core Features:

Secure JWT authentication & role-based access

Course & content management

Payment integration (Stripe/others)

Data Models:

Users

Courses

Sections

Lectures

Reviews

Database:

MongoDB (via Mongoose ODM)

🔗 API Design

RESTful APIs:

POST /signup

POST /login

POST /courses

GET /courses/:id

DELETE /courses/:id

GET /user/dashboard

PUT /profile

Authentication:

JWT-based middleware protects routes

📄 Sample requests/responses in /apiDocs

⚙️ Environment Variables Setup (.env)

Before running StudyNotion, create .env files in both backend and frontend root folders.

Backend .env
# ====== Server Configuration ======
PORT=5000
MONGODB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/studynotion

# ====== Authentication ======
JWT_SECRET=your_jwt_secret_here

# ====== Cloudinary (for media uploads) ======
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret

# ====== Payment Gateway (Stripe) ======
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# ====== Email Service (Gmail) ======
MAIL_HOST=smtp.gmail.com
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_app_password  # 16-char app password from Gmail

Frontend .env
# ====== API URL ======
REACT_APP_BACKEND_URL=http://localhost:5000/api


Note: Keep .env files in .gitignore to avoid leaking credentials.

🖥️ How to Start the Project
1️⃣ Clone the Repository
git clone https://github.com/your-username/studynotion.git
cd studynotion

2️⃣ Install Dependencies
Backend:
cd backend
npm install

Frontend:
cd ../frontend
npm install

3️⃣ Setup .env Files

Create .env files in both backend and frontend as shown above.

4️⃣ Run the Development Servers
Backend:
cd backend
npm run dev


(Default URL: http://localhost:5000)

Frontend:
cd ../frontend
npm start


(Default URL: http://localhost:3000)

📌 Requirements

Node.js: v16+

MongoDB Atlas Account for database

Cloudinary Account for media uploads

Stripe Account for payments

Gmail App Password for sending emails (with 2FA enabled)

🧪 Testing

Approach: Unit & Integration Testing

Tools: Jest, Supertest

Coverage: Authentication, API responses, CRUD operations

Run backend tests:

cd backend
npm test


StudyNotion empowers both learners and educators for the digital education era! 🚀
