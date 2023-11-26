import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import movieReducer from "./moviesSlice"

const appStore = configureStore({
    reducer:{
        auth:authReducer,
        movie:movieReducer
    }
})

export default appStore;