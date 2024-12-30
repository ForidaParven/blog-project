# Blog API

The Blog API is a robust backend solution for managing a blog platform. It supports user and admin functionalities, enabling features such as user authentication, blog creation, and administrative oversight. Built using **Node.js**, **Express**, and **MongoDB**, this API is designed for scalability, security, and performance.

## Features

### User Features:
- **Register & Login**: Secure user authentication using JWT tokens.
- **Blog Management**: Users can create, update, and delete their blogs.
- **View Blogs**: Retrieve a list of blogs with advanced search, filter, and pagination capabilities.

### Admin Features:
- **Manage Users**: Admins can block users to prevent further access.
- **Manage Blogs**: Admins can delete any blog.

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose for ORM)
- **Validation**: Zod
- **Authentication**: JWT (Access & Refresh Tokens)

## Installation

1. Clone the repository:https://github.com/ForidaParven/blog-project.git
   
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the `.env` file with your configuration:
   ```
   NODE_ENV=development
   PORT=5000
   DATABASE_URL=your_mongodb_url
   JWT_ACCESS_SECRET=your_access_secret
   JWT_REFRESH_SECRET=your_refresh_secret
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in to receive a JWT token.

### Blogs
- **POST /api/blogs**: Create a blog.
- **PATCH /api/blogs/:id**: Update a blog.
- **DELETE /api/blogs/:id**: Delete a blog.
- **GET /api/blogs**: Retrieve blogs with search and filtering.

### Admin
- **PATCH /api/admin/users/:id/block**: Block a user.
- **DELETE /api/admin/blogs/:id**: Delete any blog.

## License
This project is licensed under the MIT License.


## Submission Link
# live link: github: https://github.com/ForidaParven/blog-project
# Admin: 
"email": "hybui.kiuh@example.com",
"password": "SecureP@ssw0rd";
# Project Overview Video:https://drive.google.com/file/d/1xq0wmLEX3suQ5zX7i45-AyDPXOFSOv72/view?usp=sharing 
# Live Deployment Link (Server):https://blog-assignment-liart.vercel.app

Admin Token:
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imh5YnVpLmtpdWhAZXhhbXBsZS5jb20iLCJyb2xlIjoiYWRtaW4iLCJpZCI6IjY3Njc2ZDI1Y2EzNTdhZTdlYTc1MzY2MCIsImlhdCI6MTczNTU3MTkzMywiZXhwIjoxNzM4MTYzOTMzfQ.1qGJvPeqmJcuWBpqlY0jPzrEdy0VZVy_KhM4SRIl1Kc"

User Token:
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5kb2VAZXhhbXBsZS5jb20iLCJyb2xlIjoidXNlciIsImlkIjoiNjc3MmJiZGVmYTUxMGM5YmNjMzIxNDQ5IiwiaWF0IjoxNzM1NTcyNDc2LCJleHAiOjE3MzgxNjQ0NzZ9.Dn3BxKQNW32QxoDGyaEvUnl_11iVn7OpsdieQlmpydQ"

