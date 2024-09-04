import axios from 'axios';

const API_URL = 'http://localhost:8081/api/categories'; // Replace with your actual backend URL

export const getCategories = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log('Categories fetched:', response.data); // Log the fetched categories
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error.response ? error.response.data : error.message);
    throw error;
  }
};
