import axios from "axios";

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
<<<<<<< HEAD
};

export const signup = (userData) => {
    return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
    return axios.post('/api/users/login', userData);
};
<<<<<<< HEAD
=======
}

export default setAuthToken;
>>>>>>> beb5986c90600a94caefb3e51747c8d42a4c84e8
=======
>>>>>>> master
