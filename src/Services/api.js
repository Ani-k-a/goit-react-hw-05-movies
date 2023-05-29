import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";
const API_KEY = '3861011adb72c549e12522c3fc2d3018'

const fetchPopular = async () => {
    const response = await axios.get(`/3/trending/movie/day?api_key=${API_KEY}`);
    const data = await response.data;
    return data;
};

const fetchSearch = async () => {
    const response = await axios.get(`/3/search/movie?api_key=${API_KEY}`);
    const data = await response.data;
    return data;
}


export {
    fetchPopular,
    fetchSearch
}