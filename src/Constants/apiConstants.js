export const apiOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`
    }
};

export const apiUrl = "https://api.themoviedb.org/3/movie/upcoming";
export const categoryApiUrl = "https://api.themoviedb.org/3/movie/";
export const searchMovie = (string) => `https://api.themoviedb.org/3/search/movie?query=${string}&include_adult=false&language=en-US&page=1`;
export const movieVideoUrl = (videoId)=>`https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-US`;
export const posterUrl = "https://image.tmdb.org/t/p/w500";
export const categories = ["now_playing","popular","top_rated","upcoming"];
export const openAiKey = process.env.REACT_APP_OPEN_AI_SECRET_KEY;