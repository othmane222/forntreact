// VideosService.jsx
import axios from 'axios';

const BASE_URL = 'http://localhost:8081/api/videos';

const uploadVideo = async (formData) => {
    try {
        const response = await axios.post(BASE_URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response;
    } catch (error) {
        throw error;
    }
};

export default {
    uploadVideo,
};
