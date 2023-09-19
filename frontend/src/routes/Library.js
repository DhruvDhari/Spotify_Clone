import { useEffect, useState } from "react";
import LoggedInContainer from "../containers/LoggedInContainer";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import { useNavigate } from "react-router-dom";



const Library=()=>{
   
    const [myPlaylists,setMyPlaylists]=useState([]);
    useEffect(()=>{
        const getData=async()=>{
            const response=await makeAuthenticatedGETRequest("/playlist/get/me");
            setMyPlaylists(response.data);
        };
        getData();
    },[])

    return(
        <LoggedInContainer curActiveScreen={"library"}>

            <div className="text-white text-xl pt-5 font-semibold ">My Playlists</div>

            <div className="py-4 grid gap-5 grid-cols-5 ">
                {myPlaylists.map(item=>{
                    return <Card key={JSON.stringify(item)} title={item.name}  imgUrl={item.thumbnail} 
                    playlistId={item._id}
                    />
                })}
            </div>

        </LoggedInContainer>
    );
};

const Card =({title,imgUrl,playlistId}) =>{
    const navigate=useNavigate();
    return(
        <div className="bg-black bg-opacity-40 w-full px-3 pt-2 pb-4 rounded-lg cursor-pointer" onClick={()=>{
            navigate("/playlist/"+playlistId);
        }}>
            <div className="pt-2 pb-3 h-4/5 ">
                <img src={imgUrl} className="rounded-md w-full h-full " alt="label" />
            </div>
            <div className="text-white font-semibold py-3 h-1/5">{title}</div>
          
            
        </div>
    );
};

export default Library;