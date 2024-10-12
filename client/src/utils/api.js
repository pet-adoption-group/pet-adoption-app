import axios from 'axios';




// Create an Axios instance with a base URL
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',  // Use the environment variable
});

// Fetch all pets from server
export const fetchPets = async () => {
  try {
    const response = await API.get('/api/pets');  // Request to fetch pets
    return response.data;  // Return the response data
  } catch (error) {
    console.error('Error fetching pets:', error);
    throw error;  // Propagate the error to the caller
  }
};

// Fetch user profile (this is the new function you're adding)
export const fetchUserProfile = async () => {
  try {
    const token = localStorage.getItem('token');  // Assuming token is stored in localStorage
    const { data } = await axios.get(`${API_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,  // Attach token for protected route
      },
    });
    return data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;  // Propagate error so it can be handled in the calling function
  }
};
