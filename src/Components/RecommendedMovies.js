import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const RecommendedMovies = () =>{
    const {gptMovieTitles,gptRecommendedMovies} = useSelector((store)=>store?.movie);
    console.log("hello",gptMovieTitles)
    return (
        <div className="bg-black text-white mt-10 opacity-90">
            {gptMovieTitles.map((elem,index)=>(
                <MovieList key={elem} category={elem} movies={gptRecommendedMovies[index]}></MovieList>
            ))}
        </div>
    )
}

export default RecommendedMovies;