import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/'; // Adjust the URL to match your Spring Boot backend

const signup = (name, email, password) => {
    return axios.post(API_URL + 'signup', {
        name,
        email,
        password
    });
};

const login = (email, password) => {
    return axios.post(API_URL + 'login', {
        email,
        password
    }).then(response => {
        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    });
};

const logout = () => {
    localStorage.removeItem('user');
};

const AuthService = {
    signup,
    login,
    logout
};

export default AuthService;
