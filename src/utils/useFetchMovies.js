import { useEffect } from "react";
import { apiOptions, apiUrl } from "../Constants/apiConstants";
import { useDispatch } from "react-redux";

import { setMovies } from "../store/moviesSlice";

const useFetchMovies = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async ()=>{
        const apiData = await fetch(apiUrl,apiOptions);
        const jsonData = await apiData.json();
        dispatch(setMovies(jsonData?.results))
    }
}

export default useFetchMovies;