import { searchMovie,apiOptions } from "../Constants/apiConstants"

const search = async (str) => {
    const apiData = await fetch(searchMovie(str),apiOptions);
    const jsonData = await apiData.json();
    return jsonData.results;
}
const fetchGptMovies = async (arr)=>{
    const promiseList = arr.map((elem)=>search(elem));
    const data = await Promise.all(promiseList);
    return data
}

export default fetchGptMovies;