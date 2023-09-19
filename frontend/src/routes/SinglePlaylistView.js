import {useParams} from "react-router-dom";
import LoggedInContainer from "../containers/LoggedInContainer";
import { useEffect, useState } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import SingleSongCard from "../components/shared/SingleSongCard";


const SinglePlatlistView=()=>{

    const [playlistDetails,setPlaylistDetails]=useState({});
    const {playlistId}=useParams();

    useEffect(()=>{
        const getData=async()=>{
            const response=await makeAuthenticatedGETRequest("/playlist/get/playlist/"+playlistId);

            setPlaylistDetails(response);
            
        }
        getData();
    },[])

    return(
        <LoggedInContainer curActiveScreen={"library"}>{
            playlistDetails._id &&
            <div>

            <div className="text-white text-xl pt-5 font-semibold ">{playlistDetails.name}</div>

             <div className="py-5 space-y-3">
                    
                    {playlistDetails.songs.map(item=>{
                        return <SingleSongCard info={item} key={JSON.stringify(item)} playSound={()=>{}} />
                    })}
                    
                    </div>
                 </div>
                }
        </LoggedInContainer>
    );
}
export default SinglePlatlistView;