import axios from "axios";

export const fetchRestaurants = (food, location) => {
    query = {food, location};
    return axios.get('/api/third-party/', query);
};