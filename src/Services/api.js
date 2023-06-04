import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";
const API_KEY = '3861011adb72c549e12522c3fc2d3018'

const fetchPopular = async () => {
    const response = await axios.get(`/3/trending/movie/day?api_key=${API_KEY}`);
    const data = await response.data;
    return data;
};

const fetchSearch = async (query) => {
    const response = await axios.get(`/3/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`);
    const data = await response.data;
    return data;
};

const fetchMovieInfo = async (id) => {
    const response = await axios.get(`/3/movie/${id}?api_key=${API_KEY}&include_adult=false`);
    const data = await response.data;
    return data;
}

const fetchMovieActors = async (id) => {
    const response = await axios.get(`/3/movie/${id}/credits?api_key=${API_KEY}&include_adult=false`);
    const data = await response.data;
    return data;
}

const fetchMovieRevievs = async (id) => {
    const response = await axios.get(`/3/movie/${id}/reviews?api_key=${API_KEY}&include_adult=false`);
    const data = await response.data;
    return data;
}


export {
    fetchPopular,
    fetchSearch,
    fetchMovieInfo,
    fetchMovieActors,
    fetchMovieRevievs
}