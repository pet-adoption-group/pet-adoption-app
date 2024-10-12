// server/middleware/authMiddleware.js
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import cors from 'cors';
import express from 'express';


const app = express();

// Allow cross-origin requests
app.use(cors());



export const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get the token from the Bearer header
      token = req.headers.authorization.split(' ')[1];

      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach the user to the request object
      req.user = await User.findById(decoded.id).select('-password');

      next(); // Call the next middleware
    } catch (error) {
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});
    


// server/middleware/authMiddleware.js
export const admin = (req, res, next) => {

  // Logic to check if the user is an admin
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: 'Admin access required' });
  }


    next();


  };


