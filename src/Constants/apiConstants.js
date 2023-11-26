export const apiOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDYyYmE3OWFhODQ2ZWM1ZmFhNWM2ZDg3ZDlhOTk5MiIsInN1YiI6IjYxY2YxMjdkZTY0MGQ2MDAxYzU2YWY3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VpMVwHDzF4SCHgSj6aaUIclSKIfGBhnv3pC-69CbvZw'
    }
};

export const apiUrl = "https://api.themoviedb.org/3/movie/upcoming";
export const categoryApiUrl = "https://api.themoviedb.org/3/movie/"
export const movieVideoUrl = (videoId)=>`https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-US`;
export const posterUrl = "https://image.tmdb.org/t/p/w500";
export const categories = ["now_playing","popular","top_rated","upcoming"];