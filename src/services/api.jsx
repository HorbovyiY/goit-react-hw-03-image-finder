import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/?key=33010704-feed17696efaf039f05536787&per_page=12";

export const getImage = async searchText => { 
    const response = await axios.get(`&q=${searchText}`)
    return response.data;
} 