const MovieTitle = ({title,overview})=>{
    return (
        <div className="w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-b from-black">
            <h1 className="text-6xl text-white font-semibold">{title}</h1>
            <p className="my-6 text-lg w-1/2 text-white">{overview}</p>
            <div className="flex gap-2">
                <button className="bg-white px-10 py-3 text-black text-xl
                rounded-lg hover:bg-opacity-80">Play More</button>
                <button className="bg-gray-500 px-10 py-3 text-white text-xl
                rounded-lg bg-opacity-50">Info</button>
            </div>
        </div>
    )
}

export default MovieTitle;