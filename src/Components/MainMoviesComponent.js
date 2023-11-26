import { useMemo } from "react";
import { useSelector } from "react-redux";
import useFetchMovies from "../utils/useFetchMovies";

import MovieTitle from "./MovieTitle";
import MovieBackground from "./MovieBackground";

const MainMoviesComponent = ()=>{
    useFetchMovies();
    const movies = useSelector((store)=>store?.movie?.movies);
    const randomIndex = useMemo(()=>{
        return Math.floor(Math.random()*20)
    },[]);
    
    if(movies.length === 0){
        return
    }
    const {original_title,overview,id} = movies[randomIndex];
    return (
        <div>
            <MovieTitle title={original_title} overview={overview}/>
            <MovieBackground id={id}/>
        </div>
    )
}

export default MainMoviesComponent;