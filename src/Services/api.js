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
    console.log(data)
    return data;
};

const fetchMovieInfo = async (movie_id) => {
    const response = await axios.get(`/3/search/movie/${movie_id}?api_key=${API_KEY}`);
    const data = await response.data;
    console.log(data)
    return data;
}

const fetchMovieActors = async (movie_id) => {
    const response = await axios.get(`/3/search/movie/${movie_id}/credits?api_key=${API_KEY}`);
    const data = await response.data;
    console.log(data)
    return data;
}

const fetchMovieRevievs = async (movie_id) => {
    const response = await axios.get(`/3/search/movie/${movie_id}/reviews?api_key=${API_KEY}`);
    const data = await response.data;
    console.log(data)
    return data;
}


export {
    fetchPopular,
    fetchSearch,
    fetchMovieInfo,
    fetchMovieActors,
    fetchMovieRevievs
}