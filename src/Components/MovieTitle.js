const MovieTitle = ({title,overview})=>{
    return (
        <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute bg-gradient-to-b from-black">
            <h1 className="text-2xl md:text-6xl text-white font-semibold">{title}</h1>
            <p className="hidden md:inline-block my-6 text-lg w-1/2 text-white">{overview}</p>
            <div className="flex gap-2 mt-3 md:mt-0">
                <button className="bg-white px-3 md:px-10 py-2 md:py-3 text-black text-xl
                rounded-lg hover:bg-opacity-80">Play More</button>
                <button className="bg-gray-500 px-3 md:px-10 py-2 md:py-3 text-white text-xl
                rounded-lg bg-opacity-50">Info</button>
            </div>
        </div>
    )
}

export default MovieTitle;