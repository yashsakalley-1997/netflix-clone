import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies:[],
    allCategoryMovies:{},
    movieTrailer:{},
    gptMovieTitles:[],
    gptRecommendedMovies:[]
}

const moviesSlice = createSlice({
    name:"movie",
    initialState:initialState,
    reducers:{
        setMovies:(state,action)=>{
            state.movies = action.payload
        }
        ,
        setAllCategoryMovies:(state,action)=>{
            state.allCategoryMovies[action.payload.category] = action.payload.movies
        }
        ,
        setMovieTrailer:(state,action)=>{
            state.movieTrailer = action.payload
        }
        ,
        setRecommendedMovies:(state,action)=>{
            state.gptMovieTitles = action.payload.movieTitles
            state.gptRecommendedMovies = action.payload.movies
        }
    }
})

export const {setMovies,setMovieTrailer,setAllCategoryMovies,setRecommendedMovies} = moviesSlice.actions;
export default moviesSlice.reducer;