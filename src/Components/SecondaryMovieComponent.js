import { useSelector } from "react-redux";

import { categories } from "../Constants/apiConstants";
import MovieList from "./MovieList";
const SecondaryMoviesComponent = ()=>{
    const {allCategoryMovies} = useSelector((store)=>store?.movie);
    return (
        <div className="bg-black">
            <div className="-mt-52 relative z-20">
                {categories.map((elem)=>(
                    allCategoryMovies[elem] && <MovieList category={elem.replace("_"," ")} movies={allCategoryMovies[elem]}/>
                ))}
            </div>
        </div>
    )
}

export default SecondaryMoviesComponent;