import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies:[],
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
        setMovieTrailer:(state,action)=>{
            state.movieTrailer = action.payload
        }
    }
})

export const {setMovies,setMovieTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;