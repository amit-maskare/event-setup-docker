# Event Backend

A NestJS-based backend application for managing events, with PostgreSQL as the database. This project uses Docker for containerization and supports a production-ready setup.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Running with Docker](#building-the-application)
- [Start Working](#start-working)

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
 - git clone https://github.com/your-repo/event-setup-docker.git
 - cd event-setup-docker

## Environment Variables
 - Rename env to .env & change DATABASE_URL

## Running the Application
 - npm i
 - npm run start:dev


## Running with Docker
 - docker compose up --build
 - docker exec -it <Container-Id> sh
 - npx prisma db push


## Start Working
 - Open localhost:3000