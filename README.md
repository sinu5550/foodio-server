# Foodio Server (Backend)

The powerhouse behind the Foodio ecosystem. A robust, secure, and scalable REST API built with NestJS, Prisma, and PostgreSQL.

## 🚀 Live Demo

- **Base URL**: https://foodio-server-siyan.vercel.app/api

## 🛠️ Tech Stack

- **Framework**: [NestJS](https://nestjs.com/) (Node.js)
- **Database**: [PostgreSQL](https://www.postgresql.org/) (Hosted on Neon)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Authentication**: JWT (JSON Web Tokens) with Passport.js
- **Media Storage**: Cloudinary (Image uploads)
- **Security**: Bcrypt (Password hashing) & Dynamic CORS Whitelisting

## ✨ Key Features

- **Scalable Architecture**: Modular NestJS design for clean separation of concerns.
- **Dynamic Menu Management**: Full CRUD operations for categories and menu items.
- **Order Pipeline**: Efficient order creation and status management (Pending → Preparing → Ready → Completed).
- **Authentication System**: Secure user registration and login with encrypted passwords.
- **Real-time Readiness**: Polling-optimized endpoints for live dashboard updates.
- **Cloud Integration**: Direct image stream-uploading to Cloudinary with Multer.

## 📂 Project Structure

- `src/auth`: Authentication logic, guards, and JWT strategies.
- `src/category`: Category management endpoints.
- `src/menu-item`: Menu item CRUD and image handling.
- `src/order`: Complex order logic and relationship management.
- `src/prisma`: Shared database client and connection health checks.

## ⚙️ Installation & Setup (Local)

1. **Clone the repo**
2. **Install dependencies**: `npm install`
3. **Configure Environment Variables**:
   Create a `.env` file based on the template:
   ```env
   DATABASE_URL="your-postgresql-url"
   JWT_SECRET="your-secret"
   ALLOWED_ORIGINS="http://localhost:3000,http://localhost:3001"
   CLOUDINARY_CLOUD_NAME="your-cloud-name"
   CLOUDINARY_API_KEY="your-api-key"
   CLOUDINARY_API_SECRET="your-api-secret"
   ```
4. **Generate Prisma Client**: `npx prisma generate`
5. **Run Migrations**: `npx prisma migrate dev`
6. **Start Server**: `npm run start:dev`

## 👨‍💻 Developed by

[Intisar_Ahmed_Siyan] - Passionate Full-Stack Developer
