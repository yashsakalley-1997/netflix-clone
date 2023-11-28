import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { apiOptions, categoryApiUrl } from "../Constants/apiConstants";

import { categories } from "../Constants/apiConstants";
import { setAllCategoryMovies } from "../store/moviesSlice";

const useFetchAllMovies = () => {
    const dispatch = useDispatch();
    const allCategoryMovies = useSelector((store)=>store?.movie?.allCategoryMovies)
    useEffect(()=>{
        if(isEmpty(allCategoryMovies)){
            fetchData()
        }
    },[allCategoryMovies])

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