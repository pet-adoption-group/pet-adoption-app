// server/server.js
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';// To load environment variables from .env file
import { Configuration, OpenAIApi } from "openai";
import petRoutes from './routes/petRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import { connectDB } from './config/db.js'  // Import the connectDB function from db.js


dotenv.config();// Load .env variables

// Configure OpenAI with your API key
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,  // Securely access the API key from the .env file
});

const openai = new OpenAIApi(configuration);

// Function to interact with OpenAI (example)
const getOpenAIResponse = async (prompt) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",  // Model to use
      prompt: prompt,              // The prompt to send to the AI
      max_tokens: 100,             // Limit the response length
    });

    console.log(response.data.choices[0].text);  // Log the AI's response
  } catch (error) {
    console.error('Error fetching response from OpenAI:', error);
  }
};

// Test with a sample prompt
getOpenAIResponse("What is the history of pet adoption?");


const app = express();
app.use(cors());  // Allow cross-origin requests

// Middleware for parsing JSON
app.use(express.json());

// MongoDB Connection
connectDB ();
  

// Routes to handle pets
app.use('/api/pets', petRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

