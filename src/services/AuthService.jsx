import axios from 'axios';

const API_URL = 'http://localhost:8081/api/users/';

const login = (email, password) => {
    return axios.post(API_URL + 'login', new URLSearchParams({ email, password }));
};

const signup = (username, email, password, role) => {
    return axios.post(API_URL + 'signup', new URLSearchParams({ username, email, password, role }));
};

const AuthService = {
    login,
    signup,
};

export default AuthService;
