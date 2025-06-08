<h1 align="center">🎓 Student Management System API</h1>
<p align="center">
  A robust backend system built with Fastify, PostgreSQL, and Prisma to manage students, courses, attendance, grades, and more.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Fastify-000000?style=flat-square&logo=fastify&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white"/>
</p>

---

## 📌 Overview

**Student Management System API** is a Fullstack application that powers academic and administrative operations such as student enrollment, attendance tracking, grade management, and scheduling. Built for performance and scalability using Fastify and Prisma ORM.

---

## 🎯 Features

- 👨‍🎓 Student enrollment & profile management  
- 🗓️ Attendance tracking  
- 🧮 Grade input, report card generation  
- 📚 Course assignment & scheduling  
- 💵 Fee tracking and payment logs  
- 📬 Notifications for parents/guardians  
- 📊 Reporting and analytics dashboard-ready  
- 🔒 JWT authentication & route protection  

---

## 🛠️ Tech Stack

### 🚀 Backend

- **Fastify** (lightweight and high-performance Node.js framework)  
- **PostgreSQL** (relational database for structured academic data)  
- **Prisma** (type-safe ORM)  
- **JWT** for stateless authentication  
- **dotenv** for environment configuration  

### 📦 Core Packages

- `@fastify/jwt` — authentication  
- `@fastify/cors` — CORS handling  
- `@fastify/env` — config validation  
- `prisma` — database ORM  
- `bcrypt` — password hashing  
- `zod` (optional) — request validation

---

## 📂 Project Structure

```bash
student-management-system/
│
├─ prisma/
│   ├─ schema.prisma         # Prisma data models
│   └─ migrations/           # DB migration history
│
├─ src/
│   ├─ routes/               # Fastify route definitions
│   ├─ controllers/          # Business logic
│   ├─ models/               # Prisma model access
│   ├─ plugins/              # Fastify plugins (e.g., DB, JWT)
│   ├─ middlewares/          # Auth & request validation
│   ├─ utils/                # Helper functions
│   └─ server.js             # Main entry point
│
├─ .env                      # Environment variables
├─ .gitignore
├─ package.json
└─ README.md
