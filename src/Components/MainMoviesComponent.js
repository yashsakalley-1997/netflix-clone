import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useContext } from "react";
import useFetchMovies from "../utils/useFetchMovies";

import MovieTitle from "./MovieTitle";
import MovieBackground from "./MovieBackground";
import useFetchAllMovies from "../utils/useFetchAllMovies";

import AppContext from "../utils/AppContext";

const MainMoviesComponent = ()=>{
    useFetchMovies();
    useFetchAllMovies();
    const {isGptSearch} = useContext(AppContext);
    const movies = useSelector((store)=>store?.movie?.movies);
    const randomIndex = useMemo(()=>{
        return Math.floor(Math.random()*20)
    },[]);
    
    if(movies.length === 0){
        return
    }
    const {original_title,overview,id} = movies[randomIndex];
    return (
        <div className="pt-[30%] bg-black md:pt-0">
            <MovieTitle title={original_title} overview={overview}/>
            <MovieBackground id={id}/>
        </div>
    )
}

export default MainMoviesComponent;