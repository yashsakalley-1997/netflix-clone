import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies:[],
    allCategoryMovies:{},
    movieTrailer:{}
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
    }
})

export const {setMovies,setMovieTrailer,setAllCategoryMovies} = moviesSlice.actions;
export default moviesSlice.reducer;