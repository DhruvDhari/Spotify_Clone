const SingleSongCard = ({info}) =>{
    return(
       <div className="flex hover:bg-gray-400 hover:bg-opacity-20 hover:cursor-pointer p-2 rounded-sm">
        <div className="w-12 h-12 bg-cover bg-center " style={{
            backgroundImage:`url(${info.thumbnail})`
        }}>

        </div>
        <div className="flex w-full ">
        <div className="text-white flex flex-col justify-center pl-4 w-5/6">
            <div className="cursor-pointer hover:underline ">{info.name}</div>
            <div className="text-xs text-gray-400 cursor-pointer hover:underline">{info.artist}</div>
        </div>
        <div className="w-1/6 flex items-center justify-center text-gray-400 text-sm">
            <div>3:44</div>
            {/* <div className="text-gray flex items-center justify-center pl-2 ">...</div> */}
            </div>
        </div>
        
       </div>
    );
}

export default SingleSongCard;