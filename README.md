# Event Backend

A NestJS-based backend application for managing events, with PostgreSQL as the database. This project uses Docker for containerization and supports a production-ready setup.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Running with Docker](#running-with-docker)
- [Accessing the Application](#accessing-the-application)

---

## Features
- RESTful API with NestJS framework
- PostgreSQL integration for data persistence
- Dockerized setup for consistent environment
- CORS enabled for cross-origin requests
- Environment-based configuration

---

## Prerequisites
Ensure the following tools are installed on your system:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
- [npm](https://www.npmjs.com/)

---

## Getting Started

### 1. Clone the Repository
```bash
 - git clone https://github.com/amit-maskare/event-setup-docker.git
 - cd event-setup-docker
```

---

## Environment Variables
Rename env to .env & change DATABASE_URL

---

## Running the Application
 - npm i
 - npx prisma generate
 - npx prisma db push
 - npm run start:dev

---

## Running with Docker
 - docker compose up --build
 - docker exec -it [container-id](#) sh
 - npx prisma db push

---

## Accessing the Application
 - Open localhost:3000