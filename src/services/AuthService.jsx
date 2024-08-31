import axios from 'axios';


const login = (email, password) => {
    return axios.post(this.loginURL(), new URLSearchParams({ email, password }));
};

const signup = (username, email, password, role) => {
    return axios.post(this.signupURL(), new URLSearchParams({ username, email, password, role }));
};

const AuthService = {
    BASE_URL: 'http://localhost:8081/api/',
    USERS : 'users',
    LOGIN: 'login',
    SIGNUP: 'signup',

    loginURL : () => {
        return this.BASE_URL + this.USERS + this.LOGIN;
    },
    signupURL : () => {
        return this.BASE_URL + this.USERS + this.SIGNUP;
    },

    login,
    signup,
};

export default AuthService;
