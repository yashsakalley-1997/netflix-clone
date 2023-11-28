import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { searchGpt } from "../utils/openAi";
import fetchGptMovies from "../utils/useFetchGptMovies";
import { setRecommendedMovies } from "../store/moviesSlice";
import RecommendedMovies from "./RecommendedMovies";
import { netflixBgImg } from "../Constants/images";
const GptSearch = () => {
    const dispatch = useDispatch();
    const searchText = useRef(null);

    const handleClick = useCallback(()=>{
        searchGpt(searchText.current.value).then((res1)=>{
            fetchGptMovies(res1.split(", ")).then((res2)=>{
                dispatch(setRecommendedMovies({movieTitles:res1.split(", "),movies:res2}))
            }).catch((err)=>{
                console.log(err)
            });
        }).catch((err)=>{
            console.log("err",err)
        })
    },[searchText?.current?.value])
    return (
        <div>
            <div className="fixed -z-40">
                <img
                    src={netflixBgImg}
                    alt="Netflix background"
                />    
            </div>
            <div className="pt-[10%]">
                <form className="w-1/2 bg-black p-4 grid grid-cols-12 m-auto gap-4" onSubmit={(e)=>e.preventDefault()}>
                    <input
                        type="text"
                        className="col-span-9 p-4 rounded-sm"
                        placeholder="What do you want to see today?"
                        ref={searchText}
                    />
                    <button 
                        className="col-span-3 rounded-sm bg-red-600 p-4"
                        onClick={()=>handleClick()}
                        >
                            Search
                    </button>    
                </form>
            </div>
            <RecommendedMovies/>
        </div>
    )
}

export default GptSearch;