import { posterUrl } from "../Constants/apiConstants";
const MovieCard = ({movieData}) => {
    return (
        <>
            {
                movieData?.poster_path && (
                    <div className="w-36">
                    <img
                        src={posterUrl+movieData?.poster_path}
                        alt={movieData?.original_title}
                    />
                </div>
                )
            }
        </>
    )
}

export default MovieCard;