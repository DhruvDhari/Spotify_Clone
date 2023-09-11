const SingleSongCard = () =>{
    return(
       <div className="flex">
        <div className="w-12 h-12 bg-cover bg-center " style={{
            backgroundImage:`url("https://i.ytimg.com/vi/cwQIcjFVFWg/maxresdefault.jpg")`
        }}>

        </div>
        <div className="text-white flex flex-col justify-center pl-4">
            <div className="">hello</div>
            <div className="text-xs text-gray-400">marshmello</div>
        </div>
       </div>
    );
}

export default SingleSongCard;