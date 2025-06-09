<h1 align="center">🎓 University Management System</h1>
<p align="center">
  A modern full-stack platform designed to streamline academic and administrative processes within a university. It enables seamless management of students, professors, departments, programs, courses, grades, and financial records — built with Fastify, Prisma, PostgreSQL, and React.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Fastify-000000?style=flat-square&logo=fastify&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB"/>
</p>

---

## 📌 Overview

**University Management System** is a full-stack web application that powers both academic and administrative workflows. It allows university administrators, professors, and students to interact with the platform through dedicated interfaces, offering a complete set of features from enrollment to grade tracking and program exploration.

---

## 🎯 Features

### 👨‍🎓 Student Features

- Registration, login, and profile management  
- View grades per semester  
- Enroll in courses each semester  
- Search programs and professors  
- View credentials of programs  
- Pay fees online (Stripe integration)  

### 👨‍🏫 Professor Features

- Create and manage profiles  
- Input and modify student grades  
- View courses and students assigned  

### 🧑‍💼 Admin Features

- Full CRUD on:
  - Departments
  - Programs
  - Courses
  - Professors
  - Students  
- System-wide management and oversight  

---

## 🛠️ Tech Stack

### 🚀 Backend

- **Fastify** – lightweight, high-performance Node.js web framework  
- **Prisma ORM** – type-safe, modern database access for PostgreSQL  
- **PostgreSQL** – reliable relational database for academic data  
- **TypeScript** – strong typing and safer backend development  
- **JWT** – authentication and role-based authorization  
- **Winston** – structured logging  
- **Multer** – file uploads (e.g., profile images)  
- **Stripe** – secure payment processing  
- **Nodemailer** – email notifications  
- **Express Rate Limit** – basic rate limiting  
- **Cookie Parser** – manage session tokens and cookies  

### 🌐 Frontend

- **React** – component-based UI  
- **React Router** – dynamic routing  
- **Axios** – promise-based HTTP client  
- **Tailwind CSS** (or Styled Components) – modern styling  
- **React Hook Form / Formik** – form handling  
- **Zod** – form validation (optional)  
- **JWT storage** – auth token handling via cookies/localStorage  

---

## 📁 Project Structure

