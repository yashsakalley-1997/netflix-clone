import { useEffect } from "react";
import { apiOptions, categoryApiUrl } from "../Constants/apiConstants";
import { useDispatch } from "react-redux";

import { categories } from "../Constants/apiConstants";
import { setAllCategoryMovies } from "../store/moviesSlice";

const useFetchAllMovies = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = ()=>{
        categories.map(async (elem)=>{
            const apiData = await fetch(categoryApiUrl+elem,apiOptions);
            const jsonData = await apiData.json();
            dispatch(setAllCategoryMovies({
                category:elem,
                movies:jsonData?.results
            }));
        }) 
        
    }
}

export default useFetchAllMovies;