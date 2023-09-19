import { useEffect, useState } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";

const AddToPlaylistModal=({closeModal,addSongToPlaylist})=>{

    const [myPlaylists,setMyPlaylists]=useState([]);
    useEffect(()=>{
        const getData=async()=>{
            const response=await makeAuthenticatedGETRequest("/playlist/get/me");
            setMyPlaylists(response.data);
        };
        getData();
    },[])


    return(
        <div className="absolute z-2 bg-black w-screen h-screen bg-opacity-50 flex justify-center items-center " onClick={closeModal}>
            <div className="bg-black w-1/3 rounded p-4" onClick={(e)=>{e.stopPropagation();
            }}>
                <div className="font-bold text-xl mb-4 text-white">Select PlayList</div>
                <div className="space-y-4 flex flex-col justify-center items-center">
                {
                    myPlaylists.map((item)=>{
                        return(<PlaylistListComponent info={item} addSongToPlaylist={addSongToPlaylist}/>);
                    })
                }
                      
                </div>
                </div>    
             </div>
    );
};

const PlaylistListComponent=({info,addSongToPlaylist})=>{
    return(
        <div className="cursor-pointer w-full flex items center space-x-4 hover:bg-gray-400 hover:bg-opacity-20 p-3 rounded " onClick={()=>{
            addSongToPlaylist(info._id);
                    }}>
            <div className="">
                <img src={info.thumbnail} alt="thumbnail" className="w-10 h-10 rounded" />
            </div>
            <div className="text-white font-semibold">
                {info.name}
            </div>
        </div>
    );
};

export default AddToPlaylistModal;