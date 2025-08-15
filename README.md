# 📘 StudyNotion - MERN Stack Ed-Tech Platform

Welcome to **StudyNotion** – a modern, feature-rich e-learning solution designed for both learners and instructors. 

---

## 🚀 At a Glance

- **MERN Stack:** MongoDB • Express.js • React.js • Node.js
- **Audience:** Students & Instructors
- **Core:** Secure, scalable, and interactive learning platform

---

## 🎯 Platform Goals

- **For Students:**  
  _Smooth, engaging learning journeys with intuitive navigation and progress tracking._
- **For Instructors:**  
  _Powerful tools to build, manage, and share courses with a global audience._

---

## ✨ Key Features

### 👨‍🎓 Student Experience
- Browse, enroll, and rate courses
- Real-time feedback & personalized dashboards

### 🧑‍🏫 Instructor Tools
- Effortless course/content creation & management
- Dynamic analytics for student engagement

### 📈 Engagement Tools
- Progress tracking & achievements
- Responsive and dynamic UI

---

## 🧩 System Architecture

| Layer      | Technology        | Purpose                         |
|------------|-------------------|---------------------------------|
| Frontend   | React.js, TailwindCSS | UI & User Interaction           |
| Backend    | Node.js, Express.js   | Business Logic & APIs           |
| Database   | MongoDB (Mongoose)    | Secure, Scalable Data Storage   |

_See `/docs` for the full architecture diagram!_

---

## 🎨 Frontend Overview

- **Frameworks:** ReactJS, TailwindCSS
- **Features:** 
  - JWT-based user authentication
  - Dynamic dashboards (students & instructors)
  - Responsive course pages & rating system
- **Key Libraries:**
  - Redux Toolkit
  - React Router
  - Toastify
  - Formik

---

## 🛠 Backend Overview

- **Built With:** Node.js & Express.js
- **Core Features:**
  - Secure JWT authentication & role-based access
  - Course & content management
  - Payment integration (Stripe)
- **Data Models:** Users, Courses, Sections, Lectures, Reviews
- **Database:** MongoDB (via Mongoose ODM)

---

## 🔗 API Quick Reference

| Method | Endpoint           | Description                |
|--------|--------------------|----------------------------|
| POST   | `/signup`          | Register new users         |
| POST   | `/login`           | Authenticate users         |
| POST   | `/courses`         | Create a new course        |
| GET    | `/courses/:id`     | Fetch course details       |
| DELETE | `/courses/:id`     | Remove a course            |
| GET    | `/user/dashboard`  | User's dashboard           |
| PUT    | `/profile`         | Update user profile        |

- **Auth:** JWT-based middleware protects routes
- 📄 _Sample requests/responses: See `/apiDocs`_

---

## ⚙️ Environment Setup

### ✍️ Create `.env` files for Backend & Frontend

#### Backend `.env` Example

```env
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
MAIL_PASS=your_app_password
```

#### Frontend `.env` Example

```env
REACT_APP_BACKEND_URL=http://localhost:5000/api
```

> **Note:** Always add `.env` files to `.gitignore`!

---

## 🖥️ Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/studynotion.git
   cd studynotion
   ```

2. **Install Dependencies**

   - **Backend**
     ```bash
     cd backend
     npm install
     ```
   - **Frontend**
     ```bash
     cd ../frontend
     npm install
     ```

3. **Set Up Environment Variables**  
   Create `.env` files as shown above.

4. **Run Development Servers**
   - **Backend:**  
     ```bash
     cd backend
     npm run dev
     # Default: http://localhost:5000
     ```
   - **Frontend:**  
     ```bash
     cd ../frontend
     npm start
     # Default: http://localhost:3000
     ```

---

## 📌 Requirements

- **Node.js:** v16+
- **MongoDB Atlas** (for cloud DB)
- **Cloudinary** (for media uploads)
- **Stripe** (for payments)
- **Gmail App Password** (for sending emails, 2FA enabled)

---

## 🧪 Testing

- **Approach:** Unit & Integration Tests
- **Tools:** Jest, Supertest
- **Coverage:** Auth, API, CRUD

_Run backend tests:_
```bash
cd backend
npm test
```

---

## 💡 Empowering digital learning for everyone – students & educators alike! 🚀
