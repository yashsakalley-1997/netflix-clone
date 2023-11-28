import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiOptions, apiUrl } from "../Constants/apiConstants";
import { setMovies } from "../store/moviesSlice";

const useFetchMovies = () => {
    const dispatch = useDispatch();
    const movies = useSelector(store => store?.movie?.movies);
    useEffect(() => {
        if (movies.length === 0) {
            fetchData()
        }
    }, [])

    const fetchData = async () => {
        const apiData = await fetch(apiUrl, apiOptions);
        const jsonData = await apiData.json();
        dispatch(setMovies(jsonData?.results));
    }
}

export default useFetchMovies;