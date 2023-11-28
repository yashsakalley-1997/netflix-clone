import { useContext } from "react";

import Header from "./Header";
import MainMoviesComponent from "./MainMoviesComponent";
import SecondaryMoviesComponent from "./SecondaryMovieComponent";
import GptSearch from "./GptSearch";
import AppContext from "../utils/AppContext";
const Browse = ()=>{
    const { isGptSearch } = useContext(AppContext);
    return (
        <div>
            <Header/>
            {!isGptSearch?(
                <>
                    <MainMoviesComponent/>
                    <SecondaryMoviesComponent/> 
                </>
            ):<GptSearch/>}
        </div>
    )
}

export default Browse;