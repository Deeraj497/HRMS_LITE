# HRMS Lite – Full Stack Application

## Project Overview

HRMS Lite is a lightweight Human Resource Management System that allows an admin to manage employee records and track daily attendance.

This project demonstrates end-to-end full-stack development including frontend UI, backend APIs, database persistence, and cloud deployment.

---

##Tech Stack

### Frontend

* React (Vite)
* Axios
* CSS

### Backend

* FastAPI
* SQLAlchemy
* SQLite

### Deployment

* Frontend: Netlify
* Backend: Render
* Repository: GitHub

---

Features

Employee Management

* Add employee
* View employee list
* Delete employee
* Unique employee ID validation
* Email format validation

Attendance Management

* Mark attendance (Present / Absent)
* View attendance per employee
* Date-wise tracking

System Quality

* RESTful API design
* Proper HTTP status codes
* Error handling implemented
* Clean and responsive UI
* Loading and empty states

---

## Live URLs

**Frontend (Live App):**
https://courageous-toffee-3399c8.netlify.app/

**Backend API:**
 https://hrms-lite-xulz.onrender.com

**Swagger Docs:**
 https://hrms-lite-xulz.onrender.com/docs



 Run Locally

 Backend Setup

bash
cd backend-fastapi
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload




##Frontend Setup

bash
cd frontend-react
npm install
npm run dev




 Assumptions / Limitations

* Single admin user (no authentication)
* SQLite used for simplicity
* Basic validation implemented
* Free-tier hosting may cause cold start delays

---

 Author

**Deeraj**
