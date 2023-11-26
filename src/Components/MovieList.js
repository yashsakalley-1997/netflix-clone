import MovieCard from "./MovieCard";

const MovieList = ({category,movies})=>{
    return (
        <div className="px-4">
            <h1 className="capitalize text-3xl py-4 text-white">{category}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex gap-3">
                    {movies.map((elem)=>(
                        <MovieCard movieData={elem} key={elem?.id}/>
                    ))}      
                </div>         
            </div>
        </div>
    )
}


export default MovieList;