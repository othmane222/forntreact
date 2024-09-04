// src/services/CoursesService.jsx
import axios from 'axios';

const API_URL = 'http://localhost:8081/api/courses';

const createCourse = async (courseData) => {
    try {
        const response = await axios.post(API_URL, courseData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default {
    createCourse,
};
